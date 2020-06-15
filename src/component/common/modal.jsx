import React from 'react';
import {ProductConsumer} from '../api/context';
import { Link } from 'react-router-dom';

const Modal = (props) => {
    return ( 
      <ProductConsumer>
      {(value)=>{
        const {modalOpen, closeModal} =value;
        const {img,title,price} = value.modalProduct;

        if(!modalOpen){
          return null
        }
        else{
          return(
            <div className="modal-container">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Product Preview</h5>
                  <button type="button" class="close" onClick={()=>closeModal()}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                <div class="modal-body">
                <img src={img} alt="product" className="img-fluid"/>
                          <h5>{title}</h5>
                          <h5 className="text-muted">price :$ {price}</h5>
                </div>

                <div class="modal-footer">
                  <Link to="/product">
                    <button type="button" class="btn btn-secondary" onClick={()=>closeModal()}>Store</button>
                  </Link>
                  <Link to="/cart">
                    <button type="button" class="btn btn-primary" onClick={()=>closeModal()}>Go to Cart</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          );
        }
      }}
      </ProductConsumer>
     );
}
 
export default Modal;