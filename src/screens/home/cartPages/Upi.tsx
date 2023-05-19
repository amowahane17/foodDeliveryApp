import React, {Component} from 'react';
import {
  Alert,
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {height, width} from '../../../constants/ScreenDimentions';
import {ios} from '../../../constants/Platform';
import {colors} from '../../../constants/Colors';
import RazorpayCheckout from 'react-native-razorpay';
import {CartContext} from '../../../GlobalState';
export class Upi extends Component {
  constructor() {
    super();
    this.state = {orderSuccessModal: false};
  }
  static contextType?: React.Context<any> | undefined = CartContext;
  razorpayHandler = (total, gTotal) => {
    const {orderHistory, cart, clearCart} = this.context;
    let options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.jpg',
      currency: 'INR',
      key: 'rzp_test_locuRaWt3KL2uf',
      amount: `${gTotal * 100}`,
      name: 'Acme Corp',
      // order_id: 'order_DslnoIgkIDL8Zt', //Replace this with an order_id created using Orders API.
      prefill: {
        email: 'gaurav.kumar@example.com',
        contact: '9191919191',
        name: 'Gaurav Kumar',
      },
      theme: {color: '#53a20e'},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        // handle success
        // console.log(data.razorpay_signature, 'razorpay');
        // Alert.alert(`Success: ${data.razorpay_payment_id}`);
        this.setState({orderSuccessModal: true});
        orderHistory({
          id: Date.now().toString(),
          totalBill: total,
          grandTotal: gTotal,
          paymentId: `${data.razorpay_payment_id}`,
          items: cart,
          date:
            new Date().getDate() +
            '/' +
            (new Date().getMonth() + 1) +
            '/' +
            new Date().getFullYear() +
            ' ' +
            new Date().getHours() +
            ':' +
            new Date().getMinutes(),
        });
        clearCart();
        setTimeout(() => {
          this.setState({orderSuccessModal: false});
          this.props.navigation.navigate('Home');
        }, 2000);
      })
      .catch(error => {
        // handle failure
        Alert.alert(`Error: ${error.code} | ${error.description}`);
      });
  };
  render() {
    const {total, gTotal} = this.props.route.params;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.innerHeaderView}
            onPress={() => this.props.navigation.goBack()}>
            <View>
              <Image source={require('../../../assets/backArrow.png')} />
            </View>
            <Text style={styles.heading}>UPI</Text>
          </TouchableOpacity>
        </View>
        <SafeAreaView>
          <View style={styles.cardNumberView}>
            <Text style={styles.text}>UPI</Text>
            <TextInput placeholder="UPI Id" style={styles.cardNumTextBox} />
          </View>
          <View style={{height: '35%', width}}>
            <TouchableOpacity
              onPress={() => this.razorpayHandler(total, gTotal)}
              style={styles.checkout}>
              <Text style={styles.checkoutText}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        <Modal transparent visible={this.state.orderSuccessModal}>
          <View style={styles.yView}>
            <View style={styles.tickCon}>
              <View style={styles.tickimg}>
                <Image source={require('../../../assets/rightTick.png')} />
              </View>
              <Text style={styles.orderText}>Order Successful!</Text>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  yView: {
    height,
    width,
    backgroundColor: '#000000aa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tickCon: {
    backgroundColor: 'white',
    height: '20%',
    width: '60%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tickimg: {
    height: 70,
    width: 70,
    borderRadius: 35,
    backgroundColor: colors.lime,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderText: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.black,
    marginTop: '5%',
  },
  checkoutText: {fontWeight: '700', color: 'white', fontSize: 22},
  checkout: {
    height: 50,
    width: '90%',
    backgroundColor: '#94CD00',
    alignSelf: 'center',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: 'green',
  },
  cardNumberView: {width, height: '70%', marginTop: '5%'},
  cardNumTextBox: {
    height: 70,
    width: '90%',
    borderWidth: 2,
    borderColor: '#E8E8E8',
    alignSelf: 'center',
    borderRadius: 15,
    marginTop: '4%',
    paddingLeft: '5%',
    color: colors.black,
    fontSize: 20,
  },
  text: {
    fontWeight: '600',
    color: colors.black,
    fontSize: 16,
    marginLeft: '5%',
  },
  innerHeaderView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginLeft: '5%',
    marginBottom: '5%',
  },
  heading: {
    fontSize: 22,
    marginLeft: '10%',
    fontWeight: '600',
    color: '#161A1D',
  },
  header: {
    height: ios ? 130 : 100,
    width,
    backgroundColor: 'white',
    elevation: 10,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: 'orange',
    flexDirection: 'row',
  },
  container: {width, height, backgroundColor: 'white'},
});
export default Upi;
