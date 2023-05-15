export interface NearbyOffersTypes {
  id: string;
  img: any;
  name: string;
  price: number;
  offPrice: number;
  restaurant: string;
}
export const nearbyOffers = [
  {
    id: '103',
    img: require('../assets/biryani.png'),
    name: 'Best Veg Dum Biryani',
    price: 100,
    offPrice: 200,
    restaurant: 'Golden Fish Restaurant',
  },
  {
    id: '104',
    img: require('../assets/tikka.png'),
    name: 'Chicken Tikka',
    price: 80,
    offPrice: 120,
    restaurant: 'Barbeque Nation',
  },
  {
    id: '105',
    img: require('../assets/todayPizza.png'),
    name: 'Pizza',
    price: 90,
    offPrice: 140,
    restaurant: 'Naivedhyam Restaurant',
  },
  {
    id: '106',
    img: require('../assets/dumBiryani.png'),
    name: 'Chicken Biryani',
    price: 60,
    offPrice: 80,
    restaurant: 'Saoji Bhojnalaya',
  },
];
