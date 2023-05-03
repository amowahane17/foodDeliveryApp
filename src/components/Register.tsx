import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {height, width} from '../constants/ScreenDimentions';
import PhoneInput from 'react-native-phone-number-input';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import SelectDropdown from 'react-native-select-dropdown';
interface RegisterProps {
  navigation?: any;
}
interface RegisterState {
  tickToggle: boolean;
  phone: string;
  email: string;
  passcode: string;
  confirmPasscode: string;
  _state: string;
  name: string;
}
const states = ['Maharashtra', 'Telangana', 'Gujrat', 'Rajasthan'];
export class Register extends Component<RegisterProps, RegisterState> {
  constructor(props: RegisterProps) {
    super(props);
    this.state = {
      tickToggle: false,
      phone: '',
      email: '',
      passcode: '',
      confirmPasscode: '',
      _state: '',
      name: '',
    };
  }
  submitHandler = () => {
    const {phone, email, tickToggle, passcode, confirmPasscode, _state, name} =
      this.state;
    const phoneReg = /^[6-9]\d{9}$/;
    const passReg = /^\d{6}$/;
    const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    const isEmailValid = emailReg.test(email);
    const isPhoneValid = phoneReg.test(phone);
    const isPassValid = passReg.test(passcode);
    const isConfirmPassValid = passReg.test(confirmPasscode);
    const isMatching = passcode === confirmPasscode;
    const isNameValid = name.length > 2 && name !== '';
    const isStateValid = _state !== '';

    if (tickToggle) {
      if (
        isEmailValid &&
        isPassValid &&
        isPhoneValid &&
        isConfirmPassValid &&
        isMatching &&
        isNameValid &&
        isStateValid
      ) {
        this.props.navigation.navigate('Otp');
      } else {
        Alert.alert('Please enter valid details');
      }
    } else {
      Alert.alert('Please accept terms and conditons');
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topView}>
          <Image source={require('../assets/registerImg.png')} />
          <Image style={styles.topimg} source={require('../assets/blur.png')} />
          <View style={styles.innerTopView}>
            <TouchableOpacity
              style={{marginLeft: '10%'}}
              onPress={() => this.props.navigation.goBack()}>
              <Image source={require('../assets/leftArrow.png')} />
            </TouchableOpacity>
            <Text style={styles.register}>Register</Text>
          </View>
        </View>
        <View style={styles.registerView}>
          <View style={styles.inputBoxView}>
            <TextInput
              placeholder="name"
              style={styles.inputBox}
              placeholderTextColor="black"
              value={this.state.name}
              onChangeText={event => this.setState({name: event})}
            />
            <Image
              style={styles.icon}
              source={require('../assets/person.png')}
            />
          </View>
          <PhoneInput
            containerStyle={styles.containerStyle}
            // value={this.state.value}
            defaultCode="IN"
            onChangeText={event => this.setState({phone: event})}
            // autoFocus
            placeholder="Mobile no"
            // codeTextStyle={{fontSize: 24}}
            textInputStyle={{height: 50}}
            codeTextStyle={{height: 20}}
          />
          <View style={styles.line} />
          <View style={styles.inputBoxView}>
            <TextInput
              placeholder="email Id"
              style={styles.inputBox}
              placeholderTextColor="black"
              value={this.state.email}
              onChangeText={event => this.setState({email: event})}
            />
            <Image
              style={styles.icon}
              source={require('../assets/email.png')}
            />
          </View>
          <Text style={styles.pass}>Passcode</Text>
          <OTPInputView
            style={styles.passcode}
            pinCount={6}
            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            onCodeChanged={code => {
              this.setState({passcode: code});
            }}
            // autoFocusOnLoad
            codeInputFieldStyle={styles.codeIn}
            // codeInputHighlightStyle={{borderColor: 'black'}}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
            secureTextEntry
            placeholderCharacter="*"
          />
          <Text style={styles.pass}>Confirm Passcode</Text>
          <OTPInputView
            style={styles.passcode}
            pinCount={6}
            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            onCodeChanged={code => {
              this.setState({confirmPasscode: code});
            }}
            // autoFocusOnLoad
            codeInputFieldStyle={styles.codeIn}
            // codeInputHighlightStyle={{borderColor: 'black'}}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
            secureTextEntry
            placeholderCharacter="*"
          />
          <SelectDropdown
            data={states}
            onSelect={(selectedItem, index) => {
              this.setState({_state: selectedItem});
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
            defaultButtonText="State"
            // buttonTextStyle={{marginRight: '70%'}}
            dropdownStyle={{width: '90%'}}
            buttonStyle={styles.buttonStyle}
            dropdownIconPosition="right"
            renderDropdownIcon={() => (
              <Image
                style={{tintColor: 'grey'}}
                source={require('../assets/downArrow.png')}
              />
            )}
          />
          <View style={styles.termsContainer}>
            <TouchableOpacity
              style={styles.tick}
              onPress={() =>
                this.setState({tickToggle: !this.state.tickToggle})
              }>
              {this.state.tickToggle && (
                <View style={styles.innerTickView}>
                  <Image source={require('../assets/tick.png')} />
                </View>
              )}
            </TouchableOpacity>
            <Text style={styles.text}>Agree Terms & Conditions</Text>
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.submitHandler()}>
            <Text style={styles.logText}>REGISTER NOW</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  logText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
  },
  btn: {
    width: '90%',
    height: 50,
    backgroundColor: '#94CD00',
    alignSelf: 'center',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '4%',
    // shadowColor: '#94CD00',
    // shadowOpacity: 0.1,
    // elevation: 6,
    // shadowRadius: 15,
    // shadowOffset: {width: 1, height: 13},
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '5%',
    marginTop: '5%',
  },
  text: {color: '#161A1D', fontSize: 18, marginLeft: '4%'},
  innerTickView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    height: '100%',
    width: '100%',
    borderRadius: 4,
  },
  tick: {
    height: 18,
    width: 18,
    backgroundColor: 'grey',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    width: '90%',
    alignSelf: 'center',
    marginTop: '5%',
    backgroundColor: 'white',
    borderBottomWidth: 2,
    borderColor: '#E8E8E8',
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
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
    marginLeft: '5%',
    marginTop: '5%',
  },
  line: {
    backgroundColor: '#E8E8E8',
    height: 2,
    width: '90%',
    alignSelf: 'center',
  },
  containerStyle: {
    alignSelf: 'center',
    height: 50,
    marginTop: '5%',
    width: '90%',
  },
  icon: {position: 'absolute', right: '5%', tintColor: 'grey'},
  inputBoxView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: '5%',
  },
  inputBox: {
    borderBottomWidth: 2,
    borderColor: '#E8E8E8',
    width: '90%',
    alignSelf: 'center',
    fontSize: 20,
  },
  registerView: {height: '80%', width},
  register: {
    fontSize: 30,
    color: 'white',
    marginLeft: '10%',
    fontWeight: '600',
  },
  topimg: {position: 'absolute', top: -5},
  innerTopView: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '45%',
  },
  container: {height, width, backgroundColor: 'white'},
  topView: {height: '20%', width},
});
export default Register;
