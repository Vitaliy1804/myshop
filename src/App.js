import Header from './common/header/Header';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Pages from './pages/Pages';
import Cart from './common/header/cart/Cart';
import Data from './components/flashDeals/Data';
import Sdata from './components/shop/Sdata';
import { useState } from "react";

function App() {
  const { productItems } = Data;
  const {shopItems} = Sdata;
  const [cartItem, setCardItem] = useState([]);

  const addToCart = (product) => {
    const productExist = cartItem.find((item) => item.id === product.id)

    if (productExist) {
      setCardItem(cartItem.map((item) => (item.id === product.id
        ?  { ...productExist, qty:productExist.qty + 1} 
        : item)))
    } else {
      setCardItem([...cartItem, {...product, qty:1}])
    }
  }

  const decreaseQty = (product) => {
    const productExist = cartItem.find((item) => item.id === product.id)

    if (productExist.qty === 1) {
      setCardItem(cartItem.filter((item) => item.id !== product.id))
    } else {
      setCardItem(cartItem.map((item) => (item.id === product.id 
        ? {... productExist, qty: productExist.qty - 1} 
        : item)))
    }
  }

  return (
    <>
    <Router>
      <Header cartItem={cartItem}/>
      <Switch>
        <Route path='/' exact>
          <Pages 
          productItems={productItems} 
          addToCart={addToCart} 
          shopItems={shopItems}
          />
        </Route>
        <Route path='/cart' exact>
          <Cart 
          cartItem={cartItem} 
          addToCart={addToCart} 
          decreaseQty={decreaseQty}
          />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
