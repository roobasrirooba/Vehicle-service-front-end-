import './AppList.css';
import { useState } from 'react';
import Header from "./Header";
import CartList from './CartList';
import ProductList from './ProductList';

function AppList() {

  const [product, setProduct] = useState([
    
   
    {
      url: 'https://i.pinimg.com/564x/10/e8/67/10e8670e841f87c5f915d788b3d62db4.jpg',
      name: 'Door',
      category: 'Car Door',
      seller: 'MS Doors',
      price: 8000
    },
    
    
    
    {
      url: 'https://autolovins.com/wp-content/uploads/2021/02/car-battery.jpg?ezimgfmt=ng:webp/ngcb1',
      name: 'Battery',
      category: 'Car Battery',
      seller: 'WRK Services',
      price: 4500
    },
    {
      url: 'https://autolovins.com/wp-content/uploads/2021/02/car-Alternator.jpg?ezimgfmt=ng:webp/ngcb1',
      name: 'Alternator',
      category: 'Car Alternator',
      seller: 'RMW Seller ',
      price: 9000
    },
    
    {
      url: 'https://autolovins.com/wp-content/uploads/2021/02/Car-Mirror.jpg?ezimgfmt=ng:webp/ngcb1',
      name: 'Mirror',
      category: 'Car Mirror',
      seller: 'ABS Ltd',
      price: 1200
    },
    {
      url: 'https://autolovins.com/wp-content/uploads/2021/02/car-Engine.jpg?ezimgfmt=ng:webp/ngcb1',
      name: 'Engine',
      category: 'Car Engine',
      seller: 'KS Services',
      price: 45000
    },
    {
      url: 'https://autolovins.com/wp-content/uploads/2021/02/Car-Wheels-Autolovins.com_.jpg?ezimgfmt=ng:webp/ngcb1',
      name: 'Wheel',
      category: 'Car Wheel',
      seller: ' Siyana Ltd',
      price: 5599
    },
    
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>
      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }


    </div>
    
  );
}

export default AppList;