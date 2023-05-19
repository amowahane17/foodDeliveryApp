import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component, createContext} from 'react';
import firestore from '@react-native-firebase/firestore';
export interface CartItemTypes {
  img: any;
  name: string;
  off_price?: number;
  quantity: number;
  id: string;
  price: number;
}
interface GlobalStateProps {
  children: any;
}
interface GlobalStateState {
  userData: null | {
    email: string;
    name: string;
    passcode: string;
    phone: string;
    state: string;
  };
  cartData: any[];
  isLoading: boolean;
  cityName: string;
  stateName: string;
  orderHistory: any[];
}
export const LoginContext = createContext({});
export const CartContext = createContext({});
export class GlobalState extends Component<GlobalStateProps, GlobalStateState> {
  constructor(props: GlobalStateProps) {
    super(props);
    this.state = {
      userData: null,
      isLoading: true,
      cartData: [],
      cityName: '',
      stateName: '',
      orderHistory: [],
    };
  }
  updateInFirestore = cartValue => {
    firestore()
      .collection('Users')
      .doc(this.state.userData?.phone)
      .update({
        cart: cartValue,
      })
      .then(() => {
        console.log('User updated!');
      })
      .catch(error => console.log(error, 'update failed'));
  };
  getUserData = async () => {
    try {
      const userData = await AsyncStorage.getItem('USER_DATA');
      if (userData !== null) {
        this.setState({userData: JSON.parse(userData)});
        const user = await firestore()
          .collection('Users')
          .doc(this.state.userData?.phone)
          .get();
        const data = user.data();
        if (data !== undefined) {
          this.setState({
            cityName: data.city,
            stateName: data.state,
            isLoading: false,
          });
        }
      }
    } catch (error) {
      console.log('unable to get user data', error);
    }
  };

  addToCart = async (item: CartItemTypes) => {
    const {cartData} = this.state;
    const duplicates = cartData.find(ele => item === ele);
    if (duplicates === undefined) {
      const cartValue = [...cartData, item];
      this.setState({cartData: cartValue});
      this.updateInFirestore(cartValue);
    }
  };
  incrementQuantity = (item: CartItemTypes) => {
    const incrementValue = this.state.cartData.map(ele => {
      if (ele.id === item.id) {
        return {
          ...ele,
          quantity: item.quantity + 1,
        };
      }
      return ele;
    });
    this.setState({
      cartData: incrementValue,
    });
    this.updateInFirestore(incrementValue);
  };
  decrementQuantity = (item: CartItemTypes) => {
    const decValue = this.state.cartData.map(ele => {
      if (ele.id === item.id && item.quantity > 1) {
        return {
          ...ele,
          quantity: item.quantity - 1,
        };
      } else if (item.quantity < 2) {
        this.deleteCartItem(item.id);
      }
      return ele;
    });
    this.setState({
      cartData: decValue,
    });
    this.updateInFirestore(decValue);
  };
  deleteCartItem = (id: string) => {
    const delValue = this.state.cartData.filter(ele => {
      return ele.id !== id;
    });
    this.setState({
      cartData: delValue,
    });
    this.updateInFirestore(delValue);
  };
  orderHistoryHandler = item => {
    const orderValue = [...this.state.orderHistory, item];
    this.setState({orderHistory: orderValue});
  };
  paySuccess = () => {
    this.setState({cartData: []});
    this.updateInFirestore([]);
  };
  render() {
    return (
      <LoginContext.Provider
        value={{
          getUserInfo: this.getUserData,
          userInfo: this.state.userData,
          loading: this.state.isLoading,
          city: this.state.cityName,
          state: this.state.stateName,
        }}>
        <CartContext.Provider
          value={{
            userInfo: this.state.userData,
            cart: this.state.cartData,
            addItemInCart: this.addToCart,
            increment: this.incrementQuantity,
            decrement: this.decrementQuantity,
            deleteItem: this.deleteCartItem,
            orderHistory: this.orderHistoryHandler,
            orderData: this.state.orderHistory,
            clearCart: this.paySuccess,
          }}>
          {this.props.children}
        </CartContext.Provider>
      </LoginContext.Provider>
    );
  }
}

export default GlobalState;
