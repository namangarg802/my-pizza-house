import React from 'react'
import {List} from './List'
import {useHistory} from 'react-router-dom'
import './styles.css';
function Products() {
  const history =useHistory();
    return (
        <div>
             <button className=" py-1 px-1 ml-20 rounded-full font-bold font my-3" onClick={()=>{ history.goBack()}} >Back</button>
          <List/>
        </div>
    )
}

export default Products
