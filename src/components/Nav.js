import { useContext,useState } from 'react'
import { Link } from 'react-router-dom';
import {CartContext} from './CartContext';
import './styles.css';
import {NavContext} from './CartContext';
function Nav() {
    const { cart } = useContext(CartContext);
    // const [showNav,setNav]=useState(false);
   
   const {showNav,setNav}= useContext(NavContext)
    return (
       
        <>
            <nav className=" mx-auto flex items-center justify-between py-4 bg-gray-100 " id={showNav?"navheight":""}>




            {/* <CartContext.Provider value={{shownav}}> */}
                <Link to="/">
                    <img class="logo" style={{ height: 100, width: 100 }} src='/images/logo.png' alt="Pizza House" />
                </Link>
              
                {/* <div className="hamburger">
                   <div className="line"></div>
                   <div className="line"></div>
                   <div className="line"></div>
               </div> */}
               {!(showNav)?
                <ul className=" items-center nav-links visible">
                    <li className="homeitem" ><Link to="/">Home</Link></li>
                    <li className="productitem" id=""><Link to="/products">Products</Link> </li>
                    <li className="cartitem"><Link to="/Cart">Cart</Link></li>
                    <li className="cartimg">                          
                     <div className="items-center cartimg mr-10" style={{ background: "#F59E0D", display: 'flex', padding: '6px 12px', borderRadius: '20px' }}>
                        <span >{cart.totalItems ? cart.totalItems : 0}</span>
                        <img style={{ height: 40, width: 20, marginLeft: '10px' }} className="object-contain h-48 w-full ..." src="/images/cart.png" alt="cart" /></div>
                    </li>
                </ul>
                :
                <ul className=" items-center nav-links" id="hidden">
                    <li className="homeitem" ><Link to="/">Home</Link></li>
                    <li className="productitem" id=""><Link to="/products">Products</Link> </li>
                    <li className="cartitem"><Link to="/Cart">Cart</Link></li>
                    <li className="cartimg">                          
                     <div className="items-center cartimg mr-10" style={{ background: "#F59E0D", display: 'flex', padding: '6px 12px', borderRadius: '20px' }}>
                        <span >{cart.totalItems ? cart.totalItems : 0}</span>
                        <img style={{ height: 40, width: 20, marginLeft: '10px' }} className="object-contain h-48 w-full ..." src="/images/cart.png" alt="cart" /></div>
                    </li>
                </ul>}
               
                    <button onClick={()=>{setNav(!showNav)}} className="navbutton"><i className="fas fa-bars"></i></button>
            </nav>
            
        </>
    )
}

export default Nav;
