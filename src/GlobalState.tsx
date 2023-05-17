import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component, createContext} from 'react';
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
}
export const LoginContext = createContext({});
export const CartContext = createContext({});
export class GlobalState extends Component<GlobalStateProps, GlobalStateState> {
  constructor(props: GlobalStateProps) {
    super(props);
    this.state = {userData: null, isLoading: true, cartData: []};
  }

  getUserData = async () => {
    try {
      const userData = await AsyncStorage.getItem('USER_DATA');
      if (userData !== null) {
        this.setState({userData: JSON.parse(userData), isLoading: false});
      }
    } catch (error) {
      console.log('unable to get user data', error);
    }
  };
  addToCart = (item: CartItemTypes) => {
    const {cartData} = this.state;
    console.log(item, '========>');

    const duplicates = cartData?.find(ele => item === ele);

    if (duplicates === undefined) {
      this.setState({cartData: [...cartData, item]});
    } else {
      this.incrementQuantity(item);
    }
  };
  incrementQuantity = (item: CartItemTypes) => {
    this.setState({
      cartData: this.state.cartData.map(ele => {
        if (ele.id === item.id) {
          return {
            ...ele,
            quantity: item.quantity + 1,
          };
        }
        return ele;
      }),
    });
  };
  decrementQuantity = (item: CartItemTypes) => {
    this.setState({
      cartData: this.state.cartData.map(ele => {
        if (ele.id === item.id && item.quantity > 1) {
          return {
            ...ele,
            quantity: item.quantity - 1,
          };
        } else if (item.quantity < 2) {
          this.deleteCartItem(item.id);
        }
        return ele;
      }),
    });
  };
  deleteCartItem = (id: string) => {
    this.setState({
      cartData: this.state.cartData.filter(
        ele => {
          return ele.id !== id;
        },
        () => {
          console.log({state: this.state.cartData});
        },
      ),
    });
  };

  render() {
    return (
      <LoginContext.Provider
        value={{
          getUserInfo: this.getUserData,
          userInfo: this.state.userData,
          loading: this.state.isLoading,
        }}>
        <CartContext.Provider
          value={{
            cart: this.state.cartData,
            addItemInCart: this.addToCart,
            increment: this.incrementQuantity,
            decrement: this.decrementQuantity,
            deleteItem: this.deleteCartItem,
          }}>
          {this.props.children}
        </CartContext.Provider>
      </LoginContext.Provider>
    );
  }
}

export default GlobalState;
