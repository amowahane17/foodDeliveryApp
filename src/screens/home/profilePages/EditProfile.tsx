import React, {Component} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {ios} from '../../../constants/Platform';
import {height, width} from '../../../constants/ScreenDimentions';
import OTPInputView from '@twotalltotems/react-native-otp-input';
interface EditProfileProps {
  navigation?: any;
}
interface EditProfileState {}
export class EditProfile extends Component<EditProfileProps, EditProfileState> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={styles.innerHeaderView}>
            <View>
              <Image source={require('../../../assets/backArrow.png')} />
            </View>
            <Text style={styles.heading}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        <SafeAreaView style={{width}}>
          <ScrollView
            contentContainerStyle={{paddingBottom: '10%'}}
            showsVerticalScrollIndicator={false}>
            <View style={styles.imgView}>
              <Image source={require('../../../assets/editProimg.png')} />
              <TouchableOpacity style={styles.btn}>
                <Image source={require('../../../assets/cam.png')} />
              </TouchableOpacity>
            </View>
            <View style={styles.inputView}>
              <View style={styles.inputBoxView}>
                <TextInput
                  placeholder="name"
                  style={styles.inputBox}
                  placeholderTextColor="black"
                  // value={this.state.name}
                  // onChangeText={event => this.setState({name: event})}
                />
                <Image
                  style={styles.icon}
                  source={require('../../../assets/person.png')}
                />
              </View>
              <View style={styles.inputBoxView}>
                <TextInput
                  placeholder="phone"
                  style={styles.inputBox}
                  placeholderTextColor="black"
                  // value={this.state.name}
                  // onChangeText={event => this.setState({name: event})}
                />
                <Image
                  style={styles.icon}
                  source={require('../../../assets/phone.png')}
                />
              </View>
              <View style={styles.inputBoxView}>
                <TextInput
                  placeholder="email"
                  style={styles.inputBox}
                  placeholderTextColor="black"
                  // value={this.state.name}
                  // onChangeText={event => this.setState({name: event})}
                />
                <Image
                  style={styles.icon}
                  source={require('../../../assets/email.png')}
                />
              </View>
              <Text style={styles.pass}>Old Passcode</Text>
              <OTPInputView
                //@ts-ignore
                testID="passcodeReg"
                style={styles.passcode}
                pinCount={6}
                onCodeChanged={code => {
                  this.setState({passcode: code});
                }}
                codeInputFieldStyle={styles.codeIn}
                secureTextEntry
                placeholderCharacter="*"
              />
              <Text style={styles.pass}>New Passcode</Text>
              <OTPInputView
                //@ts-ignore
                testID="passcodeReg"
                style={styles.passcode}
                pinCount={6}
                onCodeChanged={code => {
                  this.setState({passcode: code});
                }}
                codeInputFieldStyle={styles.codeIn}
                secureTextEntry
                placeholderCharacter="*"
              />
              <Text style={styles.pass}>Confirm Passcode</Text>
              <OTPInputView
                //@ts-ignore
                testID="passcodeReg"
                style={styles.passcode}
                pinCount={6}
                onCodeChanged={code => {
                  this.setState({passcode: code});
                }}
                codeInputFieldStyle={styles.codeIn}
                secureTextEntry
                placeholderCharacter="*"
              />
              <TouchableOpacity testID="registerBtn" style={styles.subbtn}>
                <Text style={styles.logText}>Save Profile</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
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
  subbtn: {
    width: '90%',
    height: 50,
    backgroundColor: '#94CD00',
    alignSelf: 'center',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '4%',
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
    height: 60,
  },
  inputView: {width, marginTop: '5%', height: 800},
  btn: {
    backgroundColor: 'white',
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    position: 'absolute',
    bottom: '10%',
    right: '10%',
  },
  imgView: {alignItems: 'center', width: '50%', alignSelf: 'center'},
  container: {width, height, backgroundColor: 'white'},
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
});
export default EditProfile;
