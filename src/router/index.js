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
import CategoryEdit from "../pages/Admin/CategoryList/CategoryEdit";
import ProductEdit from "../pages/Admin/Products/ProductEdit";
import Shop from "../pages/Shop/Shop";
import Blog from "../pages/Admin/Create/Blog";
import BlogList from "../pages/Admin/BlogList/BlogList";
import BlogEdit from "../pages/Admin/BlogList/BlogEdit";
import BlogPage from "../pages/Blog/BlogPage";
import BlogInfo from "../pages/Admin/BlogList/BlogInfo";
import ContactUs from "../pages/ContactUs/ContactUs";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="" element={<Layout><Home/></Layout>}/>
            <Route path="about" element={<Layout><About/></Layout>}/>
            <Route path="shop" element={<Layout><Shop/></Layout>}/>
            <Route path="blog" element={<Layout><BlogPage/></Layout>}/>
            <Route path="contact-us" element={<Layout><ContactUs/></Layout>}/>
            <Route path="signin" element={<Layout><SignIn/></Layout>}/>
            <Route path="signup" element={<Layout><SignUp/></Layout>}/>
            <Route path="admin" element={<Admin/>}/>
            <Route path="admin/categories" element={<Category/>}/>
            <Route path="admin/product" element={<Product/>}/>
            <Route path="admin/category-list" element={<CategoryList/>}/>
            <Route path="admin/product-list" element={<Products/>}/>
            <Route path="admin/category-edit/:id" element={<CategoryEdit/>}/>
            <Route path="admin/product-edit/:id" element={<ProductEdit/>}/>
            <Route path="admin/blog" element={<Blog/>}/>
            <Route path="admin/blog-list" element={<BlogList/>}/>
            <Route path="admin/blog-edit/:id" element={<BlogEdit/>}/>
            <Route path="blog-info/:id" element={<Layout><BlogInfo/></Layout>}/>


            <Route path='*' element={<h1 className={"text-xl text-red"}>Page not found</h1>}/>

        </>
    )
);