import React from 'react';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import logo from './img/logo.png'

const Login = () => {
    return (
        <div className="container">
            <div className="googleProvider d-flex justify-content-center">
                
            <button > <img style={{width:"20px"}} src={logo} alt=""/>  Create an Google login</button>
            </div>
        </div>
    );
};

export default Login;