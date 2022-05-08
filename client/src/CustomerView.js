import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CustomerView() {

    const [customers, setCustomers] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:8070/customer/')
            .then((res) => {
                console.log(res.data);
                setCustomers(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <div>
            <center>

                <h2>All Customers</h2>
                <table border="1">
                    <tr>
                        <td>Customer ID</td>
                        <td>Customer Name</td>
                        <td>Customer Age</td>
                        <td>Address</td>
                        <td>Mobile No</td>
                        <td>E-mail</td>
                    </tr>
                    {customers.map((val, key) => {
                        return (
                            <tr>
                                <td>{val.id}</td>
                                <td>{val.customerName}</td>
                                <td>{val.customerAge}</td>
                                <td>{val.customerAddress}</td>
                                <td>{val.phone}</td>
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

export default CustomerView;