import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faSearch, faSquare, faThumbsDown, faWrench } from '@fortawesome/free-solid-svg-icons'
import ProductsData from './ProductsData/ProductsData';
import './ProductManager.css'
import { Spinner } from 'react-bootstrap';

const ProductManager = () => {
    const [productsData, setProductsData] = useState([]);
    document.title ="Admin Panel"

    useEffect(() => {
        const url = `https://cryptic-plateau-96253.herokuapp.com/products`
        fetch(url)
            .then(res => res.json())
            .then(data => setProductsData(data))
    })

    return (
        <div className="">
            <div className="productManger">
                <div className="btnField">
                    <Link style={{ textDecoration: "none", color: "white" }} to="/home">   <h3> Smart Bazer</h3></Link>
                    <div className="linkBtn">
                        <Link style={{ textDecoration: "none", color: "white" }} to="/productManger">        <h5> <FontAwesomeIcon icon={faWrench} />   Product Manger</h5> </Link>
                        <Link style={{ textDecoration: "none", color: "white" }} to="/addProduct">    <h5> <FontAwesomeIcon icon={faPlus} />   ADD Product</h5> </Link>
                    </div>
                </div>
                <div className=" w-100">
                    <h1>Manage Products</h1>
                    <div className="w-100 managePd">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Wight</th>
                                    <th scope="col">Update</th>
                                    <th scope="col">DELETE</th>

                                </tr>
                            </thead>
                            {
                                productsData.length === 0 && <Spinner animation="border" role="status">
                                <span className="sr-only">Loading...</span>
                              </Spinner>
                            }
                            {
                                productsData.map(pd => <ProductsData pd={pd}></ProductsData>)
                            }
                        </table>



                    </div>


                </div>
            </div>

        </div>
    );
};

export default ProductManager;