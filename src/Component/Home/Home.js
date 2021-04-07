import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Product from '../Product/Product';
import './Home.css'

const Home = () => {

  const [product, setProduct] = useState([])
  useEffect(() => {
    const url = 'https://cryptic-plateau-96253.herokuapp.com/products'
    fetch(url)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [])

  return (
    <div className="container ">
      <Header></Header>
      <div className="  d-flex justify-content-center searchBtn">
        <input type="text" placeholder="Search Products" />
        <button type="submit" className="btn btn-success">Search</button>
      </div>
      <div className="productsItem">
        <div className="row">
          {
            product.map(pd => <Product pd={pd}></Product>)
          }
        </div>
      </div>

    </div>
  );
};

export default Home;