export interface TodaySpecialTypes {
  id: string;
  img: any;
  name: string;
  price: number;
  offPrice: number;
  restaurant: string;
}

export const todaySpecial = [
  {
    id: '132',
    img: require('../assets/biryani.png'),
    name: 'Best Veg Dum Biryani',
    price: 100,
    offPrice: 200,
    restaurant: 'Golden Fish Restaurant',
  },
  {
    id: '133',
    img: require('../assets/tikka.png'),
    name: 'Chicken Tikka',
    price: 80,
    offPrice: 120,
    restaurant: 'Barbeque Nation',
  },
  {
    id: '134',
    img: require('../assets/todayPizza.png'),
    name: 'Pizza',
    price: 90,
    offPrice: 140,
    restaurant: 'Naivedhyam Restaurant',
  },
  {
    id: '135',
    img: require('../assets/dumBiryani.png'),
    name: 'Chicken Biryani',
    price: 60,
    offPrice: 80,
    restaurant: 'Saoji Bhojnalaya',
  },
  {
    id: '136',
    img: require('../assets/biryani.png'),
    name: 'Best Veg Dum Biryani',
    price: 100,
    offPrice: 200,
    restaurant: 'Golden Fish Restaurant',
  },
];
