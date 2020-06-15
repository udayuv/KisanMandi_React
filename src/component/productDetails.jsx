import React, { Component } from 'react';
import { ProductConsumer } from './api/context';
import { Link } from 'react-router-dom';


class ProductDetails extends Component {
    state = {  }
    render() { 
        return ( 
            <ProductConsumer>
                {value =>{
                    const {id,title,img,company,inCart, price,info} = value.detailProduct
                return(
                    <div className="conatiner py-5">
                        {/**title */}
                        <div className="row">
                            <div className="col-10 mx-auto text-center text-blue text-slanted my-5">
                                <h1>{title}</h1>
                            </div>
                        </div>
                        {/** end title */}
                        <div className="row">
                            <div className="col-10 mx-auto col-md-6 my-3">
                                <img src={img} className="img-fluid" alt="product"/>
                            </div>
                            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <h2>Model: {title}</h2>
                                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                    Made By: {company}
                                </h4>
                                <h4 className="text-blue">
                                    <strong>
                                        price: <span>$</span>
                                        {price}
                                    </strong>
                                </h4>
                                <h4 className="text-capitalize mt-3 mb-0 font-weight-bold">
                                    info: {info}
                                </h4>
                                {/**buttons */}
                                <div className="row">
                                    <div className="col">
                                        <Link to="/product">
                                            <button>Back To Product</button>
                                        </Link>
                                    </div>
                                    <div className="col">
                                        <Link to="/cart">
                                            <button
                                            disabled= {inCart?true:false}
                                            onClick={()=>
                                            {
                                                value.addToCart(id);
                                                value.openModal(id);
                                            }}>
                                            {inCart?"in cart":"Add to cart"}
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
                }}
            </ProductConsumer>
         );
    }
}
 
export default ProductDetails;