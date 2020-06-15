import React, { Component } from 'react';
import Product from './Product';
import Title from './title';
import { ProductConsumer } from './api/context';
import NoticeCard from './common/notice';

class ProductList extends Component {
    
    render() { 
        return ( 
            <React.Fragment>
                <div className="mt-5">
                    <Title name="our" title="product"/>
                    </div>
                <div className="row">
                    <div className="col-8">
                        <div className="row row-cols-1 row-cols-md-3">
                            <ProductConsumer>
                                {
                                    (value)=>{
                                        return value.products.map(product=>{
                                            return <Product key={product.id} product={product}/>;
                                        })
                                    }
                                }
                            </ProductConsumer>
                            </div>
                    </div>
                    <div className="col-4"> 
                        <NoticeCard/>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default ProductList;