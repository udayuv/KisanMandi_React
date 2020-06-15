import React from 'react';
import CartItem from './cartItem';

export default function CartList ({value}){
    const {cart} =value;
    console.log("cart list value ",value);
    return(
        <div className="container-fluid">
            {cart.map(item=>{
                return <CartItem key={item.id} item={item} value={value}/>
            })}
        </div>
    );
}