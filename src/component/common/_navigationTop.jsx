import React from 'react';
import { Link } from 'react-router-dom';
const NavigationTop = () => {
    return ( 
        <div className="heder-bottom">
            <div className="container">
                <div className="logo-nav">
                    <div className="logo-nav-left">
                        <h1><Link to="index.html">Kisan Mandi <span>Direct from farms</span></Link></h1>
                    </div>
                    <div className="logo-nav-left1">
                        <nav className="navbar navbar-default">
                            {/*-- Brand and toggle get grouped for better mobile display -- */}
                            <div className="navbar-header nav_2">
                                <button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>
                            <div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
                                <ul className="nav navbar-nav">
                                    <li className="active"><Link to="index.html" className="act">Home</Link></li>
                                    {/* -- Mega Menu --*/}
                                    <li className="dropdown">
                                        <Link to="#" className="dropdown-toggle" data-toggle="dropdown">Groceries<b className="caret"></b></Link>
                                        <ul className="dropdown-menu multi-column columns-3">
                                            <div className="row">
                                                <div className="col-sm-3  multi-gd-img">
                                                    <ul className="multi-column-dropdown">
                                                        <h6>Fruits</h6>
                                                        <li><Link to="products.html">Lemon</Link></li>
                                                        <li><Link to="products.html">Mangoe</Link></li>
                                                        <li><Link to="products.html">Banana</Link></li>
                                                        <li><Link to="products.html">Guavava</Link></li>
                                                        <li><Link to="products.html"> Papaya </Link></li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-3  multi-gd-img">
                                                    <ul className="multi-column-dropdown">
                                                        <h6>Vegetables</h6>
                                                        <li><Link to="products.html">Potato</Link></li>
                                                        <li><Link to="products.html">Tomato</Link></li>
                                                        <li><Link to="products.html">Onion</Link></li>
                                                        <li><Link to="products.html">Garlic</Link></li>
                                                        <li><Link to="products.html">Ginger</Link></li>
                                                        <li><Link to="products.html">Cucumber</Link></li>
                                                        <li><Link to="products.html">Cauliflower</Link></li>
                                                        <li><Link to="products.html">Red Pepper</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-3  multi-gd-img">
                                                    <Link to="products.html"><img src="images/arhar.png" alt=" " /></Link>
                                                </div>
                                                <div className="col-sm-3  multi-gd-img">
                                                    <Link to="products.html"><img src="images/cauliflower.jpg" alt=" " /></Link>
                                                </div>
                                                <div className="clearfix"></div>
                                            </div>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <Link to="#" className="dropdown-toggle" data-toggle="dropdown">Cereals <b className="caret"></b></Link>
                                        <ul className="dropdown-menu multi-column columns-3">
                                            <div className="row">
                                                <div className="col-sm-3  multi-gd-img">
                                                    <ul className="multi-column-dropdown">
                                                        <h6>Pulses</h6>
                                                        <li><Link to="products.html">Green Gram (Moong Dal)</Link></li>
                                                        <li><Link to="products.html">Lentil (Masoor)</Link></li>
                                                        <li><Link to="products.html">Red Gram (Arhar Dal)</Link></li>
                                                        <li><Link to="products.html">Kidney Beans (Rajma)</Link></li>
                                                        <li><Link to="products.html"> Pea </Link></li>
                                                        <li><Link to="products.html">Cowpea /Lack-eyepea (Lobia)</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-3  multi-gd-img">
                                                    <ul className="multi-column-dropdown">
                                                        <h6>Tea & Coffee</h6>
                                                        <li><Link to="products.html">Green Tea</Link></li>
                                                        <li><Link to="products.html">Ground Coffee</Link></li>
                                                        <li><Link to="products.html">Herbal Tea</Link></li>
                                                        <li><Link to="products.html">Tea</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-3  multi-gd-img">
                                                    <Link to="products1.html"><img src="images/p5.jpg" alt=" " /></Link>
                                                </div>
                                                <div className="col-sm-3  multi-gd-img">
                                                    <Link to="products1.html"><img src="images/p9.jpg" alt=" " /></Link>
                                                </div>
                                                <div className="clearfix"></div>
                                            </div>
                                        </ul>
                                    </li>
                                    <li><Link to="mail.html">Mail Us</Link></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="logo-nav-right">
                        <ul className="cd-header-buttons">
                            <li><Link className="cd-search-trigger" href="#cd-search"> <span></span></Link></li>
                        </ul>
                         {/*-- cd-header-buttons --*/}
                        <div id="cd-search" className="cd-search">
                            <form action="#" method="post">
                                <input name="Search" type="search" placeholder="Search..."/>
                            </form>
                        </div>
                    </div>
                    <div className="header-right2">
                        <div className="cart box_1">
                            <Link to="checkout.html">
                                <h3>
                                    <div className="total">
                                        <span className="simpleCart_total"></span> (<span id="simpleCart_quantity" className="simpleCart_quantity"></span> items)
                                    </div>
                                    <img src="images/bag.png" alt="" />
                                </h3>
                            </Link>
                            <p><Link to="/" className="simpleCart_empty">Empty Cart</Link></p>
                            <div className="clearfix"> </div>
                        </div>
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </div>
        </div>
     );
}
 
export default NavigationTop;