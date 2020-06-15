import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import NavBar from './component/NavBar';
import Home from './component/Home';
import Category from './component/category';
import Cart from './component/cart';
import ProductList from './component/productList';
import ProductDetails from './component/productDetails';
import Dashboard from './component/Dashboard';
import Login from './component/login';
import SignUp from './component/signUp';
import './sass/main.scss';
import Modal from './component/common/modal';
import DefaultPage from './component/default';

function App() {
  return (
    <div className="container">
      {/**header */}
        <header className="fixed-top"><NavBar/></header>

        {/**main content */}
        <div className="row">
              <Switch>
                <Route path='/category' component={Category}/>
                <Route path='/home' component={Home}/>
                <Route path='/product' component={ProductList}/>
                <Route path='/cart' component={Cart}/>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={SignUp}/>
                <Route path='/prddetails' component={ProductDetails}/>
                <Route exact path='/' component={Dashboard}/>
                <Route  component={DefaultPage}/>
              </Switch>
              <Modal/>
        </div>

      {/** footer */}
        <footer className="fixed-bottom footer">
          @copyright kisanmandi 2020-2021
        </footer>
    </div>
  );
}

export default App;
