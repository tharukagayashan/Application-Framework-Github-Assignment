import React, { useState } from 'react';
import axios from 'axios';

const InsertProduct = () => {

    const [productcode, setProductCode] = useState("");
    const [productname, setProductName] = useState("");
    const [productprice, setProductPrice] = useState("");
    const [category, setCategory] = useState("");
    const [brand, setBrand] = useState("");

    const InsertProduct = (e) => {
        e.preventDefault();

        let product = {
            productcode, productname, productprice, category, brand
        }

        axios.post('http://localhost:8070/product/add', product)
            .then((res) => {
                console.log(res.data);
                alert(res.data);
            })
            .catch((err) => {
                console.log(err);
            })

    }

    return (
        <div>


            <center>

                <h1>Insert Product</h1>
                <form onSubmit={InsertProduct}>
                    <table>
                        <tr>
                            <td>Product Code</td>
                            <td><input type="text" name="productcode" onChange={(e) => {
                                setProductCode(e.target.value);
                            }} /></td>
                        </tr>
                        <tr>
                            <td>Product Name</td>
                            <td><input type="text" name="productname" onChange={(e) => {
                                setProductName(e.target.value);
                            }} /></td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td><input type="text" name="productprice" onChange={(e) => {
                                setProductPrice(e.target.value);
                            }} /></td>
                        </tr>
                        <tr>
                            <td>Product Category</td>
                            <td><input type="text" name="category" onChange={(e) => {
                                setCategory(e.target.value);
                            }} /></td>
                        </tr>
                        <tr>
                            <td>Brand</td>
                            <td><input type="text" name="brand" onChange={(e) => {
                                setBrand(e.target.value);
                            }} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="submit" name="submit" value="Insert Item" style={{ width: "100%" }} /></td>
                        </tr>
                    </table>
                </form>

            </center>


        </div>
    );
}

export default InsertProduct;