import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = (props) => {
    console.log(props)
    const { _id, name, price, image , wight } = props.pd

    

    return (

        <div className="col-md-3 products ">
                <div class="card productCard" style={{ width: '18rem' }}>
                    <img  src={image} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">wight:  {wight}</p>
                        <p class="card-text">Price: $   {price}</p>
                  <Link to={`/orderData/${_id}`}> <button  className="btn btn-outline-danger">ADD Card</button> </Link> 
                    </div>
                </div>
                </div>
    );
};

export default Product;