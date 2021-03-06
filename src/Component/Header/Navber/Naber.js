import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Naber = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <Link style={{textDecoration:"none"}} to="/home"><a class="navbar-brand" href="#">Smart Bazer</a></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                            <Link style={{textDecoration:"none"}} to="/home">       <a class="nav-link active" aria-current="page" href="#">Home</a> </Link>
                            </li>
                            <li class="nav-item">
                                <Link style={{textDecoration:"none"}} to="/admin">  <a class="nav-link" href="#">Admin</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link   style={{textDecoration:"none"}} to="/order"><a class="nav-link" href="#">Order</a> </Link>
                            </li>
                            
                            <li class="nav-item">
                                <Link  style={{textDecoration:"none"}} to="/deals"><a class="nav-link" href="#">Deals</a> </Link>
                            </li>
                            <li class="nav-item">
                               <a class="nav-link" href="#"><strong>{loggedInUser.name}</strong></a> 
                            </li>
                            <li class="nav-item">
                               <a class="nav-link" href="#"><img style={{width:"50px"}} src={loggedInUser.photo} alt=""/></a> 
                            </li>
    

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Naber;