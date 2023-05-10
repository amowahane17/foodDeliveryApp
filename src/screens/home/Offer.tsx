import React, {Component} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {height, width} from '../../constants/ScreenDimentions';
import {ios} from '../../constants/Platform';
import {FlatList} from 'react-native-gesture-handler';
import {OfferDataTypes, offersData} from '../../data/offersData';
import {NearbyOffersTypes, nearbyOffers} from '../../data/nearbyOffers';

export class Offer extends Component {
  offers = ({item}: {item: OfferDataTypes}) => {
    return (
      <View style={styles.offerCard}>
        <View style={styles.innerOfferView}>
          <Text style={styles.offText}>{item.off}</Text>
          <Text style={styles.offerText}>{item.text}</Text>
        </View>
        <Image source={item.img} />
      </View>
    );
  };
  nearbyOffers = ({item}: {item: NearbyOffersTypes}) => {
    return (
      <View style={styles.todaySpecialCards}>
        <Image source={item.img} />
        <View style={styles.tView}>
          <Text style={styles.tName}>{item.name}</Text>
          <Text style={styles.tPrice}>
            ₹{item.price} ₹{item.offPrice}
          </Text>
          <View style={styles.tSecondView}>
            <Image source={require('../../assets/dish.png')} />
            <Text style={styles.tRes}>{item.restaurant}</Text>
          </View>
        </View>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.heading}>Best Offers</Text>
        </View>
        <SafeAreaView>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{}}>
              <FlatList
                scrollEnabled={false}
                data={offersData}
                renderItem={this.offers}
                keyExtractor={item => item.id}
              />
            </View>
            <View style={styles.nearbyOffers}>
              <Text style={styles.text}>Nearby Restaurant Offers</Text>
              <FlatList
                scrollEnabled={false}
                data={nearbyOffers}
                renderItem={this.nearbyOffers}
                keyExtractor={item => item.id}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  nearbyOffers: {
    marginTop: '6%',
    height: 830,
    marginBottom: ios ? 40 : 0,
  },
  offerText: {
    width: '70%',
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    marginTop: '4%',
  },
  offText: {color: 'white', fontSize: 16, fontWeight: '500'},
  innerOfferView: {position: 'absolute', zIndex: 1, padding: 25},
  offerCard: {height: 135, width: '90%', alignSelf: 'center', marginTop: 20},
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
    marginTop: 20,
    flexDirection: 'row',
    elevation: 10,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: 'orange',
    marginBottom: 10,
  },
  text: {color: '#161A1D', fontSize: 26, fontWeight: '600', marginLeft: '5%'},
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
  container: {height, width, backgroundColor: 'white'},
});
export default Offer;
