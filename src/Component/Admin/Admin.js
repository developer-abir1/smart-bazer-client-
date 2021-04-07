import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWrench, faPlus } from '@fortawesome/free-solid-svg-icons'

const Admin = () => {

    return (
        <div className="">
            <div className="productManger">

                <div className="btnField">
                    <Link style={{ textDecoration: "none", color: "white" }} to="/home">   <h3> Smart Bazer</h3></Link>
                    <div className="linkBtn">
                        <Link style={{ textDecoration: "none", color: "white" }} to="/productManger">       <h5> <FontAwesomeIcon icon={faWrench} />  Product Manger</h5> </Link>
                        <Link style={{ textDecoration: "none", color: "white" }} to="/addProduct">    <h5> <FontAwesomeIcon icon={faPlus} />  ADD Product</h5> </Link>
                    </div>

                </div>
                <div className="">
          
                </div>

            </div>
        </div>
    );
};

export default Admin;