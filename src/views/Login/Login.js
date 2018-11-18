import React from 'react';
import register from '../Register/Register';
import './Login.css';
import home from '../../Home';
import {BrowserRouter,Route,Link} from 'react-router-dom';

export default class Login extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <div className="Login">
                    <div className="atas">
                        <h2 className="judul">Login</h2>
                    </div>

                    <div className="isi">
                        <div className="group">
                        <label for="username">Username/email</label>
                        <input type="text" placeholder="Masukkan Username atau Email Anda"></input>
                        </div>
                        <div className="group">
                        <label for="pasword">Password</label>
                        <input type="text" placeholder="Masukkan Password"></input>
                        </div>
                        <div className="group">
                            <input type="submit" value="Sign In"></input>
                        </div>
                        <div className="group">
                        <Link to='/home' className="nav-item">
                        Sign In</Link>
                        
                        </div>
                        <div className="group">
                            <p>Create New Account?</p>
                        </div>
                        <div className="group">
                            <input type="submit" value="Register"></input>
                        </div>
                    </div>

                    

                </div>
            </BrowserRouter>
        )
    }
}