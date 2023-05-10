import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {height, width} from '../../../constants/ScreenDimentions';
import {ios} from '../../../constants/Platform';

export class Favorite extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.innerHeaderView}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image source={require('../../../assets/backArrow.png')} />
            </TouchableOpacity>
            <Text style={styles.heading}>Favorite</Text>
          </View>
        </View>
        <SafeAreaView style={{width}}>
          <View style={{marginTop: '6%'}}>
            <View style={styles.searchCards}>
              <Image
                style={styles.img}
                source={require('../../../assets/todayPizza.png')}
              />
              <View style={styles.nameView}>
                <Text style={styles.name}>Pizza</Text>
                <Text style={styles.price}>₹90</Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  price: {color: 'red', fontSize: 15, fontWeight: '600', marginTop: '3%'},
  name: {color: '#161A1D', fontSize: 18, fontWeight: '600'},
  nameView: {
    width: '70%',
    height: 100,
    paddingTop: 20,
    marginLeft: '5%',
  },
  img: {
    height: 100,
    width: 145,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  searchCards: {
    width: '90%',
    alignSelf: 'center',
    height: 100,
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 10,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: 'orange',
    flexDirection: 'row',
    marginBottom: 15,
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
  container: {height, width, backgroundColor: 'white'},
});
export default Favorite;
