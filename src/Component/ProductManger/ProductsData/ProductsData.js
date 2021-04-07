import React from 'react';
import './ProductsData.css'

const ProductsData = (props) => {
    const { name, price } = props.pd
    return (
        <div className="listItem">
            <table class="table">
             
                <tbody>
                    <tr>
                        <th scope="row"></th>
                        <td> <strong>{name}</strong>  </td>
                        <td>{price}</td>
                        <td><button className="btn btn-success">Update</button> </td>
                        <td><button  className="btn btn-danger">Delete</button> </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    );
};

export default ProductsData;