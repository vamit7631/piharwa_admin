import React, { Component } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import SignInAndSignUpPage from './Pages/signin/signin'
import SignUp from './Components/Signup/signup.component'
import DashBoardPage from './Pages/dashboard/dashboard';
import BuyerComponentPage from './Pages/buyers/buyers';
import ProductList from './Components/Products/productlist.component';
import Products from './Components/Products/product.component';
import ProductEdit from './Components/Products/productEdit.component';

function App() {
  const loggedIn = sessionStorage.getItem("accessToken");
  return (
    <Routes>
      <Route path="/" element={<SignInAndSignUpPage />} />
      <Route path="/dashboard" element={<DashBoardPage />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/" element={<SignInAndSignUpPage />} />
      <Route path="/buyers" element={<BuyerComponentPage />} />
      <Route path="/add-new" element={<Products />} />
      <Route path="/products/update/:id" element={<ProductEdit />} />
      {/* <Route path="/" element={<SignInAndSignUpPage />} /> */}
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
