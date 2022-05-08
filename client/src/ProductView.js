import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwtdecoder from 'jwt-decode';

const ProductView = ()=> {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:8070/product/')
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);


    const customertoken = localStorage.getItem("customertoken");
    var decoder = jwtdecoder(customertoken);
    const email = decoder.email;

    const sendProduct = (productcode, productname, price, brand, email) => {

        axios.post("http://localhost:8070/cart/add", { productcode, productname, price, brand,email})
            .then(() => {
                alert("Added to cart");
            })
            .catch((err) => {
                console.log(err);
            })
            console.log(sendProduct);
    }

    return (
        <div>
            <h2>New Arrivals</h2>
            <table border="1">
                <tr>
                    <td>Product Code</td>
                    <td>Product Name</td>
                    <td>Price (Rs)</td>
                    <td>Category</td>
                    <td>Brand</td>
                    <td>Options</td>
                </tr>
                {products.map((val, key) => {
                    return (
                        <tr>
                            <td>{val.productcode}</td>
                            <td>{val.productname}</td>
                            <td>{val.productprice}</td>
                            <td>{val.category}</td>
                            <td>{val.brand}</td>
                            <td><button onClick={() => sendData(val.productcode, val.productname, val.productprice, val.brand,email)}>Add to cart</button><button>Add to Wishlist</button></td>
                        </tr>
                    )
                })
                }
            </table>
        </div>
    );
}

export default ProductView;