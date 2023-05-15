import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ios} from '../constants/Platform';
interface CustomTabProps {
  state: any;
  descriptors: any;
  navigation?: any;
}
interface CustomTabState {}
export class CustomTab extends Component<CustomTabProps, CustomTabState> {
  render() {
    return (
      <View style={styles.mainContainer}>
        {this.props.state.routes.map((route, index) => {
          const {options} = this.props.descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = this.props.state.index === index;

          const onPress = () => {
            const event = this.props.navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              this.props.navigation.navigate({name: route.name, merge: true});
            }
          };

          const onLongPress = () => {
            this.props.navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabContainer}
              key={route.key}>
              {isFocused ? (
                <View style={styles.focused}>
                  {label === 'Home' ? (
                    <Image source={require('../assets/tabhome.png')} />
                  ) : label === 'Cart' ? (
                    <Image
                      style={styles.img}
                      source={require('../assets/tabcart.png')}
                    />
                  ) : label === 'Search' ? (
                    <Image
                      style={styles.img}
                      source={require('../assets/tabsearch.png')}
                    />
                  ) : label === 'Offer' ? (
                    <Image
                      style={styles.img}
                      source={require('../assets/taboffer.png')}
                    />
                  ) : null}
                  <Text style={styles.label}>{label}</Text>
                </View>
              ) : (
                <View>
                  {label === 'Home' ? (
                    <Image
                      style={styles.imgGray}
                      source={require('../assets/tabhome.png')}
                    />
                  ) : label === 'Cart' ? (
                    <Image source={require('../assets/tabcart.png')} />
                  ) : label === 'Search' ? (
                    <Image source={require('../assets/tabsearch.png')} />
                  ) : label === 'Offer' ? (
                    <Image source={require('../assets/taboffer.png')} />
                  ) : null}
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  label: {
    fontWeight: '700',
    color: 'white',
    fontSize: 16,
    marginLeft: '5%',
  },
  focused: {
    backgroundColor: 'red',
    flexDirection: 'row',
    height: 50,
    width: '96%',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    elevation: 10,
    shadowOffset: {width: -2, height: -4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: 'orange',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  img: {tintColor: 'white'},
  imgGray: {tintColor: '#A2A3A5'},
  tabContainer: {
    justifyContent: 'center',
    width: '24%',
    backgroundColor: 'white',
    height: 70,
    alignItems: 'center',
    paddingBottom: ios ? '2.4%' : 0,
  },
});
export default CustomTab;
