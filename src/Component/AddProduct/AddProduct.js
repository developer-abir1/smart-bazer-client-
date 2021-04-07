import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './AddProduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faWrench } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

const AddProduct = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [imageURL, setImageURL] = useState({})
  

 
  const onSubmit = data => {
    const addData ={
      name: data.name,
      price: data.price,
      image: imageURL

    };
    fetch("http://localhost:4500/addProducts",{
      method:"POST",
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(addData)
    })
    .then(res => console.log("post is Done", res))
  }

  
const handleUploadImage = e =>{

  const imageData = new FormData()
  imageData.set('key', 'e805ac140d838f01a27f27aad6e43f4d')
  imageData.append('image', e.target.files[0]);
  axios.post('https://api.imgbb.com/1/upload',imageData)
  .then(res =>{
    setImageURL(res.data.data.display_url)
  })
}



  return (
    <div className="">
      <div className="productManger">
        <div className="btnField">
          <Link style={{ textDecoration: "none", color: "white" }} to="/home">  <h3> Smart Bazer</h3></Link>
          <div className="linkBtn">
            <Link style={{ textDecoration: "none", color: "white" }} to="/productManger">        <h5><FontAwesomeIcon icon={faWrench} />  Product Manger</h5> </Link>
            <Link style={{ textDecoration: "none", color: "white" }} to="/addProduct">    <h5><FontAwesomeIcon icon={faPlus} />   ADD Product</h5> </Link>
          </div>
        </div>

        <div className="addProduct">
          <h1>AddProduct</h1>
          <div className="input-group productItem">

            <form onSubmit={handleSubmit(onSubmit)}>
          
              <div className="uploadBtn">
                <div className="row">
                  <div className="col-md-6">
                    <p>ADD Product</p>
                    <input   placeholder="Enter your Product name"   {...register("name")}   />
                    <p>Add Price</p>
                    <input  placeholder="Enter price"  {...register("price")}   />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="uploadImg">


                    <p>  Upload Image</p>
                    <input name="" type="file" onChange={handleUploadImage} />
                    <br />
                    <br />

                    <button className="btn btn-success" type="submit"> Upload</button>
                  </div>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;