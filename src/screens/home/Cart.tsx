import React, {Component} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {width, height} from '../../constants/ScreenDimentions';
import {ios} from '../../constants/Platform';
import {colors} from '../../constants/Colors';

export class Cart extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.heading}>Cart</Text>
        </View>
        <SafeAreaView style={{width, height}}>
          <View style={{width, height: ios ? '70%' : '72%'}}>
            <View style={styles.cartCard}>
              <Image
                style={styles.img}
                source={require('../../assets/pizzaWithShadow.png')}
              />
              <View style={styles.innerCardView}>
                <Text style={styles.itemName}>Pizza</Text>
                <Text style={styles.price}>
                  ₹100 <Text style={styles.offPrice}>₹200</Text>
                </Text>
                <View style={styles.btns}>
                  <View style={styles.quantityView}>
                    <TouchableOpacity style={styles.minus}>
                      <Image source={require('../../assets/minus.png')} />
                    </TouchableOpacity>
                    <View style={styles.middleQuantity}>
                      <Text style={styles.qNum}>1</Text>
                    </View>
                    <TouchableOpacity style={styles.plus}>
                      <Image source={require('../../assets/plu.png')} />
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity style={styles.del}>
                    <Image source={require('../../assets/del.png')} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View>
            <TouchableOpacity style={styles.checkout}>
              <Text style={styles.checkoutText}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  qNum: {
    color: colors.black,
    fontSize: 18,
    fontWeight: '600',
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
  },
  del: {
    height: 40,
    width: 45,
    backgroundColor: 'red',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '14%',
  },
  middleQuantity: {
    height: '100%',
    width: 48,
    backgroundColor: '#FFE5E5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: 'gray',
  },
  plus: {
    height: '100%',
    width: 40,
    backgroundColor: '#FFE5E5',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  minus: {
    height: '100%',
    width: 40,
    backgroundColor: '#FFE5E5',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  quantityView: {
    width: 110,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btns: {flexDirection: 'row'},
  offPrice: {textDecorationLine: 'line-through'},
  price: {color: 'red', fontWeight: '600', fontSize: 15},
  itemName: {fontSize: 18, color: '#161A1D', fontWeight: '600'},
  innerCardView: {
    width: '55%',
    padding: 10,
    justifyContent: 'space-evenly',
  },
  img: {
    width: '40%',
    height: '100%',
    resizeMode: 'contain',
    marginLeft: '5%',
  },
  cartCard: {
    height: 126,
    width: '90%',
    alignSelf: 'center',
    elevation: 10,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: 'orange',
    backgroundColor: 'white',
    marginTop: 20,
    borderRadius: 15,
    flexDirection: 'row',
  },
  container: {height, width, backgroundColor: 'white'},
  heading: {
    alignSelf: 'flex-end',
    fontSize: 22,
    marginBottom: '5%',
    marginLeft: '5%',
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
});
export default Cart;
