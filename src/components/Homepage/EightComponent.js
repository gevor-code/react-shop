import React from 'react';

const EightComponent = () => {
    return (
        <div className="bg-[#f1f8f4]">
            <div className="flex justify-center">
                <div
                    className="grid  grid-cols-1 m:grid-cols-1  md:grid-cols-1 mt-[3rem] mb-28 sm:justify-items-stretch lg:grid-cols-3 xl:grid-cols-3 gap-8 ">

                    <div className="relative">

                        <img src="/assets/images/juice.svg" alt=""/>
                        <div className="absolute bg-white rounded-2xl  bottom-1/2 left-1/2 -translate-x-1/2  ">
                            <h2 className="font-[Roboto] font-semibold text-[#274C5B] text-[20px] mx-8 my-4 sm:text-[23px] md:text-[23px] lg:text-[21px] xl:text-[21px] text-[#274C5B] sm:mx-12 sm:my-4 md:mx-12 md:my-4 lg:mx-4 lg:my-4 xl:mx-8 xl:my-8 ">Organic Juice</h2>
                        </div>
                    </div>

                    <div className="relative">
                        <img src="/assets/images/food.svg" alt=""/>
                        <div className="absolute bg-white rounded-2xl  bottom-1/2 left-1/2 -translate-x-1/2  ">
                            <h2 className="font-[Roboto] font-semibold text-[#274C5B] text-[20px] mx-8 my-4 sm:text-[23px] md:text-[23px] lg:text-[21px] xl:text-[21px] text-[#274C5B] sm:mx-12 sm:my-4 md:mx-12 md:my-4 lg:mx-4 lg:my-4 xl:mx-8 xl:my-8 ">Organic Food</h2>
                        </div>
                    </div>

                    <div className="relative">
                        <img src="/assets/images/cookies.svg" alt=""/>
                        <div className="absolute bg-white rounded-2xl  bottom-1/2 left-1/2 -translate-x-1/2  ">
                            <h2 className="font-[Roboto] font-semibold text-[#274C5B] mx-8 my-4 text-[20px] sm:text-[23px] md:text-[23px] lg:text-[21px] xl:text-[21px] text-[#274C5B] sm:mx-12 sm:my-4 md:mx-12 md:my-4 lg:mx-4 lg:my-4 xl:mx-8 xl:my-8 ">Nuts Cookies</h2>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default EightComponent;
