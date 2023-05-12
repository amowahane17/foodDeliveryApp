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
    carousel_images: [
      {id: '1', img: require('../assets/cImgOne.png')},
      {id: '2', img: require('../assets/cImgOne.png')},
      {id: '3', img: require('../assets/cImgOne.png')},
      {id: '4', img: require('../assets/cImgOne.png')},
    ],
    team_data: [
      {
        id: '1',
        name: 'Prasad Singh',
        img: require('../assets/prasadSingh.png'),
        deg: 'Manager',
      },
      {
        id: '2',
        name: 'Mohan Lal',
        img: require('../assets/mohanLal.png'),
        deg: 'Cheif',
      },
      {
        id: '3',
        name: 'Mohan Lal',
        img: require('../assets/mohanLal.png'),
        deg: 'Cheif',
      },
    ],
    gallery: [
      {id: '1', img: require('../assets/gallery/gOne.png')},
      {id: '2', img: require('../assets/gallery/gTwo.png')},
      {id: '3', img: require('../assets/gallery/gThree.png')},
      {id: '4', img: require('../assets/gallery/gFour.png')},
      {id: '5', img: require('../assets/gallery/gFive.png')},
      {id: '6', img: require('../assets/gallery/gSix.png')},
      {id: '7', img: require('../assets/gallery/gSeven.png')},
      {id: '8', img: require('../assets/gallery/gEight.png')},
    ],
    catgoryData: [
      {
        id: '1',
        name: 'Pizza',
        img: require('../assets/pizza.png'),
        color: '#FE5656',
      },
      {
        id: '2',
        name: 'Burger',
        img: require('../assets/burger.png'),
        color: '#FFC268',
      },
      {
        id: '3',
        name: 'Chicken',
        img: require('../assets/chickenBuk.png'),
        color: '#FE5656',
      },
    ],
    bestChoise: [
      {
        id: '1',
        img: require('../assets/burgerWithShadow.png'),
        name: 'Burger',
        restaurent: 'Barbeque Nation',
        price: '90',
        color: '#FFF3E5',
        sColor: 'orange',
      },
      {
        id: '2',
        img: require('../assets/pizzaWithShadow.png'),
        name: 'Pizza',
        restaurent: 'Naivedhyam Restaurant',
        price: '150',
        color: '#FFE5E5',
        sColor: 'pink',
      },
      {
        id: '3',
        img: require('../assets/burgerWithShadow.png'),
        name: 'Biryani',

        restaurent: 'Barbeque Nation',
        price: '90',
        color: '#FFF3E5',
        sColor: 'orange',
      },
    ],
    todaySpecial: [
      {
        id: '1',
        img: require('../assets/biryani.png'),
        name: 'Best Veg Dum Biryani',
        price: 100,
      },
      {
        id: '2',
        img: require('../assets/tikka.png'),
        name: 'Chicken Tikka',
        price: 80,
      },
      {
        id: '3',
        img: require('../assets/todayPizza.png'),
        name: 'Pizza',
        price: 90,
      },
      {
        id: '4',
        img: require('../assets/dumBiryani.png'),
        name: 'Chicken Biryani',
        price: 60,
      },
      {
        id: '5',
        img: require('../assets/biryani.png'),
        name: 'Best Veg Dum Biryani',
        price: 100,
      },
    ],
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
