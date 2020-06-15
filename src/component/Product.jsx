import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ProductConsumer } from './api/context';

class Product extends Component {
   
    render() { 
        const {id,title,img,inCart,price} = this.props.product;
        return ( 
            
                <ProductConsumer>
                    {(value)=>(
                        <div className="col mb-4 ">
                            <div className="card shadow-sm p-3 mb-5 bg-white">
                        <div onClick={()=>value.openModal(id)}>
                            <img src={img} alt="product" className="card-img-top"/>
                        </div>
                        {/**cart footer */} 
                        <div className="card-body">
                            <h5 className="card-title">
                                {title}
                            </h5>
                            <p className="card-text">
                                <span className="mr-1">$</span>
                                {price}
                            </p>
                            <button className="btn btn-outline-danger btn-sm btn-block text-uppercase mb-2 px-1" 
                                disabled={inCart?true:false}
                                onClick={()=>value.addToCart(id)}>
                                {inCart?(<p className="disabled">in cart</p>
                                ):(<i className="fa fa-shopping-cart 3x">{" "}Add to cart</i>)
                                }
                            </button>
                            <p className="card-text" onClick={()=> value.handleDetail(id)}>
                                <Link to="/prddetails">
                                    <small className="text-muted">view details</small>
                                </Link> 
                            </p>
                            </div>
                        </div>
                    </div>
                    )}
                </ProductConsumer>
         );
    }
}

Product.propTypes ={
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
}
 
export default Product;