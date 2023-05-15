export interface ItemsDataTypes {
  id: string;
  name: string;
  img: any;
  color: string;
}

export const itemsData = [
  {
    id: '97',
    name: 'Pizza',
    img: require('../assets/pizza.png'),
    color: '#FE5656',
  },
  {
    id: '98',
    name: 'Burger',
    img: require('../assets/burger.png'),
    color: '#FFC268',
  },
  {
    id: '99',
    name: 'Chicken',
    img: require('../assets/chickenBuk.png'),
    color: '#FE5656',
  },
  {
    id: '100',
    name: 'Veg Roll',
    img: require('../assets/vegRoll.png'),
    color: '#FFC268',
  },
  {
    id: '101',
    name: 'Drink',
    img: require('../assets/cola.png'),
    color: '#FE5656',
  },
  {
    id: '102',
    name: 'Veg',
    img: require('../assets/veg.png'),
    color: '#FFC268',
  },
];
