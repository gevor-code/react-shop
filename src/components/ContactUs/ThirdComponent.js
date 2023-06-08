import React from 'react';

const ThirdComponent = () => {
    return (
        <div className="main-container divContact pb-[4rem] relative ">
            <div className="bgContactDiv mt-[4rem]"></div>
            <div
                className="  containerDiv shadowDiv  p-[2rem] absolute rounded-[2rem] bg-[white]  lg:top-[13%] lg:left-[39%] lg:w-[540px] lg:h-[500px] xl:top-[8%] xl:left-[47%]  xl:w-[600px] xl:h-[550px] 2xl:w-[600px] 2xl:h-[550px] 2xl:top-[9%] 2xl:left-[47%]">
                <div className="divPart">
                    <h1 className="font-[YellowTail] italic font-normal text-[36px] text-[#7EB693]">Location</h1>
                    <h2 className=" textDiv font-extrabold text-[#274C5B] font-[Roboto] text-[50px]">Our Farms</h2>
                    <span className=" w-[350px] font-[OpenSans] font-normal text-[18px] text-[#525C60]">Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using.</span>
                </div>
                <div className="flex flex-col pt-[2rem] xl:gap-[2rem]">
                    <div className="flex items-center mb-6 lg:mb-0">
                        <img src="/assets/images/location.png" className="float-left h-8 lg:h-12 mr-2"
                             alt=""/>
                        <div className="flex flex-col ml-4">
                            <h2 className="text-[#525C60] font-[Open Sans] text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-sans mb-2">New
                                York, USA:</h2>
                            <span
                                className="text-[#525C60] font-[Open Sans] text-base sm:text-lg md:text-lg lg:text-lg xl:text-xl font-normal font-sans"> Park Avenue New York,</span>
                            <span
                                className="text-[#525C60] font-[Open Sans] text-base sm:text-lg md:text-lg lg:text-lg xl:text-xl font-normal font-sans">  New York 10171</span>
                        </div>
                    </div>

                    <div className="flex items-center mb-6 lg:mb-0">
                        <img src="/assets/images/location.png" className="float-left h-8 lg:h-12 mr-2"
                             alt=""/>
                        <div className="flex flex-col ml-4">
                            <h2 className="text-[#525C60] font-[Open Sans] text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-sans mb-2">London,UK:</h2>
                            <span
                                className="text-[#525C60] font-[Open Sans] text-base sm:text-lg md:text-lg lg:text-lg xl:text-xl font-normal font-sans"> 30 Stamford Street,</span>
                            <span
                                className="text-[#525C60] font-[Open Sans] text-base sm:text-lg md:text-lg lg:text-lg xl:text-xl font-normal font-sans"> London SE1 9LQ</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThirdComponent;
