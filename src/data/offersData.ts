export interface OfferDataTypes {
  id: string;
  off: string;
  text: string;
  img: any;
}

export const offersData = [
  {
    id: '1',
    off: 'Get 30% OFF',
    text: 'Super Veg Delicious Dish',
    img: require('../assets/offerOne.png'),
  },
  {
    id: '2',
    off: 'Get 30% OFF',
    text: 'Best Veg Hamburger',
    img: require('../assets/offerTwo.png'),
  },
  {
    id: '3',
    off: 'Get 30% OFF',
    text: 'Classic Chicken Wings',
    img: require('../assets/offerThree.png'),
  },
];
