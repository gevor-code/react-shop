import React from 'react';
import Header from "../pages/Header/Header";
import Footer from "../pages/Footer/Footer";

const Layout = ({children}) => {
    return (<div>
        <Header/>
        {children}
        <Footer/>
    </div>);
};

export default Layout;
