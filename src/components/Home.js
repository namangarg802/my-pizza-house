import React from 'react'
import {Link, Redirect} from "react-router-dom"
import {List} from './List';
import './styles.css';
function Home() {
    
   
    return (
        <>
       
        <div className="hero py-16 home">
            
           <div style={{display:'flex',alignItems:'center'}}className="container mx-auto">
               <div className="w-1/2 px-12" >
                   <h6 className="text-lg"><em>Are you Hungry?</em></h6>
                   <h1 className="text-3xl md:text-6xl font-bold mb-5">Don't Wait</h1>
                   <Link to="/Cart"className="px-6 py-2 rounded-full text-white font-bold bg-yellow-500
                   hover:bg-black hover:font-white">Order Now</Link>
               </div>
               <div className="w-1/2">
                   <img src="/images/pizza.png" alt="pizza" />
               </div>
           </div>
          
        </div>
        <div> <List/></div>
        </>
    )
}

export default Home
