import React, {Component} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {height, width} from '../../constants/ScreenDimentions';
import {colors} from '../../constants/Colors';
import {FlatList} from 'react-native-gesture-handler';
import {todaySpecial} from '../../data/todaySpecial';

interface SearchProps {}
interface SearchState {
  searchText: string;
  filteredData: any[];
}
export class Search extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {filteredData: [], searchText: ''};
  }
  searchHandler = (text: string) => {
    this.setState({
      searchText: text,
      filteredData: todaySpecial.filter(element => {
        return element.name
          .toLocaleLowerCase()
          .includes(text.toLocaleLowerCase());
      }),
    });
  };
  searchList = ({item}) => {
    return (
      <View style={styles.searchCards}>
        <Image style={styles.img} source={item.img} />
        <View style={styles.nameView}>
          <Text style={styles.name}>{item.name}</Text>
        </View>
      </View>
    );
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <View style={styles.searchView}>
            <Image
              style={styles.imgOne}
              source={require('../../assets/search.png')}
            />
            <TextInput
              placeholder="Search"
              placeholderTextColor="#161A1D"
              style={styles.searchBar}
              value={this.state.searchText}
              onChangeText={event => this.searchHandler(event)}
            />
            {this.state.searchText !== '' && (
              <TouchableOpacity
                onPress={() => this.setState({searchText: ''})}
                style={styles.imgTwo}>
                <Image source={require('../../assets/cross.png')} />
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.historyView}>
            <Text style={styles.text}>History</Text>
            <View style={styles.historyItems}>
              <View style={styles.historyItem}>
                <Text style={styles.historyText}>Food Shop</Text>
              </View>
              <View style={styles.historyItem}>
                <Text style={styles.historyText}>Food Shop Is Near</Text>
              </View>
              <View style={styles.historyItem}>
                <Text style={styles.historyText}>Food</Text>
              </View>
              <View style={styles.historyItem}>
                <Text style={styles.historyText}>Food Good</Text>
              </View>
              <View style={styles.historyItem}>
                <Text style={styles.historyText}>Food Good</Text>
              </View>
            </View>
          </View>
          <View style={{marginTop: '6%'}}>
            <FlatList
              data={
                this.state.searchText !== '' ? this.state.filteredData : null
              }
              renderItem={this.searchList}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  imgTwo: {position: 'absolute', zIndex: 1, right: '10%'},
  imgOne: {position: 'absolute', zIndex: 1, left: '10%'},
  name: {color: '#161A1D', fontSize: 18, fontWeight: '600'},
  nameView: {
    width: '70%',
    height: 100,
    paddingTop: 20,
    marginLeft: '5%',
  },
  img: {height: 100, width: 90, resizeMode: 'contain'},
  searchCards: {
    width: '90%',
    alignSelf: 'center',
    height: 100,
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 10,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: 'orange',
    flexDirection: 'row',
    marginBottom: 15,
  },
  historyText: {
    margin: '2%',
    fontSize: 15,
    color: '#A2A3A5',
    fontWeight: '600',
  },
  historyItem: {
    height: 36,
    backgroundColor: '#EDEDED',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 1.6,
    marginBottom: 5,
  },
  historyItems: {
    width: '97%',
    alignSelf: 'center',
    flexWrap: 'wrap',
    marginTop: '2%',
    flexDirection: 'row',
  },
  text: {color: '#161A1D', fontSize: 18, fontWeight: '600', marginLeft: '5%'},
  historyView: {width: '100%'},
  searchBar: {
    backgroundColor: 'white',
    height: 50,
    width: '90%',
    elevation: 10,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: 'orange',
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#E7E7E9',
    fontWeight: '500',
    fontSize: 18,
    paddingLeft: '15%',
    paddingRight: '10%',
    color: colors.black,
  },
  searchView: {
    height: 80,
    width,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'pink',
    flexDirection: 'row',
  },
  container: {height, width, backgroundColor: 'white'},
});
export default Search;
