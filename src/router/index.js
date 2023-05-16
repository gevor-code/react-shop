import {createRoutesFromElements, Route} from "react-router";
import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home/Home";
import React from "react";
import About from "../pages/About/About";
import Layout from "../layout/Layout";
import SignIn from "../pages/Register/SignIn";
import SignUp from "../pages/Register/SignUp";
import Admin from "../pages/Admin/Admin";
import Category from "../pages/Admin/Create/Category";
import Product from "../pages/Admin/Create/Product";
import Products from "../pages/Admin/Products/Products";
import CategoryList from "../pages/Admin/CategoryList/CategoryList";



export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="" element={<Layout><Home/></Layout>} />
            <Route path="about" element={<Layout><About/></Layout>} />
            <Route path="signin" element={<Layout><SignIn/></Layout>} />
            <Route path="signup" element={<Layout><SignUp/></Layout>} />
            <Route path="admin" element={<Admin/>}/>
            <Route path="admin/create-category" element={<Category/>}/>
            <Route path="admin/create-product" element={<Product/>}/>
            <Route path="admin/category-list" element={<CategoryList/>}/>
            <Route path="admin/products" element={<Products/>}/>


            <Route path='*' element={<h1 className={"text-xl text-red"}>Page not found</h1>}/>

        </>
    )
);