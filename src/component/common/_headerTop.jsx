import React from 'react';
import { Link } from 'react-router-dom';

const HeaderTop = () => {
    return ( 
        <div className="header-top">
            <div className="container">
                <div className="top-left">
                    <Link to="/"> Help  <i className="glyphicon glyphicon-phone" aria-hidden="true"></i> +0123-456-789</Link>
                </div>
                <div className="top-right">
                    <ul>
                        <li><Link to="/sregister.html"> Become Supplier </Link></li>
                        <li><Link to="/checkout.html"><i className="fa fa-crosshairs"></i> Checkout</Link></li>
                        <li><Link to="/login.html"><i className="fa fa-lock"></i> Login</Link></li>
                        <li><Link to="/registered.html"> Create Account </Link></li>

                    </ul>
                </div>
                <div className="clearfix"></div>
            </div>
        </div>
     );
}
 
export default HeaderTop;