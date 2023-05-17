import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import {ios} from '../../../constants/Platform';
import {height, width} from '../../../constants/ScreenDimentions';
import {colors} from '../../../constants/Colors';
import {categoryData} from '../../../data/categoryData';
import {CartContext} from '../../../GlobalState';
interface SingleItemsProps {
  route?: any;
  navigation?: any;
}
interface SingleItemsState {}
export class SingleItems extends Component<SingleItemsProps, SingleItemsState> {
  static contextType = CartContext;

  categoryList = ({
    item,
  }: {
    item: {id: string; img: any; name: string; price: number};
  }) => {
    const {catItem} = this.props.route.params;
    console.log(catItem, 'catItem');

    const i = categoryData.findIndex(ele => {
      return ele.name === catItem.name;
    });
    const {addItemInCart} = this.context;
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate('ItemInfo', {singleItem: item})
        }
        style={[styles.cards, {backgroundColor: categoryData[i]?.color}]}>
        <Image style={styles.img} source={item.img} />
        <View style={styles.cardMiddleView}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={{fontSize: 20, fontWeight: '600', color: 'red'}}>
            ₹{item.price}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => addItemInCart(item)}
          style={[styles.circle, {shadowColor: categoryData[i]?.sColor}]}>
          <Image
            style={styles.plus}
            source={require('../../../assets/plus.png')}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };
  render() {
    const {catItem} = this.props.route.params;
    const index = categoryData.findIndex(ele => {
      return ele.name === catItem.name;
    });
    console.log(index);

    return (
      <SafeAreaView
        style={[styles.container, {backgroundColor: catItem?.color}]}>
        {/* <StatusBar backgroundColor={catItem.color} /> */}
        <View style={styles.container}>
          <ScrollView
            contentContainerStyle={{paddingBottom: '10%'}}
            showsVerticalScrollIndicator={false}>
            <View style={[styles.header, {backgroundColor: catItem.color}]}>
              <View style={styles.firstView}>
                <TouchableOpacity
                  style={styles.backBtn}
                  onPress={() => this.props.navigation.goBack()}>
                  <Image source={require('../../../assets/backArrow.png')} />
                </TouchableOpacity>
                <Text style={styles.itemName}>{categoryData[index]?.name}</Text>
              </View>
              <View style={styles.secondView}>
                <Image source={require('../../../assets/pizzaCat.png')} />
              </View>
            </View>
            <View style={styles.itemsContainer}>
              <FlatList
                data={categoryData[index]?.items}
                renderItem={this.categoryList}
                // keyExtractor={item => item.id}
                numColumns={2}
                scrollEnabled={false}
              />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  name: {
    fontSize: 22,
    fontWeight: '600',
    color: colors.black,
  },
  cardMiddleView: {
    width: '100%',
    height: '40%',
    marginTop: '40%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  img: {position: 'absolute', top: -30},
  plus: {height: 20, width: 20},
  circle: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: '-12%',
    elevation: 10,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cards: {
    height: 175,
    width: 180,
    borderRadius: 20,
    marginLeft: 15,
    marginTop: 40,
    marginBottom: 20,
    alignItems: 'center',
  },
  itemsContainer: {
    width,
    maxHeight: 5000,
    paddingBottom: ios ? 60 : 10,
    flexDirection: 'row',
  },
  itemName: {fontSize: 28, color: 'white', fontWeight: '600', marginTop: '20%'},
  backBtn: {
    height: 50,
    width: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  firstView: {
    width: '50%',
    padding: 20,
  },
  secondView: {width: '50%'},
  header: {
    width,
    height: 175,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
  },
  container: {height, width, backgroundColor: 'white'},
});
export default SingleItems;
