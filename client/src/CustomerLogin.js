import React, { useState } from 'react';
import axios from 'axios';

const CustomerLogin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const sendData = (e) => {
        e.preventDefault();

        let customer = {
            email, password
        }

        axios.post('http://localhost:8070/customer/login', customer)
            .then((res) => {
                localStorage.setItem("customertoken", res.data);
                window.location.href = "/product-view";
            })
            .catch((err) => {
                console.log(err);
            })

    }

    return (
        <div>

            <center>

                <h1>Login Page</h1>
                <form onSubmit={sendData}>
                    <table>


                        <tr>
                            <td>Email</td>
                            <td><input type="email" name="email" onChange={(e) => {
                                setEmail(e.target.value);
                            }} /></td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td><input type="text" name="password" onChange={(e) => {
                                setPassword(e.target.value);
                            }} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="submit" name="submit" value="Login" style={{ width: "100%" }} /></td>
                        </tr>
                    </table>
                </form>

            </center>

        </div>
    );
}

export default CustomerLogin;