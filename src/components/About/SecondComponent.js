import React from 'react';

const SecondComponent = () => {
    return (
        <div className="flex justify-around main-container">
            <div
                className="flex flex-col items-center justify-center gap-8 pb-[3rem] lg:flex-row lg:justify-evenly lg:items-start">
                <div className="bgSalad w-full  lg:w-2/5 h-64 lg:h-auto"></div>
                <div
                    className="flex flex-col items-center sm:items-center md:items-center  lg:items-baseline lg:w-3/5  lg:px-0 xl:items-start  mt-6 lg:mt-auto">
                    <span
                        className=" font-[Yellow-tail] tracking-wider italic text-lg sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-[#68A47F] font-bold mb-2">About Us</span>
                    <span
                        className="text-[#274C5B] text-[30px] sm:text-[30px] md:text-[40px] lg:text-[40px] lg:w-[30rem] xl:text-[40px] xl:w-[30rem] font-bold font-[Roboto] tracking-tight mb-6 w-full text-center lg:text-left">We do Creative
Things for Success</span>
                    <span
                        className="font-normal text-base sm:text-lg md:text-lg lg:text-lg xl:text-xl text-gray-500 mb-6 text-center lg:text-left">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</span>
                    <span
                        className="font-normal text-base sm:text-lg md:text-lg lg:text-lg xl:text-xl text-gray-500 mb-6 text-center lg:text-left">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</span>
                    <div className="flex flex-wrap">
                        <div
                            className="flex flex-col gap-8 items-center xl:items-baseline lg:items-baseline md:items-center">
                            <div className="flex items-center mb-6 lg:mb-0">

                                <img src="/assets/images/tractor.svg" className="float-left h-8 lg:h-12 mr-2" alt=""/>
                                <div>
                                    <h1 className="text-[#274C5B] font-[Roboto] text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-extrabold font-sans mb-2">Modern
                                        Agriculture
                                        Equipment
                                    </h1>
                                    <span
                                        className="text-[#525C60] font-[Open Sans] text-base sm:text-lg md:text-lg lg:text-lg xl:text-xl font-normal font-sans">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</span>
                                </div>
                            </div>
                            <div className="flex items-center mb-6 lg:mb-0">
                                <img src="/assets/images/plant.svg" className="float-left h-8 lg:h-12 mr-2" alt=""/>
                                <div>
                                    <h1 className="text-[#274C5B] font-[Roboto] text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-extrabold font-sans mb-2">No
                                        growth hormones are used</h1>
                                    <span
                                        className="text-[#525C60] font-[Open Sans] text-base sm:text-lg md:text-lg lg:text-lg xl:text-xl font-normal font-sans">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</span>
                                </div>
                            </div>

                            <div>
                                <button
                                    className="bg-[#274C5B] hover:bg-[#4b6b36] duration-300 rounded-lg py-4 px-8 text-white text-lg sm:text-xl md:text-xl lg:text-xl xl:text-2xl font-medium font-sans transition duration-500 ease-in-out">Explore
                                    More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondComponent;
