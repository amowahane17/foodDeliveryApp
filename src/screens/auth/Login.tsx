import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  TextInput,
  Modal,
  FlatList,
} from 'react-native';
import React, {Component} from 'react';
import {height, width} from '../../constants/ScreenDimentions';
import PhoneInput from 'react-native-phone-number-input';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {ios} from '../../constants/Platform';
import {colors} from '../../constants/Colors';
import {codeData} from '../../data/codeData';

interface LoginProps {
  navigation?: any;
}
interface LoginState {
  phone: string;
  userToggle: boolean;
  code: string;
  codeModalToggle: boolean;
  selectedIndex: null | number;
}
export class Login extends Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
    this.state = {
      phone: '',
      userToggle: true,
      code: '',
      codeModalToggle: false,
      selectedIndex: null,
    };
  }
  loginHandler = () => {
    const {phone, code} = this.state;
    const phoneReg = /^[6-9]\d{9}$/;
    const passReg = /^\d{6}$/;
    const isValidPhone = phoneReg.test(phone);
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
              {/* <PhoneInput
                //@ts-ignore
                testID="phoneInputLogin"
                containerStyle={styles.containerStyle}
                value={this.state.value}
                defaultCode="IN"
                onChangeText={event => this.setState({value: event})}
                placeholder="Mobile no"
                codeTextStyle={{fontSize: 24}}
                textInputStyle={{fontSize: 20}}
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
                      right: 20,
                      tintColor: 'grey',
                    }}
                    source={require('../../assets/phone.png')}
                  />
                </View>
              </View>
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
                  <Text style={styles.cusSellText}>Customer</Text>
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
                  <Text style={styles.cusSellText}>Seller</Text>
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
  cusSellText: {
    fontWeight: '600',
    color: colors.black,
    fontSize: 18,
    marginLeft: '7%',
  },
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
  phoneInputBoxView: {flexDirection: 'row', alignItems: 'center', width: '68%'},
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
    marginLeft: '5%',
  },
  countryCodeView: {
    height: '100%',
    width: '32%',
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
    borderBottomWidth: 1,
    borderColor: '#E8E8E8',
  },
  register: {
    fontSize: 18,
    alignSelf: 'center',
    marginTop: '5%',
    color: '#161A1D',
    fontWeight: '600',
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
    marginTop: '5%',
  },
  xView: {
    flexDirection: 'row',
    marginLeft: '2%',
  },
  cusSellView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
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
    marginTop: '1%',
  },
  codeIn: {
    borderColor: '#E8E8E8',
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
    fontSize: 18,
    color: colors.black,
    fontWeight: '600',
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
  welcome: {fontSize: 22, color: '#FFFFFF', fontWeight: '700'},
  texts: {position: 'absolute', bottom: ios ? '18%' : '12%', left: '2%'},
  loginText: {fontSize: 45, fontWeight: '700', color: '#FFFFFF'},
  bowl: {position: 'absolute', right: 0, top: 50},
  container: {height, width, backgroundColor: 'white'},
  topView: {height: ios ? '48%' : '51%', width, backgroundColor: 'white'},
});
export default Login;
