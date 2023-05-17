import React, {Component} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Modal,
} from 'react-native';
import {height, width} from '../../constants/ScreenDimentions';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {colors} from '../../constants/Colors';
interface OtpProps {
  route?: any;
  navigation?: any;
}
interface OtpState {
  code: string;
  otpModal: boolean;
}
export class Otp extends Component<OtpProps, OtpState> {
  constructor(props: OtpProps) {
    super(props);
    this.state = {code: '', otpModal: true};
  }
  componentDidMount(): void {
    const {randomNum} = this.props.route.params;
    console.log(randomNum);
  }
  signInWithEmailPassword = async (email: string, password: string) => {
    await auth().createUserWithEmailAndPassword(email, password);
  };
  confirmCode = async () => {
    const {phone, email, confirmPasscode, _state, name, randomNum} =
      this.props.route.params;

    if (Number(this.state.code) === randomNum) {
      await this.signInWithEmailPassword(email, confirmPasscode);
      try {
        await firestore()
          .collection('Users')
          .doc(phone)
          .set({
            name: name,
            email: email,
            phone: phone,
            passcode: confirmPasscode,
            state: _state,
          })
          .then(() => {
            console.log('User added!');
            this.props.navigation.navigate('Tabs');
          });
      } catch (error) {
        console.log('error adding data', error);
      }
    } else {
      Alert.alert('Otp is incorrect');
    }
  };
  render() {
    return (
      <ImageBackground
        source={require('../../assets/onbordBkgImgOne.png')}
        style={styles.container}>
        <View style={styles.innerContainer}>
          <Modal transparent visible={this.state.otpModal}>
            <View style={styles.otpModal}>
              <Text style={styles.otpModalText}>
                Your Otp Is: {this.props.route.params.randomNum}
              </Text>
              <TouchableOpacity
                style={styles.otpModalBtn}
                onPress={() => this.setState({otpModal: false})}>
                <Text style={styles.otpModalBtnText}>Ok</Text>
              </TouchableOpacity>
            </View>
          </Modal>

          <Text style={styles.otpText}>OTP Verification</Text>
          <Image
            style={styles.bigEmailImg}
            source={require('../../assets/bigEmail.png')}
          />
          <Text style={styles.sent}>Enter OTP sent to</Text>
          <Text style={styles.mobile}>+91 9172695965</Text>
          <OTPInputView
            // testID="otp"
            style={styles.passcode}
            pinCount={4}
            onCodeChanged={code => {
              this.setState({code});
            }}
            codeInputFieldStyle={styles.codeIn}
          />
          <View style={styles.resendView}>
            <Text style={styles.resendOtp}>Resend OTP</Text>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.setState({otpModal: true})}>
              <Image source={require('../../assets/reload.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.btnView}>
          <TouchableOpacity
            style={styles.nbtn}
            onPress={() => this.confirmCode()}>
            <Text style={styles.logText}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  resendOtp: {fontSize: 20, color: 'white'},
  bigEmailImg: {marginTop: '10%'},
  otpModalBtnText: {fontWeight: '600', fontSize: 20, color: 'white'},
  otpModalBtn: {
    height: 40,
    width: 60,
    borderRadius: 15,
    backgroundColor: colors.lime,
    alignItems: 'center',
    justifyContent: 'center',
  },
  otpModalText: {
    color: colors.black,
    fontSize: 20,
    fontWeight: '600',
  },
  otpModal: {
    height: '8%',
    width: '90%',
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: '6%',
    borderRadius: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
  },
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
