import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './AddProduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudDownloadAlt, faPlus, faWrench } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { Button } from 'react-bootstrap';


const AddProduct = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [imageURL, setImageURL] = useState({})
  

 
  const onSubmit = data => {
    const addData ={
      wight: data.wight,
      name: data.name,
      price: data.price,
      image: imageURL

    };
    fetch("https://cryptic-plateau-96253.herokuapp.com/addProducts",{
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

        <div className="">
          <h1>AddProduct</h1>
          <div className="">

            <form onSubmit={handleSubmit(onSubmit)}>
          
              <div className="row fromFiled">
                  <div className="col-6 ">
                  <p>ADD Product</p>
                    <input   type="text" placeholder="Enter your Product name"   {...register("name")}   />
                  </div>
                  <div className="col-6 ">
                    <p>ADD Wight</p>
                  <input type="text" placeholder="Enter Wight"  {...register("wight")}   />
                  </div>
                  <div className="col-6">
                  <p>Add Price</p>
                    <input  type="text"  placeholder="Enter price"  {...register("price")}   />
                  </div>
                  <div className="col-6">
                  <p>  Upload Image</p>
                    <input id="uploadImg" name="" type="file" onChange={handleUploadImage} />
                    <label for="uploadImg">
                    <FontAwesomeIcon icon={faCloudDownloadAlt} />  Upload an image
                    </label>
                  </div>
                  </div>
                  
              <Button style={{width: '5rem'}} className="ms-auto" type="submit" variant="primary">Upload</Button>
            </form>
        
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default AddProduct;