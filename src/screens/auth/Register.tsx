import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  ScrollView,
  FlatList,
  Modal,
} from 'react-native';
import {height, width} from '../../constants/ScreenDimentions';
import PhoneInput from 'react-native-phone-number-input';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import SelectDropdown from 'react-native-select-dropdown';
import {colors} from '../../constants/Colors';
import {codeData} from '../../data/codeData';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
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
  selectedIndex: null | number;
  codeModalToggle: boolean;
  confirm: null | FirebaseAuthTypes.ConfirmationResult;
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
      selectedIndex: null,
      codeModalToggle: false,
      confirm: null,
    };
  }
  onAuthStateChanged = user => {
    if (user) {
      // Some Android devices can automatically process the verification code (OTP) message, and the user would NOT need to enter the code.
      // Actually, if he/she tries to enter it, he/she will get an error message because the code was already used in the background.
      // In this function, make sure you hide the component(s) for entering the code and/or navigate away from this screen.
      // It is also recommended to display a message to the user informing him/her that he/she has successfully logged in.
    }
  };
  componentDidMount = () => {
    const subscriber = auth().onAuthStateChanged(this.onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  };
  signInWithPhoneNumber = async (phoneNumber: string) => {
    console.log('this is signinphone', phoneNumber);

    const confirmation = await auth().createUserWithEmailAndPassword(
      'shuhamsarode435@gmail.com',
      '123456',
    );
    this.setState({confirm: confirmation}, () => {
      console.log('this is confirmaiton', this.state.confirm);
    });
  };

  submitHandler = async () => {
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
        if (!this.state.confirm) {
          const l = `${
            this.state.selectedIndex === null
              ? codeData[0].code
              : codeData[this.state.selectedIndex].code
          } ${phone}`;
          await this.signInWithPhoneNumber(l);

          console.log(
            `${
              this.state.selectedIndex === null
                ? codeData[0].code
                : codeData[this.state.selectedIndex].code
            } ${phone}`,
          );
          console.log('this is l', l);
        }
        this.props.navigation.navigate('Otp', {
          confirmParam: this.state.confirm,
        });
      } else {
        Alert.alert('Please enter valid details');
      }
    } else {
      Alert.alert('Please accept terms and conditons');
    }
  };
  render() {
    return (
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <View style={styles.topView}>
              <Image source={require('../../assets/registerImg.png')} />
              <Image
                style={styles.topimg}
                source={require('../../assets/blur.png')}
              />
              <View style={styles.innerTopView}>
                <TouchableOpacity
                  testID="goBackBtn"
                  style={{marginLeft: '10%'}}
                  onPress={() => this.props.navigation.goBack()}>
                  <Image source={require('../../assets/leftArrow.png')} />
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
                  source={require('../../assets/person.png')}
                />
              </View>
              {/* <PhoneInput
                //@ts-ignore
                testID="phoneInputReg"
                containerStyle={styles.containerStyle}
                // value={this.state.value}
                defaultCode="IN"
                onChangeText={event => this.setState({phone: event})}
                // autoFocus
                placeholder="Mobile no"
                // codeTextStyle={{fontSize: 24}}
                textInputStyle={{height: 50}}
                codeTextStyle={{height: 20}}
              /> */}
              <View style={styles.phoneInputContainer}>
                <TouchableOpacity
                  onPress={() => this.setState({codeModalToggle: true})}
                  style={styles.countryCodeView}>
                  <Image
                    style={{width: 30, height: 30}}
                    source={
                      this.state.selectedIndex === null
                        ? codeData[0].img
                        : codeData[this.state.selectedIndex].img
                    }
                  />
                  <Text style={styles.countryCodeText}>
                    {this.state.selectedIndex === null
                      ? codeData[0].code
                      : codeData[this.state.selectedIndex].code}
                  </Text>
                  <Image
                    style={{marginLeft: '5%'}}
                    source={require('../../assets/modalOpenArrow.png')}
                  />
                </TouchableOpacity>
                <View style={styles.verticalLine} />
                <View style={styles.phoneInputBoxView}>
                  <TextInput
                    placeholder="mobile no"
                    placeholderTextColor={colors.black}
                    style={styles.phoneInputBox}
                    onChangeText={event => this.setState({phone: event})}
                  />
                  <Image
                    style={{
                      position: 'absolute',
                      right: 25,
                      tintColor: 'grey',
                    }}
                    source={require('../../assets/phone.png')}
                  />
                </View>
              </View>
              <View style={styles.line} />
              <View style={styles.inputBoxView}>
                <TextInput
                  placeholder="email Id"
                  style={styles.inputBox}
                  placeholderTextColor={colors.black}
                  value={this.state.email}
                  onChangeText={event => this.setState({email: event})}
                />
                <Image
                  style={[styles.icon, {right: 22}]}
                  source={require('../../assets/email.png')}
                />
              </View>
              <Text style={styles.pass}>Passcode</Text>
              <OTPInputView
                //@ts-ignore
                testID="passcodeReg"
                style={styles.passcode}
                pinCount={6}
                // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                onCodeChanged={code => {
                  this.setState({passcode: code});
                }}
                // autoFocusOnLoad
                codeInputFieldStyle={styles.codeIn}
                // codeInputHighlightStyle={{borderColor: 'black'}}
                // onCodeFilled={code => {
                //   console.log(`Code is ${code}, you are good to go!`);
                // }}
                secureTextEntry
                placeholderCharacter="*"
              />
              <Text style={styles.pass}>Confirm Passcode</Text>
              <OTPInputView
                //@ts-ignore
                testID="confPasscodeReg"
                style={styles.passcode}
                pinCount={6}
                // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                onCodeChanged={code => {
                  this.setState({confirmPasscode: code});
                }}
                // autoFocusOnLoad
                codeInputFieldStyle={styles.codeIn}
                // codeInputHighlightStyle={{borderColor: 'black'}}
                // onCodeFilled={code => {
                //   console.log(`Code is ${code}, you are good to go!`);
                // }}
                secureTextEntry
                placeholderCharacter="*"
              />
              <SelectDropdown
                //@ts-ignore
                testID="stateSelect"
                data={states}
                onSelect={(selectedItem, _index) => {
                  this.setState({_state: selectedItem});
                }}
                buttonTextAfterSelection={(selectedItem, _index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem;
                }}
                rowTextForSelection={(item, _index) => {
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
                    source={require('../../assets/downArrow.png')}
                  />
                )}
              />
              <View style={styles.termsContainer}>
                <TouchableOpacity
                  testID="tickBtn"
                  style={styles.tick}
                  onPress={() =>
                    this.setState({tickToggle: !this.state.tickToggle})
                  }>
                  {this.state.tickToggle && (
                    <View style={styles.innerTickView}>
                      <Image source={require('../../assets/tick.png')} />
                    </View>
                  )}
                </TouchableOpacity>
                <Text style={styles.text}>Agree Terms & Conditions</Text>
              </View>
              <TouchableOpacity
                testID="registerBtn"
                style={styles.btn}
                onPress={() => this.submitHandler()}>
                <Text style={styles.logText}>REGISTER NOW</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Modal
            onRequestClose={() => this.setState({codeModalToggle: false})}
            visible={this.state.codeModalToggle}>
            <SafeAreaView>
              <View style={styles.codeModalView}>
                <View style={styles.modalSearchBar}>
                  <TouchableOpacity
                    onPress={() => this.setState({codeModalToggle: false})}>
                    <Image source={require('../../assets/cross.png')} />
                  </TouchableOpacity>
                  <TextInput
                    style={{width: '70%', marginLeft: '5%'}}
                    placeholder="Enter Country Name"
                  />
                </View>
                <FlatList
                  data={codeData}
                  renderItem={({item, index}) => {
                    return (
                      <>
                        <TouchableOpacity
                          style={styles.selectCode}
                          onPress={() =>
                            this.setState({
                              selectedIndex: index,
                              codeModalToggle: false,
                            })
                          }>
                          <Image
                            style={{height: 30, width: 30}}
                            source={item.img}
                          />
                          <Text style={styles.countryName}>{item.name}</Text>
                          <Text style={styles.countryCodeModal}>
                            ({item.code})
                          </Text>
                        </TouchableOpacity>
                        <View style={styles.modalLine} />
                      </>
                    );
                  }}
                  keyExtractor={item => item.id}
                />
              </View>
            </SafeAreaView>
          </Modal>
        </SafeAreaView>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  modalSearchBar: {
    width: '90%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '5%',
  },
  modalLine: {
    width: '100%',
    height: 1,
    backgroundColor: colors.borderColor,
    marginBottom: '2%',
    marginTop: '2%',
  },
  countryCodeModal: {
    fontSize: 18,
    color: colors.black,
    marginLeft: '2%',
    fontWeight: '600',
  },
  countryName: {
    fontSize: 18,
    color: colors.black,
    marginLeft: '4%',
    fontWeight: '600',
  },
  selectCode: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
  },
  codeModalView: {
    backgroundColor: 'white',
    height,
    width,
    alignSelf: 'center',
    padding: 20,
  },
  phoneInputBox: {
    width: '100%',
    fontWeight: '600',
    color: colors.black,
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 60,
  },
  phoneInputBoxView: {flexDirection: 'row', alignItems: 'center', width: '70%'},
  verticalLine: {
    width: 1,
    height: 26,
    backgroundColor: '#E8E8E8',
    alignSelf: 'center',
  },
  countryCodeText: {
    color: colors.black,
    fontSize: 18,
    fontWeight: '600',
    marginLeft: '3%',
  },
  countryCodeView: {
    height: '100%',
    width: '30%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '3%',
  },
  phoneInputContainer: {
    width: '90%',
    height: 60,
    marginTop: '5%',
    flexDirection: 'row',
    alignSelf: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#E8E8E8',
  },
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
    borderColor: colors.borderColor,
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
  icon: {position: 'absolute', right: 25, tintColor: 'grey'},
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
    fontWeight: '600',
    color: colors.black,
    fontSize: 18,
    height: 60,
    paddingLeft: 20,
  },
  registerView: {height: '80%', width},
  register: {
    fontSize: 30,
    color: 'white',
    marginLeft: '10%',
    fontWeight: '600',
  },
  topimg: {position: 'absolute'},
  innerTopView: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: '45%',
  },
  container: {height, width, backgroundColor: 'white'},
  topView: {height: '17%', width},
});
export default Register;
