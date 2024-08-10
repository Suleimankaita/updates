import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import React from 'react'
import { FaShoppingCart,FaMapMarkerAlt} from 'react-icons/fa'
import Search from '../search';
import { useContext as context } from 'react';
import Datacontext from './Datacontext';
const header = () => {
  const {cart, shows}=context(Datacontext)
  

  return (
    <section className='head'>

        <div className="logo">
            logo
        </div>
        <Search/>

        <h5 className='welcome'>welcome to Gas and / <br />go sing in </h5>
        <div className="delivery">
        <FaMapMarkerAlt className='svg sv'/>
        <h3> Delivery</h3>
        </div>
        <span style={{display:"flex"}}>
        <FaShoppingCart onClick={(()=>shows())} className=' svg sv '/>
        {cart.length}</span>
                
    </section>
  )
}

export default header