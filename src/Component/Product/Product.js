import React, { useEffect, useState } from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props)
    const { name, price, image } = props.pd

    return (

        <div className="col-md-3 products ">
                <div class="card productCard" style={{ width: '18rem' }}>
                    <img  src={image} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">Price:{price}</p>
                        <button className="btn btn-outline-danger">ADD Card</button>
                    </div>
                </div>
                </div>
    );
};

export default Product;