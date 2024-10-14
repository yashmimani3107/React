import React from 'react'
import { useSelector } from 'react-redux'
import ItemList from './ItemList';

const cartsubs = () =>{
        const cartsubs = useSelector((store) =>store.cart.items); 
}

const Cart = () => {
  return (
    <div className='text-center m-4 p-4'>
        <h1 className='font-bold text-2xl'>Cart</h1>
        <div>
            <ItemList items={cartsubs}/>
        </div>
    </div>
  )
}

export default Cart