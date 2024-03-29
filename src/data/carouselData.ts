export interface CarouselDataTypes {
  id: string;
  img: any;
  background_image: any;
  text: string;
  off_img: any;
  item_data: {
    id: string;
    img: any;
    name: string;
    restaurent: string;
    price: string;
    color: string;
    sColor: string;
    quantity: number;
  }[];
}

export const carouselData = [
  {
    id: '6',
    img: require('../assets/cPizza.png'),
    background_image: require('../assets/offerPizzaBack.png'),
    text: 'Super Veg Delicious Pizza',
    off_img: require('../assets/offPriceOffer.png'),
    item_data: [
      {
        id: '7',
        img: require('../assets/pizzaWithShadow.png'),
        name: 'Veg Pizza',
        restaurent: 'Naivedhyam Restaurant',
        price: '150',
        color: '#FFE5E5',
        sColor: 'pink',
        quantity: 1,
      },
      {
        id: '8',
        img: require('../assets/pizzaWithShadow.png'),
        name: 'Veg Pizza',
        restaurent: 'Elaichi Restaurant',
        price: '150',
        color: '#FFE5E5',
        sColor: 'pink',
        quantity: 1,
      },
      {
        id: '9',
        img: require('../assets/pizzaWithShadow.png'),
        name: 'Veg Pizza',
        restaurent: 'Infinity Kitchen Restaurant',
        price: '150',
        color: '#FFE5E5',
        sColor: 'pink',
        quantity: 1,
      },
      {
        id: '10',
        img: require('../assets/pizzaWithShadow.png'),
        name: 'Veg Pizza',
        restaurent: 'Babbars Kitchen',
        price: '150',
        color: '#FFE5E5',
        sColor: 'pink',
        quantity: 1,
      },
      {
        id: '11',
        img: require('../assets/pizzaWithShadow.png'),
        name: 'Veg Pizza',
        restaurent: 'Naivedhyam Restaurant',
        price: '150',
        color: '#FFE5E5',
        sColor: 'pink',
        quantity: 1,
      },
      {
        id: '12',
        img: require('../assets/pizzaWithShadow.png'),
        name: 'Veg Pizza',
        restaurent: 'Elaichi Restaurant',
        price: '150',
        color: '#FFE5E5',
        sColor: 'pink',
        quantity: 1,
      },
      {
        id: '13',
        img: require('../assets/pizzaWithShadow.png'),
        name: 'Veg Pizza',
        restaurent: 'Infinity Kitchen Restaurant',
        price: '150',
        color: '#FFE5E5',
        sColor: 'pink',
        quantity: 1,
      },
    ],
  },
  {
    id: '14',
    img: require('../assets/offterTwo.png'),
    background_image: require('../assets/offerPizzaBack.png'),
    text: 'Veg Delicious Burger',
    off_img: require('../assets/offPriceOffer.png'),
    item_data: [
      {
        id: '15',
        img: require('../assets/burgerWithShadow.png'),
        name: 'Burger',
        restaurent: 'Naivedhyam Restaurant',
        price: '150',
        color: '#FFE5E5',
        sColor: 'pink',
        quantity: 1,
      },
      {
        id: '16',
        img: require('../assets/burgerWithShadow.png'),
        name: 'Burger',
        restaurent: 'Elaichi Restaurant',
        price: '150',
        color: '#FFE5E5',
        sColor: 'pink',
        quantity: 1,
      },
      {
        id: '17',
        img: require('../assets/burgerWithShadow.png'),
        name: 'Burger',
        restaurent: 'Infinity Kitchen Restaurant',
        price: '150',
        color: '#FFE5E5',
        sColor: 'pink',
        quantity: 1,
      },
      {
        id: '18',
        img: require('../assets/burgerWithShadow.png'),
        name: 'Burger',
        restaurent: 'Babbars Kitchen',
        price: '150',
        color: '#FFE5E5',
        sColor: 'pink',
        quantity: 1,
      },
      {
        id: '19',
        img: require('../assets/burgerWithShadow.png'),
        name: 'Burger',
        restaurent: 'Naivedhyam Restaurant',
        price: '150',
        color: '#FFE5E5',
        sColor: 'pink',
        quantity: 1,
      },
    ],
  },
];
