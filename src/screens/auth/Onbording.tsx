import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import {height, width} from '../../constants/ScreenDimentions';
import {ios} from '../../constants/Platform';
const data = [
  {
    id: 0,
    background_image: require('../../assets/onbordBkgImgOne.png'),
    top_image: require('../../assets/onbordBkgImgChef.png'),
    top_img_two: require('../../assets/bigBurger.png'),
    heading: 'We have Quality Chef',
  },
  {
    id: 1,
    background_image: require('../../assets/onbordBkgImgOne.png'),
    top_image: require('../../assets/deliveryMan.png'),
    top_img_two: null,
    heading: 'Swift Delivery',
  },
  {
    id: 2,
    background_image: require('../../assets/thirdBkg.png'),
    top_image: null,
    top_img_two: null,
    heading: 'Choose your Tasty Food',
  },
  {
    id: 3,
    background_image: require('../../assets/fourthBkg.png'),
    top_image: null,
    top_img_two: null,
    heading: '10% Discount On first order',
  },
];
interface OnbordingProps {
  navigation?: any;
}
interface OnbordingState {
  currIndex: number;
}
export class Onbording extends Component<OnbordingProps, OnbordingState> {
  constructor(props: OnbordingProps) {
    super(props);
    this.state = {currIndex: 0};
  }

  btnNextHandler = () => {
    const {currIndex} = this.state;
    if (currIndex < 3) {
      const nextIndex = currIndex + 1;
      this.setState({currIndex: nextIndex});
    } else {
      this.props.navigation.navigate('Login');
    }
  };
  render() {
    const {currIndex} = this.state;
    return (
      <SafeAreaView style={{height, width}}>
        <ImageBackground
          style={[
            styles.container,
            // eslint-disable-next-line react-native/no-inline-styles
            {
              backgroundColor:
                currIndex === 0 ? '#dbeea8' : currIndex === 1 ? 'pink' : '',
            },
          ]}
          source={data[currIndex]?.background_image}>
          <TouchableOpacity
            testID="skipBtn"
            style={styles.skip}
            onPress={() => this.props.navigation.navigate('Login')}>
            <Image source={require('../../assets/skip.png')} />
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
          {data[currIndex].top_image !== null && (
            <Image
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                marginTop: currIndex === 1 ? '6%' : '2%',
                marginLeft: currIndex === 1 ? '5%' : 0,
              }}
              source={data[currIndex]?.top_image}
            />
          )}
          {data[currIndex].top_img_two !== null && (
            <Image
              style={styles.burger}
              source={data[currIndex]?.top_img_two}
            />
          )}
          <View style={styles.bottomView}>
            <View style={styles.btnContainer}>
              <TouchableOpacity
                testID="next_btn"
                style={styles.btn}
                onPress={() => this.btnNextHandler()}>
                <Image
                  style={styles.btnImg}
                  source={require('../../assets/rightArrow.png')}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.textView}>
              <Text style={styles.text}>{data[currIndex].heading}</Text>
              <Text style={styles.textTwo}>
                It is a long established fact that a reader will be distracted
              </Text>
            </View>
            <View style={styles.dotView}>
              <View
                style={[
                  currIndex === 0 ? styles.redCircle : styles.greenCircle,
                ]}
              />
              <View
                style={[
                  currIndex === 1 ? styles.redCircle : styles.greenCircle,
                ]}
              />
              <View
                style={[
                  currIndex === 2 ? styles.redCircle : styles.greenCircle,
                ]}
              />
              <View
                style={[
                  currIndex === 3 ? styles.redCircle : styles.greenCircle,
                ]}
              />
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  textView: {
    width: ios ? '60%' : '70%',
    alignSelf: 'center',
    marginTop: ios ? '16%' : '15%',
    height: '30%',
  },
  skipText: {color: 'black', fontWeight: 'bold'},
  skip: {
    height: 40,
    width: 80,
    borderRadius: 30,
    backgroundColor: 'white',
    position: 'absolute',
    right: 20,
    top: 30,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    zIndex: 1,
  },
  dotView: {
    width: '16%',
    marginTop: ios ? '10%' : '15%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  redCircle: {
    height: 12,
    width: 12,
    backgroundColor: 'red',
    borderRadius: 6,
  },
  greenCircle: {
    height: 12,
    width: 12,
    backgroundColor: 'white',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#94CD00',
  },
  textTwo: {
    alignSelf: 'center',
    fontSize: 20,
    textAlign: 'center',
    marginTop: '5%',
    color: 'grey',
  },
  text: {
    fontSize: 30,
    color: 'black',
    alignSelf: 'center',
  },
  btnContainer: {
    backgroundColor: 'white',
    height: 80,
    width: 80,
    borderRadius: 40,
    alignSelf: 'center',
    position: 'absolute',
    top: -35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnImg: {height: '26%', width: '26%'},
  btn: {
    backgroundColor: '#DF201F',
    height: 70,
    width: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomView: {
    backgroundColor: 'white',
    height: ios ? '62%' : '60%',
    position: 'absolute',
    width: '120%',
    alignSelf: 'center',
    bottom: -150,
    borderRadius: 250,
  },
  burger: {position: 'absolute', top: ios ? '27%' : '29%', right: '1%'},
  container: {height, width},
});
export default Onbording;
