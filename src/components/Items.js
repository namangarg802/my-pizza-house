import {useState,useContext} from 'react'
import {Link} from 'react-router-dom'
import {CartContext} from './CartContext';

import './styles.css';
function Items(props) {
   const {cart,setCart}= useContext(CartContext)
    const [added,setAdded]=useState(false);
   const {products}=props;
//    let added="false"
   const addToCart=(e,product)=>{
    //    added="true"
       let _cart={...cart}
       if(!_cart.items)
       {
           _cart.items={}
       }
       if(_cart.items[product._id]){
        _cart.items[product._id]=_cart.items[product._id] + 1;
       }else{
        _cart.items[product._id]=1
       }
       if(!_cart.totalItems){
           _cart.totalItems=0
       }
       _cart.totalItems++;
      
       console.log(_cart);
       setCart(_cart);
       setAdded(true);
       setTimeout(() => {
        setAdded(false);
       }, 1000);

    //    const cart={
    //        item:{
    //            product._id
    //        }
    //    }

   }
    return (
        <div>
            <Link to={`/products/${props._id}`}>
       
             <img className="w-40 h-40 productimg" src ={props.img} alt="pizza2" /></Link>
             <div >
             <h2 className="text-lg font-bold py-2 text-center font">{props.name}</h2>
             <div className="bg-gray-200 py-1 w-20 rounded-full px-4  text-center"> Small</div>
             
             </div>
             <div className="flex items-center mt-4 justify-between">
                 <b>₹{props.price}</b>
                 <button disabled={added} className={`${added ? 'bg-green-500':'bg-yellow-500 addbtn'} py-1  
                  hover:text-white  py-1 px-4 rounded-full font-bold`} onClick={(e)=>{addToCart(e,props)}}>ADD{added ? 'ED':''}</button>
             </div>

            
         
  </div>
    )
}

export default Items
