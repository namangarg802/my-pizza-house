import React from 'react'
import {Link} from "react-router-dom"
import {List} from './List';
import './styles.css';
function Home() {
    
   
    return (
        <>
       
        <div className="hero py-16 home">
            
           <div style={{display:'flex',alignItems:'center'}}className="container mx-auto">
               <div className="w-1/2 px-12" >
                   <h6 className="text-lg"><em>Are you Hungry?</em></h6>
                   <h1 className="text-3xl md:text-6xl font-bold">Don't Wait</h1>
                   <button className="px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-500
                   hover:bg-yellow-600 ">Order Now</button>
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
