import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Modal,
  FlatList,
  ScrollView,
} from 'react-native';
import {height, width} from '../../../constants/ScreenDimentions';
import {ios} from '../../../constants/Platform';
import {colors} from '../../../constants/Colors';
import {CartContext} from '../../../GlobalState';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {payTypes} from '../../../data/payTypes';

interface CheckoutProps {
  navigation?: any;
}
interface CheckoutState {
  addressToggle: boolean;
  addressData: any[];
  checkoutToggle: boolean;
  isCreditCard: boolean;
  isUpi: boolean;
  isBank: boolean;
  isCod: boolean;
}
export class Checkout extends Component<CheckoutProps, CheckoutState> {
  constructor(props: CheckoutProps) {
    super(props);
    this.state = {
      addressToggle: false,
      checkoutToggle: false,
      addressData: [
        {
          id: 'add1',
          address:
            'near Hocky building, raj royal,House no 13, lakadganj nagpur Maharashtra 441001',
        },
        {
          id: 'add2',
          address:
            'Old Agra Rd, teka Naka,Gaikwad Nagar, Nagpur, Maharashtra 441001',
        },
      ],
      isCreditCard: true,
      isUpi: false,
      isBank: false,
      isCod: false,
    };
  }
  static contextType = CartContext;
  itemsList = ({item}) => {
    const {increment, decrement, deleteItem} = this.context;
    return (
      <View style={styles.cartCard}>
        <Image style={styles.img} source={item.img} />
        <View style={styles.innerCardView}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.price}>
            ₹{item.price}{' '}
            {item.off_price && (
              <Text style={styles.offPrice}>₹{item.off_price}</Text>
            )}
          </Text>
          <View style={styles.btns}>
            <View style={styles.quantityView}>
              <TouchableOpacity
                style={styles.minus}
                onPress={() => decrement(item)}>
                <Image source={require('../../../assets/minus.png')} />
              </TouchableOpacity>
              <View style={styles.middleQuantity}>
                <Text style={styles.qNum}>{item.quantity}</Text>
              </View>
              <TouchableOpacity
                style={styles.plus}
                onPress={() => increment(item)}>
                <Image source={require('../../../assets/plu.png')} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.del}
              onPress={() => deleteItem(item.id)}>
              <Image source={require('../../../assets/del.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  addressList = ({item}) => {
    return (
      <View style={styles.addressCard}>
        <View style={styles.addtick}>
          <TouchableOpacity
            onPress={() =>
              this.setState({addressToggle: !this.state.addressToggle})
            }
            style={
              this.state.addressToggle ? styles.circle : styles.circleGrey
            }>
            <View
              style={
                this.state.addressToggle
                  ? styles.innerCircle
                  : styles.innerCircleGrey
              }
            />
          </TouchableOpacity>
        </View>
        <View style={styles.addAddress}>
          <Text style={styles.addressText}>{item.address}</Text>
        </View>
        <View style={styles.addEditDele}>
          <Image source={require('../../../assets/addressPencile.png')} />
          <Image source={require('../../../assets/addressDel.png')} />
        </View>
      </View>
    );
  };
  payTypes = ({item}) => {
    return (
      <View style={styles.payCard}>
        <View style={styles.payImgView}>
          <Image source={item.img} />
        </View>
        <View style={styles.payTextView}>
          <Text style={styles.payTypeText}>{item.text}</Text>
          {item.text_two && <Text style={styles.Xtext}>XXXX XXXX XXXX</Text>}
        </View>
        <View style={styles.payCardTick}>
          <TouchableOpacity
            onPress={() => this.payMethodToggleHandler(item.id)}
            style={item.isSelected ? styles.circle : styles.circleGrey}>
            {item.isSelected && (
              <View
                style={
                  item.isSelected ? styles.innerCircle : styles.innerCircleGrey
                }
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  paymentContinueHandler = () => {
    const {isBank, isCod, isCreditCard, isUpi} = this.state;
    const {navigate} = this.props.navigation;
    isBank
      ? navigate('Bank')
      : isCod
      ? navigate('Cod')
      : isCreditCard
      ? navigate('Card')
      : isUpi
      ? navigate('Upi')
      : null;
    this.setState({checkoutToggle: false});
  };
  creditCard = () => {
    this.setState({
      isCreditCard: true,
      isBank: false,
      isCod: false,
      isUpi: false,
    });
  };
  bank = () => {
    this.setState({
      isCreditCard: false,
      isBank: true,
      isCod: false,
      isUpi: false,
    });
  };
  upi = () => {
    this.setState({
      isCreditCard: false,
      isBank: false,
      isCod: false,
      isUpi: true,
    });
  };
  cod = () => {
    this.setState({
      isCreditCard: false,
      isBank: false,
      isCod: true,
      isUpi: false,
    });
  };
  render() {
    const {cart} = this.context;
    const {isBank, isCod, isCreditCard, isUpi} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.innerHeaderView}
            onPress={() => this.props.navigation.goBack()}>
            <View>
              <Image source={require('../../../assets/backArrow.png')} />
            </View>
            <Text style={styles.heading}>Checkout</Text>
          </TouchableOpacity>
        </View>
        <SafeAreaView>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: '30%'}}>
            <View style={styles.orderItemDetails}>
              <Text style={styles.text}>Order Item Details</Text>
              <FlatList
                data={cart}
                renderItem={this.itemsList}
                keyExtractor={item => item.id}
                scrollEnabled={false}
              />
            </View>
            <View style={styles.devider} />
            <View style={styles.couponOnCode}>
              <Text style={styles.text}>Coupon On Code</Text>
              <View style={styles.dottedBox}>
                <Text style={styles.couponName}>PIZZA40</Text>
                <TouchableOpacity style={styles.couponBtn}>
                  <Image
                    source={require('../../../assets/offerRightArrow.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.devider} />
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
                <Text style={styles.billText}>Coupon Discount</Text>
                <Text style={styles.billText}>₹30</Text>
              </View>
              <View style={styles.line} />
              <View style={styles.billInfo}>
                <Text style={[styles.billText, {color: colors.black}]}>
                  Grand Total
                </Text>
                <Text style={[styles.billText, {color: 'red'}]}>₹324</Text>
              </View>
            </View>
            <View style={styles.devider} />
            <View style={styles.addressView}>
              <Text style={styles.text}>Address Details</Text>
              <FlatList
                data={this.state.addressData}
                renderItem={this.addressList}
                keyExtractor={item => item.id}
                scrollEnabled={false}
              />
              <View style={styles.addText}>
                <Text style={styles.addAddressText}>
                  Add New Delivery Address
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.setState({checkoutToggle: true})}>
              <Text style={styles.continueText}>Continue</Text>
            </TouchableOpacity>
          </ScrollView>
          <Modal transparent visible={this.state.checkoutToggle}>
            <View style={styles.payViewContainer}>
              <SafeAreaView style={styles.payView}>
                {/* <FlatList
                  data={this.state.payTypesList}
                  renderItem={this.payTypes}
                  keyExtractor={item => item.id}
                /> */}
                <View style={styles.payCard}>
                  <View style={styles.payImgView}>
                    <Image source={require('../../../assets/creditCard.png')} />
                  </View>
                  <View style={styles.payTextView}>
                    <Text style={styles.payTypeText}>Credit Card</Text>

                    <Text style={styles.Xtext}>XXXX XXXX XXXX</Text>
                  </View>
                  <View style={styles.payCardTick}>
                    <TouchableOpacity
                      onPress={() => this.creditCard()}
                      style={isCreditCard ? styles.circle : styles.circleGrey}>
                      {isCreditCard && (
                        <View
                          style={
                            isCreditCard
                              ? styles.innerCircle
                              : styles.innerCircleGrey
                          }
                        />
                      )}
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.payCard}>
                  <View style={styles.payImgView}>
                    <Image source={require('../../../assets/bankAcc.png')} />
                  </View>
                  <View style={styles.payTextView}>
                    <Text style={styles.payTypeText}>Bank Account</Text>
                  </View>
                  <View style={styles.payCardTick}>
                    <TouchableOpacity
                      onPress={() => this.bank()}
                      style={isBank ? styles.circle : styles.circleGrey}>
                      {isBank && (
                        <View
                          style={
                            isBank ? styles.innerCircle : styles.innerCircleGrey
                          }
                        />
                      )}
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.payCard}>
                  <View style={styles.payImgView}>
                    <Image source={require('../../../assets/upi.png')} />
                  </View>
                  <View style={styles.payTextView}>
                    <Text style={styles.payTypeText}>UPI</Text>
                  </View>
                  <View style={styles.payCardTick}>
                    <TouchableOpacity
                      onPress={() => this.upi()}
                      style={isUpi ? styles.circle : styles.circleGrey}>
                      {isUpi && (
                        <View
                          style={
                            isUpi ? styles.innerCircle : styles.innerCircleGrey
                          }
                        />
                      )}
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.payCard}>
                  <View style={styles.payImgView}>
                    <Image source={require('../../../assets/cod.png')} />
                  </View>
                  <View style={styles.payTextView}>
                    <Text style={styles.payTypeText}>Cash On Delivery</Text>
                  </View>
                  <View style={styles.payCardTick}>
                    <TouchableOpacity
                      onPress={() => this.cod()}
                      style={isCod ? styles.circle : styles.circleGrey}>
                      {isCod && (
                        <View
                          style={
                            isCod ? styles.innerCircle : styles.innerCircleGrey
                          }
                        />
                      )}
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    width: '100%',
                    marginTop: '5%',
                  }}>
                  <TouchableOpacity
                    style={styles.btn}
                    onPress={() => this.paymentContinueHandler()}>
                    <Text style={styles.continueText}>Continue</Text>
                  </TouchableOpacity>
                </View>
              </SafeAreaView>
            </View>
          </Modal>
        </SafeAreaView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  payTextView: {width: '50%', paddingTop: '4%'},
  payImgView: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  payTypeText: {
    fontSize: 20,
    color: colors.black,
    fontWeight: '600',
  },
  payCardTick: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Xtext: {
    fontSize: 14,
    color: '#A2A3A5',
    fontWeight: '600',
    marginTop: '2%',
  },
  payCard: {
    height: 75,
    width: '90%',
    backgroundColor: '#FAF8F7',
    alignSelf: 'center',
    marginTop: '5%',
    borderRadius: 10,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#EDEDED',
  },
  payViewContainer: {
    height,
    width,
    backgroundColor: '#000000aa',
  },
  payView: {
    position: 'absolute',
    height: '60%',
    width,
    backgroundColor: 'white',
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  continueText: {fontWeight: '700', color: 'white', fontSize: 22},
  btn: {
    height: 50,
    width: '90%',
    backgroundColor: '#94CD00',
    alignSelf: 'center',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
    elevation: 10,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: 'green',
  },
  addText: {alignSelf: 'center'},
  addAddressText: {
    fontWeight: '600',
    color: 'red',
    fontSize: 18,
    marginTop: '5%',
    textDecorationLine: 'underline',
  },
  addEditDele: {
    width: '13%',
    height: '100%',
    justifyContent: 'space-between',
    marginLeft: '4%',
    paddingTop: '8%',
    paddingBottom: '8%',
  },
  addressText: {
    color: colors.black,
    fontSize: 17,
    fontWeight: '500',
    marginLeft: '2%',
    marginTop: '5%',
    textAlign: 'left',
  },
  addAddress: {width: '77%', height: '100%'},
  addtick: {
    width: '10%',
    height: '100%',
    padding: 20,
  },
  innerCircle: {
    height: 8,
    width: 8,
    backgroundColor: 'red',
    borderRadius: 4,
  },
  innerCircleGrey: {
    height: 8,
    width: 8,
    backgroundColor: 'grey',
    borderRadius: 4,
  },
  circle: {
    height: 15,
    width: 15,
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleGrey: {
    height: 15,
    width: 15,
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addressCard: {
    width: '90%',
    height: 120,
    backgroundColor: '#FFF3E5',
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    marginTop: '5%',
  },
  addressView: {marginTop: '5%', width},
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
  billView: {
    width,
    marginTop: '5%',
    paddingBottom: '5%',
    paddingTop: '5%',
    marginBottom: '5%',
  },
  totalBill: {},
  couponBtn: {
    height: 40,
    width: 40,
    backgroundColor: 'red',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  couponName: {
    fontSize: 18,
    color: colors.black,
    fontWeight: '600',
  },
  dottedBox: {
    width: '90%',
    alignSelf: 'center',
    height: 70,
    borderWidth: 2,
    marginTop: '5%',
    borderRadius: 10,
    borderStyle: 'dashed',
    borderColor: '#DF201F',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
  },
  couponOnCode: {width, paddingTop: '5%', paddingBottom: '6%'},
  devider: {height: 15, backgroundColor: '#F6F6F6', width},
  qNum: {
    color: colors.black,
    fontSize: 18,
    fontWeight: '600',
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
    borderColor: colors.borderColor,
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
    width: '60%',
    padding: 10,
    justifyContent: 'space-evenly',
    marginLeft: '2%',
  },
  img: {
    width: '35%',
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
    marginTop: '5%',
    borderRadius: 15,
    flexDirection: 'row',
    marginBottom: '2%',
  },
  text: {
    fontSize: 19,
    fontWeight: '600',
    color: colors.black,
    marginLeft: '5%',
  },
  orderItemDetails: {marginTop: '5%', width, marginBottom: '6%'},
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
  container: {height, width, backgroundColor: 'white'},
});
export default Checkout;
