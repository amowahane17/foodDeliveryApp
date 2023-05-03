import React, {Component} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {height, width} from '../constants/ScreenDimentions';
import OTPInputView from '@twotalltotems/react-native-otp-input';
export class Otp extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../assets/onbordBkgImgOne.png')}
        style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.otpText}>OTP Verification</Text>
          <Image
            style={{marginTop: '10%'}}
            source={require('../assets/bigEmail.png')}
          />
          <Text style={styles.sent}>Enter OTP sent to</Text>
          <Text style={styles.mobile}>+91 9172695965</Text>
          <OTPInputView
            style={styles.passcode}
            pinCount={4}
            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            onCodeChanged={code => {
              this.setState({code});
            }}
            // autoFocusOnLoad
            codeInputFieldStyle={styles.codeIn}
            // codeInputHighlightStyle={{borderColor: 'black'}}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />
          <View style={styles.resendView}>
            <Text style={{fontSize: 20, color: 'white'}}>Resend OTP</Text>
            <TouchableOpacity style={styles.btn}>
              <Image source={require('../assets/reload.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.btnView}>
          <TouchableOpacity style={styles.nbtn}>
            <Text style={styles.logText}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  logText: {fontSize: 20, color: 'white', fontWeight: '600'},
  nbtn: {
    width: '90%',
    height: 50,
    backgroundColor: '#94CD00',
    alignSelf: 'center',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '4%',
  },
  btnView: {height: '20%', width},
  btn: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#bd0201',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resendView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center',
    width: '50%',
  },
  codeIn: {
    height: 55,
    backgroundColor: 'white',
    fontSize: 24,
    color: 'black',
    borderRadius: 10,
  },
  passcode: {
    width: '60%',
    height: 100,
    alignSelf: 'center',
  },
  mobile: {fontSize: 24, marginTop: '2%', color: 'white', fontWeight: 'bold'},
  sent: {fontSize: 20, marginTop: '8%', color: 'white'},
  otpText: {fontSize: 30, color: 'white', marginTop: '14%'},
  innerContainer: {
    alignItems: 'center',
    width,
    height: '88%',
  },
  container: {height, width, backgroundColor: '#df2020'},
});
export default Otp;
