import { createRoutesFromElements, Route} from "react-router";
import { createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import React from "react";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<Home/>}>

            </Route>
            <Route path='*' element={<h1 className={"text2 red"}>Page not found</h1>}/>
        </>
    )
);