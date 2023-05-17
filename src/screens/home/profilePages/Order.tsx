import React, {Component} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {height, width} from '../../../constants/ScreenDimentions';
import {ios} from '../../../constants/Platform';
import {colors} from '../../../constants/Colors';
interface OrderProps {
  navigation?: any;
}
interface OrderState {}
export class Order extends Component<OrderProps, OrderState> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.innerHeaderView}
            onPress={() => this.props.navigation.goBack()}>
            <View>
              <Image source={require('../../../assets/backArrow.png')} />
            </View>
            <Text style={styles.heading}>Order</Text>
          </TouchableOpacity>
        </View>
        <SafeAreaView style={{width}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.orderInfo}>
              <View style={{width: '70%'}}>
                <Text style={styles.orderId}>Order# ORDO00003</Text>
                <Text style={styles.date}>25 March, 03:25 PM</Text>
              </View>
              <View style={{width: '30%'}}>
                <Text style={styles.track}>Track Order</Text>
              </View>
            </View>
            <View style={styles.orderItemsView}>
              <Text style={styles.ordertext}>Ordered Items</Text>
              <View style={styles.orderCard}>
                <Image
                  style={styles.img}
                  source={require('../../../assets/burgerWithShadow.png')}
                />
                <View style={styles.innerCardView}>
                  <Text style={styles.text}>Hamburger</Text>
                  <Text style={styles.price}>₹100</Text>
                </View>
              </View>
            </View>
            <View style={styles.billView}>
              <View style={styles.billInfo}>
                <Text style={[styles.billText, {color: colors.black}]}>
                  Total Bill
                </Text>
                <Text style={[styles.billText, {color: colors.black}]}>
                  ₹300
                </Text>
              </View>
              <View style={styles.line} />
              <View style={styles.billInfo}>
                <Text style={styles.billText}>Delivery Charge</Text>
                <Text style={styles.billText}>₹0.00</Text>
              </View>
              <View style={styles.line} />
              <View style={styles.billInfo}>
                <Text style={styles.billText}>Packing Charge</Text>
                <Text style={styles.billText}>₹9</Text>
              </View>
              <View style={styles.line} />
              <View style={styles.billInfo}>
                <Text style={styles.billText}>Tax Amount(5.0%)</Text>
                <Text style={styles.billText}>₹15</Text>
              </View>
              <View style={styles.line} />
              <View style={styles.billInfo}>
                <Text style={styles.billText}>Total Discount</Text>
                <Text style={styles.billText}>₹0.00</Text>
              </View>
              <View style={styles.line} />
              <View style={styles.billInfo}>
                <Text style={[styles.billText, {color: colors.black}]}>
                  Grand Total
                </Text>
                <Text style={[styles.billText, {color: 'red'}]}>₹324</Text>
              </View>
            </View>
            <View style={styles.restaurantDetails}>
              <Text style={styles.ordertext}>Restaurant Details</Text>
              <View style={styles.imgView}>
                <Image
                  style={styles.imgs}
                  source={require('../../../assets/img.jpeg')}
                />
              </View>
              <View style={styles.resName}>
                <Text style={styles.bestName}>Golden Fish Restaurant</Text>
                <View style={styles.resMiddleView}>
                  <View style={styles.kmView}>
                    <Image
                      style={styles.resPin}
                      source={require('../../../assets/pin.png')}
                    />
                    <Text style={styles.resKm}>2.5km</Text>
                  </View>
                  <View style={styles.resBottomView}>
                    <Image
                      style={styles.star}
                      source={require('../../../assets/star.png')}
                    />
                  </View>
                </View>
                <Text style={[styles.tRes, {fontSize: 16}]}>
                  Manish Nagar, Ingole Nagar, Sonegaon, Nagpur
                </Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
        <TouchableOpacity style={styles.call}>
          <Image source={require('../../../assets/phone.png')} />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  call: {
    height: 60,
    width: 60,
    backgroundColor: colors.lime,
    borderRadius: 30,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: '4%',
    bottom: '2%',
    elevation: 10,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: 'green',
  },
  tRes: {
    // marginLeft: '2%',
    color: '#A2A3A5',
    fontWeight: '600',
    fontSize: 18,
  },
  bestName: {fontSize: 22, fontWeight: '600', color: '#161A1D'},
  star: {marginLeft: '25%'},
  resBottomView: {flexDirection: 'row', alignItems: 'center'},
  resKm: {fontSize: 15, color: '#DF201F', fontWeight: '600'},
  resPin: {
    tintColor: '#DF201F',
    marginRight: '4%',
    // marginLeft: '4%',
  },
  kmView: {flexDirection: 'row', alignItems: 'center'},
  resMiddleView: {flexDirection: 'row'},
  resName: {
    height: '25%',
    width: '100%',
    padding: 20,
    justifyContent: 'space-between',
  },
  imgs: {
    height: '100%',
    width: '100%',
    borderRadius: 8,
    marginLeft: 20,
  },
  imgView: {height: 180, width: 300},
  restaurantDetails: {marginTop: '8%', width, height: 500},
  line: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.borderColor,
    width: '90%',
    alignSelf: 'center',
    marginTop: '5%',
    marginBottom: '3%',
  },
  billText: {fontSize: 20, color: colors.gray, fontWeight: '600'},
  billInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
  },
  billView: {width, marginTop: '6%'},
  price: {color: 'red', fontSize: 15, fontWeight: '600'},
  text: {
    color: colors.black,
    fontSize: 18,
    fontWeight: '600',
  },
  innerCardView: {width: '55%', paddingLeft: 10, height: 50},
  img: {
    width: '40%',
    marginLeft: '5%',
    resizeMode: 'contain',
  },
  orderCard: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 260,
    height: 90,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.borderColor,
    marginLeft: 20,
    flexDirection: 'row',
  },
  orderItemsView: {marginTop: '6%', width},
  ordertext: {
    marginLeft: '5%',
    marginBottom: '5%',
    fontSize: 18,
    fontWeight: '600',
    color: colors.black,
  },
  track: {
    color: colors.lime,
    fontSize: 18,
    fontWeight: '600',
  },
  date: {
    marginTop: '2%',
    color: colors.gray,
    fontSize: 15,
    fontWeight: '600',
  },
  orderId: {
    color: colors.black,
    fontSize: 22,
    fontWeight: '600',
  },
  orderInfo: {
    width: '90%',
    marginTop: '5%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  container: {height, width, backgroundColor: 'white'},
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
});
export default Order;
