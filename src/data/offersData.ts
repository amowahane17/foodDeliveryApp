export interface OfferDataTypes {
  id: string;
  off: string;
  text: string;
  img: any;
}

export const offersData = [
  {
    id: '107',
    off: 'Get 30% OFF',
    text: 'Super Veg Delicious Dish',
    img: require('../assets/offerOne.png'),
  },
  {
    id: '108',
    off: 'Get 30% OFF',
    text: 'Best Veg Hamburger',
    img: require('../assets/offerTwo.png'),
  },
  {
    id: '109',
    off: 'Get 30% OFF',
    text: 'Classic Chicken Wings',
    img: require('../assets/offerThree.png'),
  },
];
