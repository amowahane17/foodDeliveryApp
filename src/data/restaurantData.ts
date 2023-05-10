export interface RestaurantDataTypes {
  id: string;
  img: any;
  name: string;
  distance: number;
  address: string;
}

export const restaurantData = [
  {
    id: '1',
    img: require('../assets/img.jpeg'),
    name: 'Golden Fish Restaurant',
    distance: 2.5,
    address: 'Manish Nagar, Ingole Nagar, Sonegaon, Nagpur',
  },
  {
    id: '2',
    img: require('../assets/img.jpeg'),
    name: 'Chinese Fork restaurant',
    distance: 2.4,
    address: 'Manish Nagar, Ingole Nagar, Sonegaon, Nagpur',
  },
  {
    id: '3',
    img: require('../assets/img.jpeg'),
    name: 'Kshatriya Restaurant',
    distance: 1.2,
    address: 'Manish Nagar, Ingole Nagar, Sonegaon, Nagpur',
  },
  {
    id: '4',
    img: require('../assets/img.jpeg'),
    name: 'Nandini Restaurant',
    distance: 2.4,
    address: 'Manish Nagar, Ingole Nagar, Sonegaon, Nagpur',
  },
];
