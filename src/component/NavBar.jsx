import React from 'react';
import {Link} from 'react-router-dom'


const NavBar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top">
            <Link className="navbar-brand" to="/" >Kisan Mandi </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <Link className="nav-item nav-link active" to="/home">Home </Link>
                <Link className="nav-item nav-link active" to="/">Dashoboard </Link>
                <Link className="nav-item nav-link active" to="/category">category </Link>
                <Link className="nav-item nav-link active" to="/product">product </Link>
                <Link className="nav-item nav-link active" to="/cart">Cart </Link>
                <Link className="nav-item nav-link active" to="/login">Login </Link>
                <Link className="nav-item nav-link active" to="/register">Sign Up </Link>
                </div>
            </div>
        </nav>
     );
}
 
export default NavBar;