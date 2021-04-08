import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './OrderData.css'

const OrderData = () => {
    const [products, setProducts] = useState([])



    const { orderId } = useParams()

    useEffect(() => {
        fetch('https://cryptic-plateau-96253.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const product = products.find(pd => pd._id === orderId)

 

    return (
        <div className="cardData">
            <table class="table">
                <thead>
                    <tr>
                       
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Wight</th>
                        <th scope="col">Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        
                        <td>{product?.name}</td>
                        <td>{product?.price}</td>
                        <td>{product?.wight}</td>
                        <td>{product?.price}</td>
                    </tr>
                   
                    </tbody>
                  
            </table>
             <button   className="btn btn-success " >ADD Order</button>
    
        </div>
    );
};

export default OrderData;