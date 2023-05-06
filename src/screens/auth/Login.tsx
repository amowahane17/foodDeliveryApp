import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
import {height, width} from '../../constants/ScreenDimentions';
import PhoneInput from 'react-native-phone-number-input';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {ios} from '../../constants/Platform';
interface LoginProps {
  navigation?: any;
}
interface LoginState {
  value: string;
  userToggle: boolean;
  code: string;
}
export class Login extends Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
    this.state = {value: '', userToggle: true, code: ''};
  }
  loginHandler = () => {
    const {value, code} = this.state;
    const phoneReg = /^[6-9]\d{9}$/;
    const passReg = /^\d{6}$/;
    const isValidPhone = phoneReg.test(value);
    const isValidPass = passReg.test(code);
    if (isValidPass && isValidPhone) {
      this.props.navigation.navigate('Location');
    } else {
      Alert.alert('Please Enter Valid Information');
    }
  };
  render() {
    return (
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <View style={styles.topView}>
              <Image source={require('../../assets/loginImgOne.png')} />
              <Image
                style={styles.bowl}
                source={require('../../assets/bowl.png')}
              />
              <View style={styles.texts}>
                <Text style={styles.loginText}>Login</Text>
                <Text style={styles.welcome}>Welcome Back!</Text>
              </View>
            </View>
            <View style={styles.loginView}>
              <PhoneInput
                //@ts-ignore
                testID="phoneInputLogin"
                containerStyle={styles.containerStyle}
                value={this.state.value}
                defaultCode="IN"
                onChangeText={event => this.setState({value: event})}
                placeholder="Mobile no"
                codeTextStyle={{fontSize: 24}}
                textInputStyle={{fontSize: 20}}
              />
              <Text style={styles.pass}>Passcode</Text>
              <OTPInputView
                style={styles.passcode}
                pinCount={6}
                //@ts-ignore
                testID="passcode"
                onCodeChanged={code => {
                  this.setState({code});
                }}
                codeInputFieldStyle={styles.codeIn}
                secureTextEntry
                placeholderCharacter="*"
              />
              <Text style={styles.forgot}>Forgot Passcode</Text>
              <View style={styles.xView}>
                <View style={styles.cusSellView}>
                  <TouchableOpacity
                    testID="customerBtn"
                    onPress={() => this.setState({userToggle: true})}
                    style={
                      this.state.userToggle ? styles.circle : styles.circleGrey
                    }>
                    <View
                      style={
                        this.state.userToggle
                          ? styles.innerCircle
                          : styles.innerCircleGrey
                      }
                    />
                  </TouchableOpacity>
                  <Text style={{marginLeft: '7%'}}>Customer</Text>
                </View>
                <View style={styles.cusSellView}>
                  <TouchableOpacity
                    testID="sellerBtn"
                    style={
                      this.state.userToggle === false
                        ? styles.circle
                        : styles.circleGrey
                    }
                    onPress={() => this.setState({userToggle: false})}>
                    <View
                      style={
                        this.state.userToggle === false
                          ? styles.innerCircle
                          : styles.innerCircleGrey
                      }
                    />
                  </TouchableOpacity>
                  <Text style={{marginLeft: '7%'}}>Seller</Text>
                </View>
              </View>
              <TouchableOpacity
                testID="loginBtn"
                style={styles.btn}
                onPress={() => this.loginHandler()}>
                <Text style={styles.logText}>LOGIN</Text>
              </TouchableOpacity>
              <Text
                testID="registerText"
                style={styles.register}
                onPress={() => this.props.navigation.navigate('Register')}>
                Register now?
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  register: {
    fontSize: 18,
    alignSelf: 'center',
    marginTop: '2%',
    color: '#161A1D',
  },
  logText: {fontSize: 20, color: 'white', fontWeight: '600'},
  btn: {
    width: '90%',
    height: 50,
    backgroundColor: '#DF201F',
    alignSelf: 'center',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '4%',
  },
  xView: {
    flexDirection: 'row',
    marginLeft: '2%',
  },
  cusSellView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    height: 8,
    width: 8,
    backgroundColor: 'red',
    borderRadius: 4,
  },
  innerCircleGrey: {
    height: 8,
    width: 8,
    backgroundColor: 'grey',
    borderRadius: 4,
  },
  circle: {
    height: 15,
    width: 15,
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleGrey: {
    height: 15,
    width: 15,
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgot: {
    color: '#DF201F',
    fontSize: 20,
    fontWeight: '500',
    alignSelf: 'flex-end',
    marginRight: '5%',
  },
  codeIn: {
    borderColor: 'grey',
    borderRadius: 10,
    height: 60,
    color: 'black',
    fontSize: 24,
  },
  passcode: {
    width: '90%',
    height: 80,
    alignSelf: 'center',
  },
  pass: {
    fontSize: 24,
    color: 'black',
    fontWeight: '500',
    marginLeft: '5%',
    marginTop: '3%',
  },
  containerStyle: {
    alignSelf: 'center',
    height: 80,
    marginTop: ios ? '1%' : '6%',
    width: '90%',
  },
  loginView: {height: '49%', width},
  welcome: {fontSize: 26, color: '#FFFFFF'},
  texts: {position: 'absolute', bottom: ios ? '18%' : '12%', left: '2%'},
  loginText: {fontSize: 50, color: '#FFFFFF'},
  bowl: {position: 'absolute', right: 0, top: 50},
  container: {height, width, backgroundColor: 'white'},
  topView: {height: '51%', width, backgroundColor: 'white'},
});
export default Login;
