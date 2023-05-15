export interface BestChoiseTypes {
  id: string;
  img: any;
  name: string;
  restaurent: string;
  price: string;
  color: string;
  sColor: string;
}

export const bestChoise = [
  {
    id: '1',
    img: require('../assets/burgerWithShadow.png'),
    name: 'Burger',
    restaurent: 'Barbeque Nation',
    price: '90',
    color: '#FFF3E5',
    sColor: 'orange',
    quantity: 1,
  },
  {
    id: '2',
    img: require('../assets/pizzaWithShadow.png'),
    name: 'Pizza',
    restaurent: 'Naivedhyam Restaurant',
    price: '150',
    color: '#FFE5E5',
    sColor: 'pink',
    quantity: 1,
  },
  {
    id: '3',
    img: require('../assets/burgerWithShadow.png'),
    name: 'Biryani',

    restaurent: 'Barbeque Nation',
    price: '90',
    color: '#FFF3E5',
    sColor: 'orange',
    quantity: 1,
  },
  {
    id: '4',
    img: require('../assets/pizzaWithShadow.png'),
    name: 'Veg Biryani',

    restaurent: 'Barbeque Nation',
    price: '150',
    color: '#FFE5E5',
    sColor: 'pink',
    quantity: 1,
  },
  {
    id: '5',
    img: require('../assets/burgerWithShadow.png'),
    name: 'Ice Cream',

    restaurent: 'Barbeque Nation',
    price: '75',
    color: '#FFF3E5',
    sColor: 'orange',
    quantity: 1,
  },
];
