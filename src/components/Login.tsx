import {Image, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import {height, width} from '../constants/ScreenDimentions';
import PhoneInput from 'react-native-phone-number-input';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {ScrollView} from 'react-native-gesture-handler';
interface LoginProps {}
interface LoginState {
  value: string;
  formattedValue: string;
}
export class Login extends Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
    this.state = {value: '', formattedValue: ''};
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.topView}>
            <Image source={require('../assets/loginImgOne.png')} />
            <Image style={styles.bowl} source={require('../assets/bowl.png')} />
            <View style={styles.texts}>
              <Text style={styles.loginText}>Login</Text>
              <Text style={styles.welcome}>Welcome Back!</Text>
            </View>
          </View>
          <View style={styles.loginView}>
            <PhoneInput
              containerStyle={styles.containerStyle}
              value={this.state.value}
              defaultCode="IN"
              onChangeText={event => this.setState({value: event})}
              // autoFocus
              placeholder="Mobile no"
              codeTextStyle={{fontSize: 24}}
              textInputStyle={{fontSize: 20}}
            />
            <Text style={styles.pass}>Passcode</Text>
            <OTPInputView
              style={styles.passcode}
              pinCount={6}
              // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
              // onCodeChanged = {code => { this.setState({code})}}
              // autoFocusOnLoad
              codeInputFieldStyle={styles.codeIn}
              // codeInputHighlightStyle={{borderColor: 'black'}}
              onCodeFilled={code => {
                console.log(`Code is ${code}, you are good to go!`);
              }}
              secureTextEntry
              placeholderCharacter="*"
            />
            <Text style={styles.forgot}>Forgot Passcode</Text>
            <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'row'}}>
                <View style={{height: 30, width: 30}}></View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
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
    marginTop: '8%',
    width: '90%',
  },
  loginView: {height: '49%', width},
  welcome: {fontSize: 26, color: '#FFFFFF'},
  texts: {position: 'absolute', bottom: '12%', left: '2%'},
  loginText: {fontSize: 50, color: '#FFFFFF'},
  bowl: {position: 'absolute', right: 0, top: 50},
  container: {height, width},
  topView: {height: '51%', width},
});
export default Login;
