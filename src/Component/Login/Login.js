import React, { useContext, useState } from 'react';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import logo from './img/logo.png';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './FirebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if(firebase.app.length > 0){
    firebase.initializeApp(firebaseConfig)
}




const Login = () => {
   
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [users, setUsers] = useState({})
    
   const history = useHistory();
   const location = useLocation(); 
   const { from } = location.state || { from: { pathname: "/" } };
  
    const provider = new firebase.auth.GoogleAuthProvider();
 const handleGoogleSingIn = () =>{
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      var credential = result.credential;
      var token = credential.accessToken;
      const  {displayName, email, photoURL } = result.user;
      const userDisplay = {name: displayName , email, photo: photoURL}
      setLoggedInUser(userDisplay);
      history.replace(from)
  
      
    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      console.log(errorCode, errorMessage, email, credential)
    });
 }



    return (
        <div className="container">
            <div className="googleProvider d-flex justify-content-center">
                
            <button onClick={handleGoogleSingIn} > <img style={{width:"20px"}} src={logo} alt=""/>  Create an Google login</button>

            </div>

      
        </div>
    );
};

export default Login;