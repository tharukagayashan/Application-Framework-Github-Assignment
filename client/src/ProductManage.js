import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductManage() {

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

    function deleteProduct(id){
        axios.delete("http://localhost:8070/product/delete/"+id)
        .then(()=>{
            alert("Product deleted");
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return (
        <div>
            <center>

            <h2>Products</h2>
            <table border="1">
                <tr>
                    <td>Product Code</td>
                    <td>Product Name</td>
                    <td>Product Price (Rs)</td>
                    <td>Category</td>
                    <td>Brand</td>
                    <td>Options</td>
                </tr>
                {products.map((val,key) => {
                    return (
                        <tr>
                            <td>{val.productcode}</td>
                            <td>{val.productname}</td>
                            <td>{val.productprice}</td>
                            <td>{val.category}</td>
                            <td>{val.brand}</td>
                            <td><button><a style={{textDecoration:"none"}} href={`/item-edit/update/`+val.itemcode}>Edit</a></button>|<button style={{textDecoration:"none"}} onClick={()=>{deleteProduct(`${val.itemcode}`)}}>Delete</button></td>
                        </tr>
                    )
                })
                }
            </table>

            </center>
        </div>
    );
}

export default ProductManage;