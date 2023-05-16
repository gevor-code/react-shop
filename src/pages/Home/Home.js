import React from 'react';
import FirstComponent from "../../components/Homepage/FirstComponent";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SecondComponent from "../../components/Homepage/SecondComponent";
import ThirdComponent from "../../components/Homepage/ThirdComponent";
import FourComponent from "../../components/Homepage/FourComponent";
import FifthComponent from "../../components/Homepage/FifthComponent";
import Test from "../../components/Homepage/Test";
import SixthComponent from "../../components/Homepage/SixthComponent";
import SeventhComponent from "../../components/Homepage/SeventhComponent";
import EightComponent from "../../components/Homepage/EightComponent";
import NinthComponent from "../../components/Homepage/NinthComponent";


const Home = () => {
    return (
        <main>
            <FirstComponent/>
            <SecondComponent/>
            <ThirdComponent/>
            <FourComponent/>
            <SixthComponent/>
            <EightComponent/>
            <NinthComponent/>
        </main>
    );
};

export default Home;
