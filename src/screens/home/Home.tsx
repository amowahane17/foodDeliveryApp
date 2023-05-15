import React, {Component} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {height, width} from '../../constants/ScreenDimentions';
import {ItemsDataTypes, itemsData} from '../../data/itemsData';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {CarouselDataTypes, carouselData} from '../../data/carouselData';
import {bestChoise, BestChoiseTypes} from '../../data/bestChoise';
import {TodaySpecialTypes, todaySpecial} from '../../data/todaySpecial';
import {RestaurantDataTypes, restaurantData} from '../../data/restaurantData';
import {ios} from '../../constants/Platform';
import {LoginContext} from '../../GlobalState';
import {CartContext} from '../../GlobalState';
interface HomeProps {
  navigation?: any;
}
interface HomeState {
  currIndex: number;
}
export class Home extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      currIndex: 0,
    };
  }
  static contextType = LoginContext;
  componentDidMount = async () => {
    const {getUserInfo} = this.context;
    await getUserInfo();
  };
  itemsList = ({item}: {item: ItemsDataTypes}) => {
    return (
      <>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('SingleItems', {catItem: item})
          }
          style={[styles.itemscard, {backgroundColor: item.color}]}>
          <Text style={styles.itemText}>{item.name}</Text>
          <Image source={item.img} />
        </TouchableOpacity>
      </>
    );
  };
  _renderItem = ({item}: {item: CarouselDataTypes}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate('OfferItems', {offerItems: item})
        }
        style={{}}>
        <Image source={item.img} />
      </TouchableOpacity>
    );
  };
  bestChoiseList = ({item}: {item: BestChoiseTypes}) => {
    return (
      <CartContext.Consumer>
        {context => (
          <View style={[styles.bestChoiseCards, {backgroundColor: item.color}]}>
            <Image style={styles.img} source={item.img} />
            <View style={styles.innerView}>
              <Text style={styles.bestName}>{item.name}</Text>
              <Text style={styles.bestPrice}>₹{item.price}</Text>
              <Image source={require('../../assets/dish.png')} />
              <Text style={styles.bestRes}>{item.restaurent}</Text>
            </View>
            <TouchableOpacity
              onPress={() => context.addItemInCart(item)}
              style={[styles.circle, {shadowColor: item.sColor}]}>
              <Image
                style={styles.plus}
                source={require('../../assets/plus.png')}
              />
            </TouchableOpacity>
          </View>
        )}
      </CartContext.Consumer>
    );
  };
  todaySpecialList = ({item}: {item: TodaySpecialTypes}) => {
    return (
      <>
        <View style={styles.todaySpecialCards}>
          <Image source={item.img} />
          <View style={styles.tView}>
            <Text style={styles.tName}>{item.name}</Text>
            <Text style={styles.tPrice}>
              ₹{item.price}{' '}
              <Text style={styles.tOffPrice}>₹{item.offPrice}</Text>
            </Text>
            <View style={styles.tSecondView}>
              <Image source={require('../../assets/dish.png')} />
              <Text style={styles.tRes}>{item.restaurant}</Text>
            </View>
          </View>
        </View>
      </>
    );
  };
  restaurantList = ({
    item,
    index,
  }: {
    item: RestaurantDataTypes;
    index: number;
  }) => {
    const isEnd = index === restaurantData.length - 1;
    return (
      <>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('NearbyRestaurant', {resData: item})
          }
          style={styles.resCards}>
          <Image style={styles.resImg} source={item.img} />
          <View style={styles.resName}>
            <Text style={styles.bestName}>{item.name}</Text>
            <View style={styles.resMiddleView}>
              <View style={styles.kmView}>
                <Image
                  style={styles.resPin}
                  source={require('../../assets/pin.png')}
                />
                <Text style={styles.resKm}>{item.distance}km</Text>
              </View>
              <View style={styles.resBottomView}>
                <Image
                  style={styles.star}
                  source={require('../../assets/star.png')}
                />
              </View>
            </View>
            <Text style={[styles.tRes, {fontSize: 16}]}>{item.address}</Text>
          </View>
        </TouchableOpacity>
        {isEnd && (
          <View style={styles.endCircle}>
            <Image
              style={{height: 40, width: 40}}
              source={require('../../assets/rightArrowGreen.png')}
            />
          </View>
        )}
      </>
    );
  };
  render() {
    const {userInfo, loading} = this.context;
    if (loading) {
      return (
        <View style={{flex: 1}}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      );
    } else {
      return (
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.header}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Profile')}>
                  <Image
                    style={styles.profileImg}
                    source={require('../../assets/profile.png')}
                  />
                </TouchableOpacity>

                <View>
                  <Text style={styles.personName}>Hi, {userInfo.name}</Text>
                  <View style={styles.hTextView}>
                    <Image
                      style={styles.pinImg}
                      source={require('../../assets/pin.png')}
                    />
                    <Text
                      onPress={() =>
                        this.props.navigation.navigate('SearchLocation')
                      }
                      style={styles.city}>
                      Nagpur, Maharashtra
                    </Text>
                  </View>
                </View>
                <Image
                  style={styles.bellImg}
                  source={require('../../assets/bell.png')}
                />
              </View>
              <View style={styles.itemView}>
                <FlatList
                  data={itemsData}
                  renderItem={this.itemsList}
                  // keyExtractor={item => item.id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </View>
              <View style={styles.bigCardsView}>
                <Carousel
                  hasParallaxImages={true}
                  layout="default"
                  data={carouselData}
                  renderItem={this._renderItem}
                  sliderWidth={width}
                  itemWidth={350}
                  scrollEnabled
                  loop={true}
                  autoplay={true}
                  autoplayDelay={2000}
                  onSnapToItem={index => this.setState({currIndex: index})}
                />
                <Pagination
                  dotsLength={carouselData.length}
                  activeDotIndex={this.state.currIndex}
                  dotStyle={styles.dot}
                  inactiveDotStyle={styles.inactiveDot}
                  inactiveDotOpacity={1}
                  inactiveDotScale={1}
                />
              </View>
              <View style={styles.bestChoise}>
                <Text style={styles.bestText}>Best Choise</Text>
                <FlatList
                  data={bestChoise}
                  renderItem={this.bestChoiseList}
                  keyExtractor={item => item.id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </View>
              <View style={styles.todaysSpecial}>
                <View style={styles.todayTexts}>
                  <Text style={styles.bestText}>Today Special</Text>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('TodaySpecial')
                    }
                    style={styles.innerTexts}>
                    <Text style={styles.viewAll}>View All</Text>
                    <Image
                      source={require('../../assets/greenRightArrow.png')}
                    />
                  </TouchableOpacity>
                </View>

                <FlatList
                  data={todaySpecial}
                  renderItem={this.todaySpecialList}
                  keyExtractor={item => item.id}
                  scrollEnabled={false}
                />
              </View>
              <View style={styles.restaurantNearby}>
                <View style={styles.todayTexts}>
                  <Text style={styles.bestText}>Restaurant Nearby</Text>
                  <View style={styles.innerTexts}>
                    <Text style={styles.viewAll}>Map</Text>
                    <Image
                      source={require('../../assets/greenRightArrow.png')}
                    />
                  </View>
                </View>
                <View style={{marginTop: '5%'}}>
                  <FlatList
                    horizontal
                    data={restaurantData}
                    renderItem={this.restaurantList}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                  />
                </View>
              </View>
            </ScrollView>
          </View>
        </SafeAreaView>
      );
    }
  }
}
const styles = StyleSheet.create({
  endCircle: {
    height: 80,
    width: 80,
    backgroundColor: 'white',
    borderRadius: 40,
    marginLeft: 30,
    marginRight: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    shadowOffset: {width: 1, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: 'orange',
  },
  star: {marginLeft: '25%'},
  resBottomView: {flexDirection: 'row', alignItems: 'center'},
  resKm: {fontSize: 15, color: '#DF201F', fontWeight: '600'},
  resPin: {
    tintColor: '#DF201F',
    marginRight: '4%',
    marginLeft: '4%',
  },
  kmView: {flexDirection: 'row', alignItems: 'center'},
  resMiddleView: {flexDirection: 'row'},
  resName: {
    height: '50%',
    width: '100%',
    padding: 20,
    justifyContent: 'space-between',
  },
  resImg: {
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: '50%',
  },
  resCards: {
    height: 296,
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    marginLeft: 20,
    marginBottom: 10,
    elevation: 10,
    shadowOffset: {width: 5, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowColor: 'orange',
  },
  restaurantNearby: {height: ios ? 500 : 430},
  tRes: {
    marginLeft: '3%',
    color: '#A2A3A5',
    fontWeight: '600',
    fontSize: 18,
  },
  tSecondView: {flexDirection: 'row', alignItems: 'center'},
  tOffPrice: {
    color: '#DF201F',
    fontWeight: '600',
    fontSize: 15,
    textDecorationLine: 'line-through',
  },
  tPrice: {color: '#DF201F', fontWeight: '600', fontSize: 16},
  tName: {fontSize: 18, fontWeight: '600', color: '#161A1D'},
  tView: {
    width: '70%',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    padding: 20,
    justifyContent: 'space-between',
  },
  todaySpecialCards: {
    // borderTopRightRadius: 15,
    // borderBottomRightRadius: 15,
    borderRadius: 15,
    width: '90%',
    backgroundColor: 'white',
    height: 126,
    alignSelf: 'center',
    marginTop: 15,
    flexDirection: 'row',
    elevation: 10,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: 'orange',
    marginBottom: 10,
  },
  viewAll: {
    color: '#161A1D',
    fontWeight: '600',
    fontSize: 18,
    marginRight: '6%',
  },
  innerTexts: {flexDirection: 'row', alignItems: 'center'},
  todayTexts: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  todaysSpecial: {height: 830},
  plus: {height: 30, width: 30},
  bestRes: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: '#161A1D',
  },
  bestPrice: {fontSize: 18, fontWeight: '600', color: '#DF201F'},
  bestName: {fontSize: 22, fontWeight: '600', color: '#161A1D'},
  innerView: {
    alignItems: 'center',
    marginTop: '35%',
    justifyContent: 'space-evenly',
    height: 160,
  },
  img: {position: 'absolute', top: '-15%'},
  circle: {
    height: 64,
    width: 64,
    borderRadius: 64 / 2,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: '-12%',
    elevation: 10,
    shadowOffset: {width: 1, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bestChoiseCards: {
    width: 165,
    height: 255,
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 5,
    marginTop: '28%',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  bestText: {
    color: '#161A1D',
    fontSize: 26,
    fontWeight: '600',
    marginLeft: '5%',
  },
  bestChoise: {height: 400},
  inactiveDot: {
    height: 12,
    width: 12,
    borderWidth: 2,
    borderColor: '#94CD00',
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
  bigCardsView: {marginTop: '5%'},
  itemText: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  },
  itemView: {
    // marginLeft: '4%',
    height: 80,
    width,
    marginTop: '2%',
  },
  itemscard: {
    width: 155,
    height: 65,

    alignSelf: 'center',
    // marginRight: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '8%',
    marginLeft: 20,
    marginRight: 5,
  },
  container: {height, width, backgroundColor: 'white'},
  header: {
    height: 80,
    width,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImg: {marginLeft: '5%'},
  personName: {
    marginBottom: '5%',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#161A1D',
  },
  hTextView: {flexDirection: 'row', alignItems: 'center'},
  pinImg: {marginRight: '3%'},
  city: {fontSize: 15, color: '#A2A3A5'},
  bellImg: {marginLeft: '20%'},
});
export default Home;
