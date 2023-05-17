import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {height, width} from '../../../constants/ScreenDimentions';
import {ios} from '../../../constants/Platform';
import {CartContext} from '../../../GlobalState';
import {BestChoiseTypes} from '../../../data/bestChoise';
interface OfferItemsProps {
  route?: any;
  navigation?: any;
}
interface OfferItemsState {}
export class OfferItems extends Component<OfferItemsProps, OfferItemsState> {
  static contextType = CartContext;
  itemList = ({item}: {item: BestChoiseTypes}) => {
    const {addItemInCart} = this.context;
    return (
      <View style={[styles.bestChoiseCards, {backgroundColor: item.color}]}>
        <Image style={styles.img} source={item.img} />
        <View style={styles.innerView}>
          <Text style={styles.bestName}>{item.name}</Text>
          <Text style={styles.bestPrice}>₹{item.price}</Text>
          <Image source={require('../../../assets/dish.png')} />
          <Text style={styles.bestRes}>{item.restaurent}</Text>
        </View>
        <TouchableOpacity
          onPress={() => addItemInCart(item)}
          style={[styles.circle, {shadowColor: item.sColor}]}>
          <Image
            style={styles.plus}
            source={require('../../../assets/plus.png')}
          />
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    const {offerItems} = this.props.route.params;

    return (
      <SafeAreaView>
        <View style={styles.container}>
          <ScrollView
            contentContainerStyle={{paddingBottom: '10%'}}
            showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
              <View style={styles.headerInnerView}>
                <TouchableOpacity
                  style={styles.backBtn}
                  onPress={() => this.props.navigation.goBack()}>
                  <Image source={require('../../../assets/backArrow.png')} />
                </TouchableOpacity>
                <Text style={styles.text}>{offerItems.text}</Text>
                <Image style={{marginTop: '5%'}} source={offerItems.off_img} />
              </View>
              <Image source={offerItems.background_image} />
            </View>
            <View style={styles.mainContainer}>
              <FlatList
                scrollEnabled={false}
                data={offerItems.item_data}
                renderItem={this.itemList}
                keyExtractor={item => item.id}
                numColumns={2}
              />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
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
    marginLeft: '6.5%',
    // marginRight: 5,
    marginTop: '12%',
    alignItems: 'center',
    marginBottom: '10%',
    // justifyContent: 'space-between',
  },
  mainContainer: {width, maxHeight: 3000, marginBottom: ios ? 60 : 0},
  text: {
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
    marginTop: '6%',
    lineHeight: 35,
  },
  headerInnerView: {
    position: 'absolute',
    zIndex: 1,
    width: '50%',
    marginLeft: '4%',
    marginTop: '4%',
  },
  backBtn: {
    height: 50,
    width: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  header: {width, height: 207},
  container: {height, width, backgroundColor: 'white'},
});
export default OfferItems;
