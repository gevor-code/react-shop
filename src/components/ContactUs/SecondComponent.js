import React from 'react';

const SecondComponent = () => {
    return (
        <div className="flex justify-around main-container contactDiv">
            <div
                className="flex flex-col items-center justify-center gap-8 pb-[3rem] lg:flex-row lg:justify-evenly lg:items-start">
                <div className="bgBanana w-full xl:w-full sm:p-0 sm:w-full  md:w-2/3  lg:w-2/5 h-64 lg:h-auto"></div>
                <div
                    className="flex flex-col items-center sm:items-center md:items-center  lg:items-baseline lg:w-3/5  lg:px-0 xl:items-start  mt-6 lg:mt-auto main-container">

                    <span
                        className="text-[#274C5B] text-[30px] sm:text-[30px] md:text-[40px] lg:text-[40px] lg:w-[30rem] xl:text-[40px] xl:w-[30rem] font-bold font-[Roboto] tracking-tight mb-6 w-full text-center lg:text-left">We'd love to talk about how we can work together.</span>
                    <span
                        className="font-normal text-base sm:text-lg md:text-lg lg:text-lg xl:text-xl text-gray-500 mb-6 text-center lg:text-left">Simply dummy text of the printing and typesetting industry. Lorem had ceased to
been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</span>
                    <div className="flex flex-wrap">
                        <div
                            className="flex flex-col gap-8 items-center xl:items-baseline lg:items-baseline md:items-center ">
                            <div>
                                <div className="flex items-center mb-6 lg:mb-0">

                                    <img src="/assets/images/phone.png" className="float-left h-8 lg:h-12 mr-2" alt=""/>
                                    <div className="flex flex-col ml-4">
                                        <h1 className="text-[#274C5B] font-[Roboto] text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-sans mb-2">Massage</h1>
                                        <span
                                            className="text-[#525C60] font-[Open Sans] text-base sm:text-lg md:text-lg lg:text-lg xl:text-xl font-normal font-sans">support@organic.com</span>
                                    </div>
                                </div>
                                <div className="flex items-center mb-6 lg:mb-0">
                                    <img src="/assets/images/message.png" className="float-left h-8 lg:h-12 mr-2"
                                         alt=""/>
                                    <div className="flex flex-col ml-4">
                                        <h2 className="text-[#274C5B] font-[Roboto] text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-sans mb-2">Contact
                                            Us</h2>
                                        <span
                                            className="text-[#525C60] font-[Open Sans] text-base sm:text-lg md:text-lg lg:text-lg xl:text-xl font-normal font-sans">+01 123 456 789</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-[17px] ">
                                <div
                                    className="rounded-full flex justify-center items-center h-[60px] bg-[#D3D3D3] w-[60px]">
                                    <img src="/assets/images/inst.svg"
                                         onClick={() => window.open('https://www.instagram.com')} alt=""
                                         className="cursor pointer w-[20px] h-[20px]"/>
                                </div>
                                <div
                                    className="rounded-full flex justify-center items-center h-[60px] bg-[#D3D3D3] w-[60px]">
                                    <img src="/assets/images/Fb.png"
                                         onClick={() => window.open('https://www.facebook.com')} alt=""
                                         className=" cursor-pointer w-[20px] h-[20px]"/>
                                </div>
                                <div
                                    className="rounded-full flex justify-center items-center h-[60px] bg-[#D3D3D3] w-[60px]">
                                    <img src="/assets/images/Twiter.png"
                                         onClick={() => window.open('https://www.twitter.com')} alt=""
                                         className="cursor-pointer w-[20px] h-[20px]"/>
                                </div>
                                <div
                                    className="rounded-full flex justify-center items-center h-[60px] bg-[#D3D3D3] w-[60px]">
                                    <img src="/assets/images/Pintrest.png"
                                         onClick={() => window.open('https://www.pinterest.com/')} alt=""
                                         className="cursor-pointer w-[20px] h-[20px]"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondComponent;
