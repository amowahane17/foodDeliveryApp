import React, {Component} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {height, width} from '../../../constants/ScreenDimentions';
import {ios} from '../../../constants/Platform';
import {colors} from '../../../constants/Colors';
import {TextInput} from 'react-native-gesture-handler';

export class CreditCard extends Component {
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
            <Text style={styles.heading}>Credit Card</Text>
          </TouchableOpacity>
        </View>
        <SafeAreaView>
          <View style={{height: '70%', width}}>
            <View style={styles.cardNumberView}>
              <Text style={styles.text}>Card Number</Text>
              <TextInput
                placeholder="XXXX XXXX XXXX"
                style={styles.cardNumTextBox}
              />
            </View>
            <View style={styles.middleView}>
              <View style={{width: '50%'}}>
                <Text style={styles.text}>Expire</Text>
                <View style={styles.expireView}>
                  <TextInput
                    placeholder="DD/"
                    maxLength={2}
                    keyboardType="numeric"
                  />
                  <TextInput placeholder="MM/" maxLength={2} />
                  <TextInput placeholder="YY" maxLength={4} />
                </View>
              </View>
              <View style={{width: '50%'}}>
                <Text style={styles.text}>CVC Code</Text>
                <TextInput
                  style={styles.cvcBox}
                  placeholder="000"
                  maxLength={3}
                />
              </View>
            </View>
            <View style={styles.cardHolderName}>
              <Text style={styles.text}>Card Placeholder Name</Text>
              <TextInput
                style={styles.cardNumTextBox}
                placeholder="Rajesh Singh"
              />
            </View>
          </View>
          <View style={styles.btnView}>
            <TouchableOpacity style={styles.checkout}>
              <Text style={styles.checkoutText}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  btnView: {
    width,
    height: '40%',
  },
  checkoutText: {fontWeight: '700', color: 'white', fontSize: 22},
  checkout: {
    height: 50,
    width: '90%',
    backgroundColor: '#94CD00',
    alignSelf: 'center',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: 'green',
  },
  cardHolderName: {marginTop: '5%'},
  middleView: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: '3%',
  },
  expireView: {
    height: 70,
    width: '90%',
    borderWidth: 2,
    borderColor: '#E8E8E8',
    alignSelf: 'center',
    borderRadius: 15,
    marginTop: '5%',
    paddingLeft: '10%',
    paddingRight: '30%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cvcBox: {
    height: 70,
    width: '90%',
    borderWidth: 2,
    borderColor: '#E8E8E8',
    alignSelf: 'center',
    borderRadius: 15,
    marginTop: '5%',
    paddingLeft: '5%',
    color: colors.black,
    fontSize: 20,
  },
  cardNumTextBox: {
    height: 70,
    width: '90%',
    borderWidth: 2,
    borderColor: '#E8E8E8',
    alignSelf: 'center',
    borderRadius: 15,
    marginTop: '4%',
    paddingLeft: '5%',
    color: colors.black,
    fontSize: 20,
  },
  text: {
    fontWeight: '600',
    color: colors.black,
    fontSize: 16,
    marginLeft: '5%',
  },
  cardNumberView: {width, marginTop: '5%'},
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
export default CreditCard;
