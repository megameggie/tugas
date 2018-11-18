import React, { Component } from 'react';
import logo from '../../elements/picture/logo1.jpg';
import product from '../../product.js';
import register from '../../views/Register/Register.js';
import home from '../../Home'
import addproduct from './AddProduct.js';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import search from "../../elements/search-icon.png";


class Home extends Component {
    render() {
      var h1 = <i> Watch Club </i>;

      return (
        
      <Router>
        <div>
          <div className="header">

            <Link to='/home'><img className="logo" src={logo} alt='Logo'  /></Link>

            <ul className="nav">
              <Link to='/home' className="nav-item"> Home</Link>
              <Link to='/product' className="nav-item"> Product</Link>
              <Link to='/addproduct' className="nav-item"> Add Product</Link>
              <Link to='/register' className="nav-item"> Register</Link>
            </ul>
            
            <input type="text" className="search-input" placeholder="Search..." />
            <img className="search-icon" src={search} alt='Search Icon' />
          </div>

          <Route path ="/" exact component ={product}/>
          <Route path ="/product" component ={product}/>
          <Route path ="/addproduct" component ={addproduct}/>
          <Route path ="/register" component ={register}/>
        </div>
       </Router> 


         
      )
  }
}

export default Home;
