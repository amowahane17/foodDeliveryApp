import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {height, width} from '../../../constants/ScreenDimentions';
import {ios} from '../../../constants/Platform';
import {FlatList, ScrollView, TextInput} from 'react-native-gesture-handler';
import {colors} from '../../../constants/Colors';
import {SavedAddressTypes, savedAddress} from '../../../data/savedAddress';
interface SearchLocationProps {
  route?: any;
  navigation?: any;
}
interface SearchLocationState {}
export class SearchLocation extends Component<
  SearchLocationProps,
  SearchLocationState
> {
  addressList = ({item}: {item: SavedAddressTypes}) => {
    return (
      <View style={styles.cards}>
        <Image
          style={{marginTop: '0.5%'}}
          source={require('../../../assets/blackPin.png')}
        />
        <View style={{marginLeft: '3%'}}>
          <Text style={styles.resName}>{item.res_name}</Text>
          <Text style={styles.resAddress}>{item.address}</Text>
        </View>
      </View>
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
            <Text style={styles.heading}>Search Location</Text>
          </TouchableOpacity>
        </View>
        <SafeAreaView>
          <View style={{width, height}}>
            <ScrollView>
              <View style={styles.inputView}>
                <TextInput
                  placeholder="Search..."
                  placeholderTextColor={colors.black}
                  style={styles.input}
                />
                <Image
                  style={styles.img}
                  source={require('../../../assets/search.png')}
                />
              </View>
              <View style={styles.addressView}>
                <Text style={styles.headtext}>Saved Addresses</Text>

                <FlatList
                  scrollEnabled={false}
                  data={savedAddress}
                  renderItem={this.addressList}
                  keyExtractor={item => item.id}
                />
              </View>
            </ScrollView>
          </View>
        </SafeAreaView>
        <TouchableOpacity style={styles.btn}>
          <Image source={require('../../../assets/loc.png')} />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  btn: {
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
  resAddress: {
    color: colors.gray,
    fontSize: 16,
    fontWeight: '600',
    marginTop: '2%',
  },
  resName: {
    color: colors.black,
    fontSize: 20,
    fontWeight: '600',
  },
  cards: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: '5%',
  },
  addressView: {width, maxHeight: 5000, marginTop: '5%'},
  headtext: {
    fontWeight: '600',
    fontSize: 18,
    marginLeft: '5%',
    color: 'red',
    marginBottom: '5%',
  },
  img: {position: 'absolute', zIndex: 1, right: '5%'},
  input: {
    width: '100%',
    height: 70,
    backgroundColor: '#F0EFFB',
    borderRadius: 15,
    fontWeight: '500',
    fontSize: 18,
    color: colors.black,
    paddingLeft: '6%',
    paddingRight: '12%',
  },
  inputView: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '5%',
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
export default SearchLocation;
