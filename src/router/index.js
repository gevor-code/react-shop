import {createRoutesFromElements, Route} from "react-router";
import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home/Home";
import React from "react";
import About from "../pages/About/About";
import Layout from "../layout/Layout";
import SignIn from "../pages/Register/SignIn";
import SignUp from "../pages/Register/SignUp";



export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="" element={<Layout><Home/></Layout>} />
            <Route path="about" element={<Layout><About/></Layout>} />
            <Route path="signin" element={<Layout><SignIn/></Layout>} />
            <Route path="signup" element={<Layout><SignUp/></Layout>} />


            <Route path='*' element={<h1 className={"text-xl text-red"}>Page not found</h1>}/>

        </>
    )
);