import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ShoppingCart() {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8070/shoppingcart/")
            .then((res) => {
                setCart(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div>

            <center>
                <h2>Shopping Cart</h2>
                <table border="1">
                    <tr>
                        <td>Product Code</td>
                        <td>Product Name</td>
                        <td>Product Price (Rs)</td>
                        <td>Category</td>
                        <td>Brand</td>
                    </tr>
                    {cart.map((val, key) => {
                        return (
                            <tr>
                                <td>{val.productcode}</td>
                                <td>{val.productname}</td>
                                <td>{val.productprice}</td>
                                <td>{val.brand}</td>
                                <td>{val.email}</td>
                            </tr>
                        )
                    })
                    }
                </table>
            </center>

        </div>
    );
}

export default ShoppingCart;