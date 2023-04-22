import React from 'react';
import FirstComponent from "../../components/Homepage/FirstComponent";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Home = () => {
    return (
        <main>
            <Header/>
            <FirstComponent/>
            {/*<div className="main-container">*/}
            {/*    <div className="flex gap-x-2 sm:gap-x-4">*/}
            {/*        <span>fdsfdsfdsf</span>*/}
            {/*        <span>fdsfdsfdsf</span>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <Footer/>
        </main>
    );
};

export default Home;
