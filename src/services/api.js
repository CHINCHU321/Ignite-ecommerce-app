import StockCake1 from '../assets/images/StockCake-Bohemian Dress 1.jpg';
import StockCake2 from '../assets/images/StockCake-Vintage Dress 2.jpg';

export const fetchProducts = async () => {
  // Replace with actual API call
  return [
    {
      id: '1',
      name: 'StockCake-Bohemian Dress 1',
      description: 'Description for product 1',
      price: 29.99,
      image: StockCake1,
    },
    {
      id: '2',
      name: 'StockCake-Vintage Dress 2',
      description: 'StockCake-Vintage Dress 2',
      price: 39.99,
      image: StockCake2,
    },
    {
      id: '3',
      name: 'Product 3',
      description: 'Description for product 3',
      price: 49.99,
      image: '/path/to/image3.jpg',
    },
    {
      id: '4',
      name: 'Product 4',
      description: 'Description for product 4',
      price: 19.99,
      image: '/path/to/image4.jpg',
    },
    {
      id: '5',
      name: 'Product 5',
      description: 'Description for product 5',
      price: 59.99,
      image: '/path/to/image5.jpg',
    },
    {
      id: '6',
      name: 'Product 6',
      description: 'Description for product 6',
      price: 69.99,
      image: '/path/to/image6.jpg',
    },
    {
      id: '7',
      name: 'Product 7',
      description: 'Description for product 7',
      price: 79.99,
      image: '/path/to/image7.jpg',
    },
    {
      id: '8',
      name: 'Product 8',
      description: 'Description for product 8',
      price: 89.99,
      image: '/path/to/image8.jpg',
    },
    {
      id: '9',
      name: 'Product 9',
      description: 'Description for product 9',
      price: 99.99,
      image: '/path/to/image9.jpg',
    },
    {
      id: '10',
      name: 'Product 10',
      description: 'Description for product 10',
      price: 109.99,
      image: '/path/to/image10.jpg',
    },
    // Add more products as needed
  ];
};
