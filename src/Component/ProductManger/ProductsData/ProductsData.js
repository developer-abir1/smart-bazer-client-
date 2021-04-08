import React from 'react';
import './ProductsData.css'

const ProductsData = (props) => {
    const { _id, wight, name, price } = props.pd

    const handleDelete = () =>{
     const url = `https://cryptic-plateau-96253.herokuapp.com/delete/${_id}`
     fetch(url,{
           method:'DELETE'
     })
     .then(res => res.json())
     .then(result => {
         console.log("delete successfully" , result)
     })
    }
    return (
                     <tbody>
                       <tr> 
                        <td> <strong>{name}</strong>  </td>
                        <td>$ {price}</td>
                        <td> {wight}  </td>
                        <td><button className="btn btn-outline-success">Update</button> </td>
                        <td><button onClick={handleDelete} className="btn btn-outline-danger">DELETE</button> </td>
                        
                    </tr>
                </tbody>
           
    );
};

export default ProductsData;