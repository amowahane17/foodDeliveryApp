import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {ios} from '../../../constants/Platform';
import {height, width} from '../../../constants/ScreenDimentions';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {colors} from '../../../constants/Colors';
interface ItemInfoProps {
  route?: any;
}
interface ItemInfoState {
  currIndex: number;
}
export class ItemInfo extends Component<ItemInfoProps, ItemInfoState> {
  constructor(props: ItemInfoProps) {
    super(props);
    this.state = {currIndex: 0};
  }
  _renderItem = ({item}) => {
    return (
      <View style={styles.imgContainer}>
        <Image source={item.img} />
      </View>
    );
  };

  render() {
    const paramItem = this.props.route.params.singleItem;
    console.log(paramItem);

    return (
      <SafeAreaView>
        <View style={styles.container}>
          <View style={[styles.topView, {backgroundColor: paramItem.color}]}>
            <View style={styles.btns}>
              <TouchableOpacity
                onPress={() => this.props.navigation.goBack()}
                style={styles.circle}>
                <Image source={require('../../../assets/backArrow.png')} />
              </TouchableOpacity>
              <View style={styles.circle}>
                <Image source={require('../../../assets/heart.png')} />
              </View>
            </View>
            <Carousel
              hasParallaxImages={true}
              layout="default"
              data={paramItem.display_images}
              renderItem={this._renderItem}
              sliderWidth={width}
              itemWidth={400}
              scrollEnabled
              loop={true}
              autoplay={true}
              autoplayDelay={2000}
              onSnapToItem={index => this.setState({currIndex: index})}
            />
            <View style={styles.pagination}>
              <Pagination
                dotsLength={paramItem.display_images.length}
                activeDotIndex={this.state.currIndex}
                dotStyle={styles.dot}
                inactiveDotStyle={styles.inactiveDot}
                inactiveDotOpacity={1}
                inactiveDotScale={1}
              />
            </View>
          </View>
          <View style={styles.bottomView}>
            <View style={styles.textView}>
              <Text style={styles.name}>{paramItem.name}</Text>
              <Text style={styles.price}>
                ₹{paramItem.price}
                {'  '}
                <Text style={styles.offPrice}>₹{paramItem.off_price}</Text>
              </Text>
            </View>

            <View style={styles.btnsContainer}>
              <View style={{width: '45%'}}>
                <Text style={styles.text}>Size</Text>
                <View style={styles.smlContainer}>
                  <TouchableOpacity style={styles.smlBtn}>
                    <Text style={styles.smlText}>S</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.smlBtn}>
                    <Text style={styles.smlText}>M</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.smlBtn}>
                    <Text style={styles.smlText}>L</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <Text style={styles.text}>Quantity</Text>
                <View style={styles.qbtns}>
                  <View style={styles.quantityView}>
                    <TouchableOpacity style={styles.minus}>
                      <Image source={require('../../../assets/minus.png')} />
                    </TouchableOpacity>
                    <View style={styles.middleQuantity}>
                      <Text style={styles.qNum}>{paramItem.quantity}</Text>
                    </View>
                    <TouchableOpacity style={styles.plus}>
                      <Image source={require('../../../assets/plu.png')} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.desContainer}>
              <Text style={styles.text}>Description</Text>
              <Text style={styles.desText}>
                If you use this site regularly and would like to help keep the
                site on the Internet, please consider donating a small sum to
                help pay for the hosting.
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.cartBtn}>
            <Text style={styles.cartText}>ADD TO CART</Text>
            <Image
              style={{marginLeft: '2%'}}
              source={require('../../../assets/plusCart.png')}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  qNum: {
    color: colors.black,
    fontSize: 18,
    fontWeight: '600',
  },
  cartText: {fontWeight: '700', color: 'white', fontSize: 22},
  pagination: {position: 'absolute', alignSelf: 'center', bottom: -10},
  cartBtn: {
    width: '90%',
    height: 60,
    alignSelf: 'center',
    backgroundColor: 'red',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: '1%',
  },
  desText: {
    color: colors.gray,
    fontSize: 16,
    fontWeight: '600',
    marginTop: '4%',
    textAlign: 'justify',
    lineHeight: 25,
  },
  desContainer: {width: '100%', alignSelf: 'center', marginTop: '6%'},
  text: {fontWeight: '600', fontSize: 18, color: colors.black},
  smlContainer: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '5%',
  },
  btnsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    marginTop: '5%',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  middleQuantity: {
    height: 45,
    width: 52,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: colors.borderColor,
    elevation: 5,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowColor: 'red',
  },
  plus: {
    height: 45,
    width: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    elevation: 5,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowColor: 'red',
  },
  minus: {
    height: 45,
    width: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    elevation: 5,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowColor: 'red',
  },
  quantityView: {
    // width: 110,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    width: '55%',
  },
  qbtns: {
    marginRight: '5%',
    marginTop: '6%',
  },
  smlText: {color: colors.black, fontWeight: '600', fontSize: 18},
  smlBtn: {
    width: 40,
    height: 45,
    backgroundColor: 'white',
    elevation: 5,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowColor: 'red',
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  offPrice: {
    textDecorationLine: 'line-through',
  },
  price: {color: 'red', fontSize: 18, fontWeight: '600'},
  name: {color: colors.black, fontSize: 26, fontWeight: '600'},
  textView: {
    width,
    height: ios ? '12%' : '14%',
    justifyContent: 'space-between',
  },
  inactiveDot: {
    height: 12,
    width: 12,
    backgroundColor: 'white',
    borderRadius: 6,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 0,
    backgroundColor: 'red',
  },
  imgContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
  btns: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: '5%',
    position: 'absolute',
    zIndex: 1,
  },
  circle: {
    height: 50,
    width: 50,
    backgroundColor: 'white',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topView: {width, height: ios ? '40%' : '45%'},
  bottomView: {width, height: '45%', padding: 20},
  container: {height, width, backgroundColor: 'white'},
});
export default ItemInfo;
