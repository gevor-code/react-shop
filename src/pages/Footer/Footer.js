import React, {useEffect, useState} from 'react';
import ItemsContainer from "./ItemsContainer";

const Footer = () => {
    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        setShowButton(window.pageYOffset > 1800);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <footer className="text-white mt-8">
            <div className="main-container">
                <div
                    className="grid justify-items-center mb-[70px] sm:grid sm:px-4 sm:py-0 md:py-7 lg:py-7 xl:py-7 md:flex md:justify-around md:items-center bg-footer">
                    <h1 className="text-[1.3rem]  sm:text-2xl md:text-[2rem] md:leading-8 lg:text-4xl xl:text-4xl font-semibold md:w-2/6 lg:leading-normal mb-6 mt-6 md:mb-0 md:mt-0 px-4 sm:px-0">
                        Subscribe to our Newsletter
                    </h1>
                    <div className="flex flex-wrap items-baseline px-4 sm:px-0 ">
                        <input type="text" placeholder="Your Email Address"
                               className="py-2.5 px-2 sm:w-64 md:w-fit text-gray-800 rounded-2xl focus:outline-none tracking-widest mr-1 sm:mr-5 mb-4 lg:mb-0 display"/>
                        <button
                            className="px-5 py-2.5 font-[Poppins] text-white rounded-md bg-[#274C5B] hover:bg-[#46bbe4] duration-300 md:w-fit">
                            Subscribe
                        </button>
                    </div>
                </div>
                <ItemsContainer/>
                <div
                    className="grid grid-cols-1  text-center pb-8 text-gray-400 text-sm sm:grid-cols-3 md:grid-cols-3">
                    <div>
                        <span>Designed by <span className="text-black">VictorFlow</span></span>
                    </div>
                    <div>
                        <span>Powered by <span className="text-black">WebFlow</span></span>
                    </div>
                    <div>
                        <span>© <span className="text-black">Organick</span> All Rights Reserved</span>
                    </div>
                </div>
            </div>
                {showButton && (
                    <button onClick={scrollToTop} className="back-to-top">&#8679;</button>)}

        </footer>


    );
}

export default Footer;
