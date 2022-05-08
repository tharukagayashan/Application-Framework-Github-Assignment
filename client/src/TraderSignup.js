import React, { useState } from 'react';
import axios from 'axios';

function TraderSignup() {

    const [id, setID] = useState("");
    const [name, setName] = useState("");
    const [phone,setPhone] = useState("");
    const [email,setEmail] = useState("");

    const sendData = (e) => {
        e.preventDefault();

        let trader = {
            id, name,phone, email
        }

        axios.post('http://localhost:8070/trader/register', trader)
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
            <h1>Trader Register Page</h1>
            <form onSubmit={sendData}>
                <table>
                    <tr>
                        <td>ID</td>
                        <td><input type="text" name="id" onChange={(e) => {
                            setID(e.target.value);
                        }} /></td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td><input type="text" name="name" onChange={(e) => {
                            setName(e.target.value);
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
                        <td></td>
                        <td><input type="submit" name="submit" value="submit" style={{ width: "100%" }} /></td>
                    </tr>
                </table>
            </form>
        </div>
    );
}

export default TraderSignup;