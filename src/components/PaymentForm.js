import React,{useState,useEffect, useContext} from 'react'
import {loadStripe} from '@stripe/stripe-js';
import {CartContext} from './CartContext';
import {PriceContext} from './CartContext';
import {Redirect} from 'react-router-dom';
import Noty from 'noty'; 
import './styles.css'
// import { LockClosedIcon } from '@heroicons/react/solid'

export function PaymentForm() {
  const [option,setOption] =useState(true);
  const [redirect,setRedirect] =useState(false);
  const {cart,setCart}= useContext(CartContext)
  const {OrderPrice,setOrderPrice}= useContext(PriceContext)

  const Order=()=>{
    alert("ORDER PLACED SUCCESSFULLY");
    setRedirect(true);
    setCart( { items: {} });
  }

  const change=()=>{
    option?
    setOption(false):setOption(true);
    console.log(option);
    // setTimeout(function() {  
    //   new Noty({
    //     text: "naman",
    //     layout:'topRight',
    //     type:'alert'
    //   }).show();
    // }, 1000);
  }

  useEffect(async () => {const stripe =await loadStripe('pk_test_51JHNVESEytpiDvNgNbsNoaRmkSpxohXbFc0oDN0ZYuUUcQcjFbMJu9OT2RKH71M3BQ3W9ha0oTBvm32Lol9FMpsQ002qOSBEDv')
  const elements=stripe.elements()
  console.log(elements);
 let card= elements.create('card',{style:{hidePostalCode:true}})
 card.mount('#card-element')})
  

  return (
    
        <div  >
          <div style={{background: "#F59E0D"}}className="container paymentpage w-1/2 mt-5 border-2  rounded-3xl border-yellow-100  mx-auto ">
            <div className="w-1/2 mx-auto ">
              <select onChange={change}  className="bg-white  border  w-full mx-auto my-3 px-3 py-1 hover:bg-black hover:text-white hover:shadow-lg hover:border-transparent">
                <option value="cod">Cash on delivery</option>
                <option value="card">Pay with Card</option>
              </select>
              <input type="text" className=" input   border-black border w-full mx-auto my-3 px-3 py-1 hover:bg-black hover:text-white  hover:shadow-lg hover:border-transparent   " placeholder="Enter Your Name"/>
              <input type="email" className="  bg-white placeholder-black  border-black border w-full mx-auto my-3 px-3 py-1 hover:bg-black hover:text-white hover:shadow-lg hover:border-transparent   " placeholder="Enter Email Id"/>
              <input type="address" className=" bg-white placeholder-black  border-black border w-full mx-auto my-3 px-3 py-1 hover:bg-black hover:text-white hover:shadow-lg hover:border-transparent   " placeholder="Enter Shipping Address"/>
              <input type="number" className="bg-white placeholder-black border-black border w-full mx-auto my-3 px-2 py-1 hover:bg-black hover:text-white hover:shadow-lg hover:border-transparent " placeholder="Enter Contact No"/>
               {option?null: <div id="card-element" className="bg-white mx-auto py-2 px-3 my-3 border-black border  hover:shadow-lg hover:border-transparent ">  </div>}
               
            </div>
    
          </div>
          <div className=" w-1/4 mx-auto text-center font-bold  rounded-full mt-5 px-4 py-2 rounded-full  "> Cart Total: <span>{OrderPrice}</span></div>
          <button onClick={()=>{Order()}} className="bg-yellow-500  rounded-full mx-auto flex mt-5 px-4 py-2 rounded-full hover:bg-black hover:text-white hover:shadow-lg hover:border-transparent ">Place Order</button>
            {redirect?<Redirect to="/Cart"/>:""}
        </div>
  );
}

//  export default PaymentForm
