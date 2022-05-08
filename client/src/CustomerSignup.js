import React, { useState } from 'react';
import axios from 'axios';

const CustomerSignup = () => {

    const [id, setID] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [customerAge, setCustomerAge] = useState("");
    const [customerAddress, setCustomerAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const customerRegister = (e) => {
        e.preventDefault();

        let newCustomer = {
            id, customerName, customerAge, customerAddress, phone, email, password
        }

        axios.post('http://localhost:8070/customer/signup', newCustomer)
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


                <h1>Register Page</h1>
                <form onSubmit={customerRegister}>
                    <table>
                        <tr>
                            <td>ID</td>
                            <td><input type="text" name="id" onChange={(e) => {
                                setID(e.target.value);
                            }} /></td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td><input type="text" name="customername" onChange={(e) => {
                                setCustomerName(e.target.value);
                            }} /></td>
                        </tr>
                        <tr>
                            <td>Age</td>
                            <td><input type="text" name="customerAge" onChange={(e) => {
                                setCustomerAge(e.target.value);
                            }} /></td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td><input type="text" name="customerAddress" onChange={(e) => {
                                setCustomerAddress(e.target.value);
                            }} /></td>
                        </tr>
                        <tr>
                            <td>Mobile No</td>
                            <td><input type="text" name="phone" onChange={(e) => {
                                setPhone(e.target.value);
                            }} /></td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td><input type="email" name="email" onChange={(e) => {
                                setEmail(e.target.value);
                            }} /></td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td><input type="password" name="password" onChange={(e) => {
                                setPassword(e.target.value);
                            }} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="submit" name="submit" value="submit" style={{ width: "100%" ,backgroundColor:"blue"}} /></td>
                        </tr>
                    </table>
                </form>


            </center>
        </div>
    );
}

export default CustomerSignup;