import axios from 'axios';
import React, { useState ,useEffect} from 'react';
import { useParams } from 'react-router-dom';

function ProductUpdate() {

    let {itemcode} = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8070/product/${itemcode}`)
            .then((res) => {
                setProducts(res.data);
                console.log(res.data);
                console.log("Hello");
            })
            .catch((err) => {
                console.log(err);
            })
    },[])

    return (
        <div>
            <h1>Edit page</h1>

          <form onSubmit={sendData}>
                <table>
                    <tr>
                        <td>Item Code</td>
                        <td><input type="text" name="itemcode" onChange={(e) => {
                            setProductCode(e.target.value);
                        }} /></td>
                    </tr>
                    <tr>
                        <td>Item Name</td>
                        <td><input type="text" name="itemname" onChange={(e) => {
                            setProductName(e.target.value);
                        }} /></td>
                    </tr>
                    <tr>
                        <td>Product Price</td>
                        <td><input type="text" name="price" onChange={(e) => {
                            setProductPrice(e.target.value);
                        }} /></td>
                    </tr>
                    <tr>
                        <td>Product Category</td>
                        <td><input type="text" name="itemcategory" onChange={(e) => {
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
                        <td><input type="submit" name="submit" value="Update Item" style={{ width: "100%" }} /></td>
                    </tr>
                </table>
            </form>
        </div>
    );
}

export default ProductUpdate;