import {React, useContext} from 'react'
import Items from './Items'
import contents from './contents';
import {CartContext} from './CartContext';
import {NavContext} from './CartContext';
import './styles.css';
function List() {
    
//    const {name}= useContext(CartContext);
  const {showNav,setNav}= useContext(NavContext)
    console.log(contents);
    return (
        <div className="container mx-auto pb-24 px-12">
           <h1 className="text-lg font-bold my-8 ">Products</h1>
           <div  className="grid grid-cols-5 griditem my-8 gap-24 gridcontainer">
              {
                   contents.map((content,index) => {
                    // const generateKey = (pre) => {
                    // content._id=`${ pre }_${ new Date().getTime() }`;
                    //     return `${ pre }_${ new Date().getTime() }`;
                    // }
                    // content._id=index;
                       return (<Items name={content.name} img={content.img} price={content.price} _id={content._id} key={content._id}/>)
                   })
              }
              
           </div>
        </div>
    )
}

export {List,contents}
