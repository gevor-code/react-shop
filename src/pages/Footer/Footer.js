import React from 'react';
import ItemsContainer from "./ItemsContainer";

const Footer = () => {
    return (
        <footer className="text-white">
            <div className="main-container">
                <div className=" grid justify-items-center  sm:grid sm:px-4 sm:py-7 md:flex md:justify-around md:items-center bg-footer">
                    <h1 className="text-3xl lg:text-4xl font-semibold md:w-2/6 lg:leading-normal mb-6 md:mb-0 px-4 sm:px-0">
                        Subscribe to our Newsletter
                    </h1>
                    <div className="flex flex-wrap items-baseline px-4 sm:px-0">
                        <input type="text" placeholder="Your Email Address" className="py-2.5 px-2 sm:w-64 md:w-fit text-gray-800 rounded-2xl focus:outline-none tracking-widest mr-1 sm:mr-5 mb-4 lg:mb-0 display" />
                        <button className="px-5 py-2.5 font-[Poppins] text-white rounded-md bg-[#274C5B] hover:bg-[#46bbe4] duration-300 md:w-fit">
                            Subscribe
                        </button>
                    </div>
                </div>
                <ItemsContainer/>
                <div className="grid  grid-cols-1  gap-10 text-center pt-2 text-gray-400 text-sm pb-8 ">
                 <div>
                    <span>Copyright © <span className="text-black">Organick</span>| Designed by <span className="text-black">VictorFlow</span> Templates - Powered by <span className="text-black"> WebFlow</span>  </span>
                 </div>
                 </div>
            </div>
        </footer>
    );
}

export default Footer;
