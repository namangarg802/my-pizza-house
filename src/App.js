import {React,useState,useEffect} from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import SingleItem from './components/SingleItem';
import {CartContext} from './components/CartContext';
import {NavContext} from './components/CartContext';
import {PriceContext} from './components/CartContext';
import userEvent from '@testing-library/user-event';
import {PaymentForm} from './components/PaymentForm'
import Footer from './components/Footer';
function App() {
const [cart, setCart] = useState(() => {
  return JSON.parse(window.localStorage.getItem("cart")) || { items: {} }
});
  let [showNav,setNav]=useState();
  const [OrderPrice,setOrderPrice]=useState('0');
  useEffect(() => {
    
      const cart=window.localStorage.getItem('cart');
      setNav(false);
      console.log(showNav);
      console.log(JSON.parse(cart));
  }, [])
  useEffect(() => {
    window.localStorage.setItem('cart',JSON.stringify(cart))
  }, [cart]);

  return (
   <>
   <Router>
     <CartContext.Provider value={{cart,setCart}}>
     <NavContext.Provider value={{showNav,setNav}}>
     <PriceContext.Provider value={{OrderPrice,setOrderPrice}}>

     <Nav/>
     <Switch>
       <Route path="/" component={Home} exact></Route>
       <Route path="/products" exact component={Products}></Route>
       <Route path="/products/:id" component={SingleItem}></Route>
       <Route path="/cart" component={Cart} exact></Route>
       <Route path="/PaymentForm" component={PaymentForm} exact></Route>
     </Switch>
     </PriceContext.Provider>
      </NavContext.Provider>
     </CartContext.Provider>
     <Footer/>
   </Router>
   </>
  )
}

export default App;

