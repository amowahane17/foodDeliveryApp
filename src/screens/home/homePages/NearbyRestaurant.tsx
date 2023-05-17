import React, {Component} from 'react';
import {
  FlatList,
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
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {colors} from '../../../constants/Colors';
import {BestChoiseTypes} from '../../../data/bestChoise';
import {CartContext} from '../../../GlobalState';

interface NearbyRestaurantProps {
  navigation?: any;
  route?: any;
}
interface NearbyRestaurantState {
  currIndex: number;
}
export class NearbyRestaurant extends Component<
  NearbyRestaurantProps,
  NearbyRestaurantState
> {
  constructor(props: NearbyRestaurantProps) {
    super(props);
    this.state = {currIndex: 0};
  }
  static contextType?: React.Context<any> | undefined = CartContext;
  carousel = ({item}: {item: {id: string; img: any}}) => {
    return <Image source={item.img} />;
  };
  category = ({
    item,
  }: {
    item: {id: string; color: string; name: string; img: any};
  }) => {
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
  bestChoise = ({item}: {item: BestChoiseTypes}) => {
    const {addItemInCart} = this.context;
    return (
      <View style={styles.cards}>
        <Image style={styles.img} source={item.img} />
        <View style={styles.cardMiddleView}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={{fontSize: 20, fontWeight: '600', color: 'red'}}>
            ₹{item.price}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => addItemInCart(item)}
          style={styles.circle}>
          <Image
            style={styles.plus}
            source={require('../../../assets/plus.png')}
          />
        </TouchableOpacity>
      </View>
    );
  };
  todaySpecialList = ({
    item,
  }: {
    item: {id: string; img: any; name: string; price: number};
  }) => {
    return (
      <>
        <View style={styles.todaySpecialCards}>
          <Image style={styles.timg} source={item.img} />
          <View style={styles.tView}>
            <Text style={styles.tName}>{item.name}</Text>
            <Text style={styles.tPrice}>₹{item.price}</Text>
          </View>
        </View>
      </>
    );
  };
  teamList = ({
    item,
  }: {
    item: {id: string; img: any; name: string; deg: string};
  }) => {
    return (
      <View style={styles.teamCard}>
        <Image style={styles.perImg} source={item.img} />
        <View style={styles.teamInView}>
          <Text style={styles.teamPName}>{item.name}</Text>
          <Text style={styles.degName}>{item.deg}</Text>
        </View>
      </View>
    );
  };
  gallery = ({item}: {item: {img: any; id: string}}) => {
    return (
      <Image
        style={{marginTop: '2.5%', marginLeft: 20, marginBottom: '2.5%'}}
        source={item.img}
      />
    );
  };
  render() {
    const {resData} = this.props.route.params;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={styles.innerHeaderView}>
            <View>
              <Image source={require('../../../assets/backArrow.png')} />
            </View>
            <Text style={styles.heading}>Nearby Restaurant</Text>
          </TouchableOpacity>
        </View>
        <SafeAreaView>
          <View style={{width}}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.cView}>
                <Carousel
                  hasParallaxImages={true}
                  layout="default"
                  data={resData.carousel_images}
                  renderItem={this.carousel}
                  sliderWidth={width}
                  itemWidth={400}
                  scrollEnabled
                  loop={true}
                  autoplay={true}
                  autoplayDelay={2000}
                  onSnapToItem={index => this.setState({currIndex: index})}
                />
                <Pagination
                  dotsLength={resData.carousel_images.length}
                  activeDotIndex={this.state.currIndex}
                  dotStyle={styles.dot}
                  inactiveDotStyle={styles.inactiveDot}
                  inactiveDotOpacity={1}
                  inactiveDotScale={1}
                  containerStyle={{marginTop: -20, marginBottom: -10}}
                />
              </View>
              <View style={styles.resInfo}>
                <View style={styles.resName}>
                  <Text style={styles.bestName}>{resData.name}</Text>
                  <View style={styles.resMiddleView}>
                    <View style={styles.kmView}>
                      <Image
                        style={styles.resPin}
                        source={require('../../../assets/pin.png')}
                      />
                      <Text style={styles.resKm}>{resData.distance}km</Text>
                    </View>
                    <View style={styles.resBottomView}>
                      <Image
                        style={styles.star}
                        source={require('../../../assets/star.png')}
                      />
                    </View>
                  </View>
                  <Text style={[styles.tResw, {fontSize: 16}]}>
                    {resData.address}
                  </Text>
                </View>
              </View>
              <View style={styles.btns}>
                <TouchableOpacity
                  style={[styles.button, {flexDirection: 'row'}]}>
                  <Text style={[styles.btnText, {marginRight: '3%'}]}>
                    Favorite
                  </Text>
                  <Image source={require('../../../assets/resPlus.png')} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, {backgroundColor: colors.lime}]}>
                  <Text style={[styles.btnText, {marginRight: '3%'}]}>
                    Food Reviews
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.category}>
                <Text style={[styles.bestName, {marginLeft: '5%'}]}>
                  Category
                </Text>
                <FlatList
                  data={resData.catgoryData}
                  renderItem={this.category}
                  keyExtractor={item => item.id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </View>
              <View style={styles.bestChoise}>
                <Text style={[styles.bestName, {marginLeft: '5%'}]}>
                  Best Choise
                </Text>
                <FlatList
                  data={resData.bestChoise}
                  renderItem={this.bestChoise}
                  keyExtractor={item => item.id}
                  horizontal
                />
              </View>
              <View style={styles.todaySpecial}>
                <View style={styles.todayTexts}>
                  <Text style={styles.bestText}>Today Special</Text>
                  <TouchableOpacity style={styles.innerTexts}>
                    <Text style={styles.viewAll}>View All</Text>
                    <Image
                      source={require('../../../assets/greenRightArrow.png')}
                    />
                  </TouchableOpacity>
                </View>

                <FlatList
                  data={resData.todaySpecial}
                  renderItem={this.todaySpecialList}
                  keyExtractor={item => item.id}
                  scrollEnabled={false}
                />
              </View>
              <View style={styles.team}>
                <Text style={[styles.bestName, {marginLeft: '5%'}]}>Team</Text>
                <FlatList
                  horizontal
                  data={resData.team_data}
                  renderItem={this.teamList}
                />
              </View>
              <View style={styles.gallery}>
                <Text style={[styles.bestName, {marginLeft: '5%'}]}>
                  Gallery
                </Text>
                <View
                  style={{width: '100%', alignSelf: 'center', height: 1000}}>
                  <FlatList
                    data={resData.gallery}
                    renderItem={this.gallery}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    scrollEnabled={false}
                  />
                </View>
              </View>
            </ScrollView>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  timg: {
    height: 106,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    width: '40%',
  },
  gallery: {
    marginTop: '5%',
    marginBottom: '20%',
    width,
    height: 1500,
  },
  degName: {
    color: 'red',
    fontSize: 15,
    fontWeight: '600',
    marginTop: '3%',
  },
  teamPName: {color: colors.black, fontSize: 18, fontWeight: '600'},
  teamInView: {marginTop: '40%', alignItems: 'center'},
  perImg: {position: 'absolute', marginTop: -50},
  teamCard: {
    height: 137,
    width: 165,
    backgroundColor: '#FFF3E5',
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 5,
    marginTop: '25%',
    alignItems: 'center',
  },
  team: {width, marginTop: '6%', height: 220},
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
    width: '60%',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    padding: 20,
    // paddingLeft: 20,
    justifyContent: 'space-between',
  },
  todaySpecialCards: {
    // borderTopRightRadius: 15,
    // borderBottomRightRadius: 15,
    borderRadius: 15,
    width: '90%',
    backgroundColor: 'white',
    height: 106,
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
  bestText: {
    color: '#161A1D',
    fontSize: 22,
    fontWeight: '600',
    marginLeft: '5%',
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
  todaySpecial: {marginTop: '5%', maxHeight: 800, width},
  plus: {height: 20, width: 20},
  circle: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: '-12%',
    elevation: 10,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 22,
    fontWeight: '600',
    color: colors.black,
  },
  cardMiddleView: {
    width: '100%',
    height: '40%',
    marginTop: '40%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  img: {position: 'absolute', top: -30},
  cards: {
    height: 175,
    width: 180,
    borderRadius: 20,
    marginLeft: 15,
    marginRight: 5,
    marginTop: 40,
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: '#FFF3E5',
  },
  bestChoise: {width, height: 275, marginTop: '5%'},
  itemscard: {
    width: 155,
    height: 65,
    marginTop: '5%',
    alignSelf: 'center',
    // marginRight: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '8%',
    marginLeft: 20,
    marginRight: 5,
  },
  itemText: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  },
  category: {width, marginTop: '5%'},
  btnText: {fontSize: 20, color: 'white', fontWeight: '600'},
  button: {
    height: 60,
    width: 170,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  btns: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '5%',
  },
  tResw: {
    // marginLeft: '3%',
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
    height: '100%',
    width: '90%',
    alignSelf: 'center',
    // padding: 20,
    justifyContent: 'space-between',
    // backgroundColor: 'blue',
  },
  resInfo: {width, height: 90},
  cView: {width, marginTop: '5%'},
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
  container: {height: '200%', width, backgroundColor: 'white'},
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
export default NearbyRestaurant;
