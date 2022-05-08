import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomerLogin from "./CustomerLogin";
import InsertProduct from "./InsertProduct";
import CustomerView from "./CustomerView";
import CustomerSignup from "./CustomerSignup";
import ProductView from "./ProductView";
import ProductManage from "./ProductManage";
import ShoppingCart from "./ShoppingCart";
import TraderSignup from "./TraderSignup";


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/customer-signup" element={<CustomerSignup/>}></Route>
                <Route path="/" element={<CustomerLogin/>}></Route>
                <Route path="/insert-product" element={<InsertProduct/>}></Route>
                <Route path="/customer-view" element={<CustomerView/>}></Route>
                <Route path="/product-view" element={<ProductView/>}></Route>
                <Route path="/product-management" element={<ProductManage/>}></Route>
                <Route path="/shoppingcart" element={<ShoppingCart/>}></Route>
                <Route path="/trader-signup" element={<TraderSignup/>}></Route>
            </Routes>
        </Router>
    )
}

export default App