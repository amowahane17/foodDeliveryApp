import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {height, width} from '../../constants/ScreenDimentions';
import {ios} from '../../constants/Platform';
import {colors} from '../../constants/Colors';
import {LoginContext} from '../../GlobalState';
import AsyncStorage from '@react-native-async-storage/async-storage';
interface ProfileProps {
  navigation?: any;
}
interface ProfileState {}
export class Profile extends Component<ProfileProps, ProfileState> {
  static contextType = LoginContext;
  logoutHandler = async () => {
    await AsyncStorage.removeItem('USER_DATA');
    this.props.navigation.navigate('Onbording');
  };
  render() {
    const {userInfo, loading} = this.context;
    if (loading) {
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.innerHeaderView}
              onPress={() => this.props.navigation.goBack()}>
              <View>
                <Image source={require('../../assets/backArrow.png')} />
              </View>
              <Text style={styles.heading}>Profile</Text>
            </TouchableOpacity>
          </View>
          <SafeAreaView>
            <View style={styles.profileCard}>
              <Image
                style={{width: '40%'}}
                source={require('../../assets/profileImg.png')}
              />
              <View style={styles.innerProfileCard}>
                <Text style={styles.name}>Hi, {userInfo.name}</Text>
                <View style={styles.addressView}>
                  <Image source={require('../../assets/pin.png')} />
                  <Text style={styles.address}>Nagpur, Maharashtra</Text>
                </View>
              </View>
            </View>
            <View style={styles.middleCard}>
              <View style={styles.middleCardItems}>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => this.props.navigation.navigate('Order')}>
                  <Image source={require('../../assets/order.png')} />
                  <Text style={styles.pageText}>Order</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.middleCardItems}>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => this.props.navigation.navigate('EditProfile')}>
                  <Image source={require('../../assets/editProfile.png')} />
                  <Text style={styles.pageText}>Edit Profile</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.middleCardItems, {borderRightWidth: 0}]}>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => this.props.navigation.navigate('Favorite')}>
                  <Image source={require('../../assets/fav.png')} />
                  <Text style={styles.pageText}>Favorite</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.optionsView}>
              <View style={styles.option}>
                <View style={styles.img}>
                  <Image
                    style={{tintColor: '#EF8382'}}
                    source={require('../../assets/tabhome.png')}
                  />
                </View>
                <Text style={styles.text}>Home</Text>
              </View>
              <View style={styles.line} />
              <View style={styles.option}>
                <View style={styles.img}>
                  <Image
                    style={{tintColor: '#EF8382'}}
                    source={require('../../assets/taboffer.png')}
                  />
                </View>
                <Text style={styles.text}>Offers</Text>
              </View>
              <View style={styles.line} />
              <View style={styles.option}>
                <View style={styles.img}>
                  <Image
                    style={{tintColor: '#EF8382'}}
                    source={require('../../assets/privi.png')}
                  />
                </View>
                <Text style={styles.text}>Privicy Policy</Text>
              </View>
              <View style={styles.line} />
              <View style={styles.option}>
                <View style={styles.img}>
                  <Image
                    style={{tintColor: '#EF8382'}}
                    source={require('../../assets/terms.png')}
                  />
                </View>
                <Text style={styles.text}>Terms And Conditions</Text>
              </View>
              <View style={styles.line} />
              <TouchableOpacity
                onPress={() => this.logoutHandler()}
                style={styles.option}>
                <View style={styles.img}>
                  <Image
                    style={{tintColor: '#EF8382'}}
                    source={require('../../assets/logout.png')}
                  />
                </View>
                <Text style={styles.text}>Logout</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  pageText: {
    color: colors.black,
    fontWeight: '600',
    fontSize: 16,
  },
  btn: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  line: {
    width: '90%',
    alignSelf: 'center',
    height: 1,
    backgroundColor: '#C4C4C4',
    opacity: 0.25,
    marginTop: '1%',
    marginBottom: '1%',
  },
  text: {
    fontSize: 21,
    marginLeft: '5%',
    color: '#303235',
    fontWeight: '600',
  },
  img: {
    backgroundColor: '#FFE5E5',
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  option: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '1%',
    marginTop: '1%',
  },
  optionsView: {marginTop: '6%', width},
  middleCardItems: {
    height: '60%',
    width: '32%',
    borderRightWidth: 1,
    borderColor: colors.borderColor,
    // backgroundColor: 'pink',
  },
  middleCard: {
    width: '90%',
    alignSelf: 'center',
    height: 115,
    backgroundColor: 'white',
    elevation: 10,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: 'orange',
    borderRadius: 10,
    marginTop: '5%',
    flexDirection: 'row',
    // padding: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  address: {
    marginLeft: '2%',
    color: '#A2A3A5',
    fontSize: 16,
    fontWeight: 'bold',
  },
  addressView: {flexDirection: 'row', alignItems: 'center'},
  name: {fontSize: 25, fontWeight: '600', color: '#161A1D'},
  innerProfileCard: {
    width: '60%',
    paddingLeft: 10,
    paddingTop: 30,
    paddingBottom: 30,
    justifyContent: 'space-evenly',
  },
  profileCard: {
    alignSelf: 'center',
    width: '90%',
    marginTop: '5%',
    flexDirection: 'row',
    height: 140,
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
export default Profile;
