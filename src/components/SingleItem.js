import React from 'react'
import {useState,useContext} from 'react'
import {useParams,useHistory} from 'react-router-dom'
import {CartContext} from './CartContext';
//  import contents from './contents';
import {contents} from './List';
function SingleItem() {
     const params=useParams();
     console.log(params.id);
     const {cart,setCart}= useContext(CartContext)
    const [added,setAdded]=useState(false);
     const history =useHistory();
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
           setCart(_cart);
           setAdded(true);
           setTimeout(() => {
            setAdded(false);
           }, 1000);
       }
     var item='';
    for(let i=0;i<contents.length;i++)
    {
        if(params.id==contents[i]._id)
        {
            item=contents[i];
            // return;
        }
    }
    console.log(item.name);
    return (
        <div>
          <div className="container mx-auto mt-12">
              <button className="  py-1 px-1 ml-20 rounded-full font-bold" onClick={()=>{ history.goBack()}} >Back</button>
              <div className="flex ml-20 mt-20"><img className="w-40 h-40" src={item.img} alt="pizza" />
              <div className="ml-10">
                  <div className="text-lg font-bold py-2 text-center">{item.name}</div>
                  <div  className="bg-gray-200 py-1 w-20 rounded-full text-sm px-4 text-center">Small</div>
                  <div>₹ 500</div>
                  <button  disabled={added} onClick={(e)=>{addToCart(e,item)}} className={`${added?'bg-green-500':'bg-yellow-500'} py-1 py-1 px-4 rounded-full addbtn font-bold`}>Add to cart</button>
              </div>
          </div>
          </div>
        </div>
    )
}

export default SingleItem
