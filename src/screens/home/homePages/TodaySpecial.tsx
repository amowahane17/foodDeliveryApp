import React, {Component} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ios} from '../../../constants/Platform';
import {height, width} from '../../../constants/ScreenDimentions';
import {TodaySpecialTypes, todaySpecial} from '../../../data/todaySpecial';

export class TodaySpecial extends Component {
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
              <Image source={require('../../../assets/dish.png')} />
              <Text style={styles.tRes}>{item.restaurant}</Text>
            </View>
          </View>
        </View>
      </>
    );
  };
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
            <Text style={styles.heading}>Today Special</Text>
          </TouchableOpacity>
        </View>
        <SafeAreaView>
          <View style={styles.listContainer}>
            <FlatList
              data={todaySpecial}
              renderItem={this.todaySpecialList}
              keyExtractor={item => item.id}
            />
          </View>
        </SafeAreaView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
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
    borderRadius: 15,
    width: '90%',
    backgroundColor: 'white',
    height: 126,
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
    elevation: 10,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: 'orange',
    marginBottom: 10,
  },
  listContainer: {width, height: '94.3%'},
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
export default TodaySpecial;
