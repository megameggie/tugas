import React from 'react';
import fb from './Image/fb.png';
import gg from './Image/g+.jpg';
import logo from '../../elements/picture/logo1.jpg';
import product from '../../product.js';
import register from './Register.js';
import home from '../../Home'
import addproduct from '../../views/AddProduct/AddProduct.js';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import search from "../../elements/search-icon.png";

export default class Register extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            name :'',
            email :'',
           phone:'',
            address :'',
        }
    }
    render(){
        return(
              <div className="header">
             <Router>
             <Link to='/home'><img className="logo" src={logo} alt='Logo'  /></Link>

            <ul className="nav">
              <Link to='/home' className="nav-item"> Home</Link>
              <Link to='/product' className="nav-item"> Product</Link>
              <Link to='/addproduct' className="nav-item"> Add Product</Link>
              <Link to='/register' className="nav-item"> Register</Link>
            </ul>
            
            <input type="text" className="search-input" placeholder="Search..." />
            <img className="search-icon" src={search} alt='Search Icon' />
          
               <Route path ="/" exact component ={product}/>
          <Route path ="/product" component ={product}/>
          <Route path ="/addproduct" component ={addproduct}/>
          <Route path ="/register" component ={register}/>
        
            </Router>
            </div>
        
            
            <div className="Register">
                <h1>Register</h1>
            <div className="input">
            <p>Name : <input type="text" name="name" placeholder="Enter Your Name" onChange ={(ev)=> this.setState({status:ev.target.value})}/> </p>
             <p>email : <input type="email" name="email" placeholder="Enter Your email" onChange ={(ev)=> this.setState({status:ev.target.value})} /> </p>
            <p>Phone: <input type="text" name="phone" placeholder="Enter Your phone number" onChange ={(ev)=> this.setState({status:ev.target.value})} /> </p>
             <p>address: <input type="text" name="address" placeholder="Enter Your address" onChange ={(ev)=> this.setState({status:ev.target.value})}/> </p>
                 
            </div>
            </div>
             
            
        )
    }
}