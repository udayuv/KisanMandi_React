import React from 'react';

const CartItem =({item, value})=>{
    console.log("item value: ",item);
    const {id, title, img, price, total, count} =item;
    const {increment, decrement, removeItem} = value;
     
    return(
        <div className="row my-1 text-capitalize text-center shadow-sm">
            <div className="col-10 mx-auto col-lg-2">
                <img 
                src={img} 
                style={{width:"5rem",height:"5rem"}}
                alt="" 
                className="img-fluid"/>
            </div>

            <div className="col-10 mx-auto col-lg-2 pt-3">
               <span className="d-lg-none">product :</span>
               {title}
            </div>

            <div className="col-10 mx-auto col-lg-2 pt-3">
               <span className="d-lg-none">price :</span>
               {price}
            </div>

            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 pt-3">
               <div className="d-flex justify-content-center">
                   <div>
                       <span className="btn btn-black mx-1" onClick={()=>decrement(id) }>-</span>
                   </div>
                   <span className="btn btn-black mx-1">{count}</span>
                   <div>
                       <span className="btn btn-black mx-1" onClick={()=>increment(id) }>+</span>
                   </div>
               </div>
            </div>

            <div className="col-10 mx-auto col-lg-2 pt-3">
              <div className="cart-icon" >
                  <i className="fa fa-trash" onClick={()=>removeItem(id)}></i>
              </div>
            </div>

            <div className="col-10 mx-auto col-lg-2 pt-3">
               <strong>total : ${total}</strong>
            </div>

        </div>
    );
}

export default CartItem;