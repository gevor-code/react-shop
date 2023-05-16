import React from 'react';

const FifthComponent = () => {
    return (
        <div className="bg-[#274c5b]">
            <div className=" main-container pb-6 pt-6">

                <div
                    className=" mt-[188px] flex justify-around flex-col items-center gap-2 text-center sm:flex-col sm:items-center sm:text-center sm:gap-4 md:justify-around md:flex lg:flex-col xl:justify-around xl:flex-row ">
                    <div className="flex flex-col ">
                        <span className="text-[#7EB693] font-[Yellow-Tail] italic text-3xl font-normal">About Us</span>
                        <span
                            className="text-white font-[Roboto] font-extrabold text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl">What We Offer for You</span>
                    </div>
                </div>


                <div
                    className=" mb-[188px] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-14 xl:grid-cols-4 gap-6 justify-items-center mt-8 ">

                    <div className="flex items-center gap-4 flex-col">
                        <div className="max-w-sm overflow-hidden shadow-lg rounded-[2rem]  bg-[#f9f8f8]  ">
                            <img
                                className="xl:w-[337px] xl:h-[239px] md:w-[full] md:h-[280px] sm:w-[337px] sm:h-[280px]"
                                src="/assets/images/spicy.svg" alt=""/>
                        </div>
                        <div className="text-xl gap-4 text-white font-semibold leading-6 font-[Roboto] ">Spicy</div>
                    </div>


                    <div className="flex items-center gap-4 flex-col">
                        <div className="max-w-sm overflow-hidden shadow-lg rounded-[2rem]  bg-[#f9f8f8]  ">
                            <img className="xl:w-full xl:h-[234px] md:w-[full] md:h-[280px] "
                                 src="/assets/images/feesd.svg" alt=""/>
                        </div>
                        <div className="text-xl gap-4 text-white font-semibold leading-6 font-[Roboto] ">Nuts & Feesd
                        </div>
                    </div>

                    <div className="flex items-center gap-4 flex-col">
                        <div className="max-w-sm overflow-hidden shadow-lg rounded-[2rem]  bg-[#f9f8f8]  ">
                            <img
                                className=" w-[339px] h-[285px] xl:w-[314px] xl:h-[234px] md:w-[314px] md:h-[280px] sm:w-[339px] sm:h-[285px]"
                                src="/assets/images/granade.svg" alt=""/>
                        </div>
                        <div className="text-xl gap-4 text-white font-semibold leading-6 font-[Roboto] ">Fruits</div>
                    </div>

                    <div className="flex items-center gap-4 flex-col">
                        <div className="max-w-sm overflow-hidden shadow-lg rounded-[2rem]  bg-[#f9f8f8]  ">
                            <img
                                className=" w-[341px] h-[280px] xl:w-[363px] xl:h-[234px] md:w-[313px] md:h-[280px] sm:w-[341px] sm:h-[280px]"
                                src="/assets/images/veg.svg" alt=""/>
                        </div>
                        <div className="text-xl gap-4 text-white font-semibold leading-6 font-[Roboto] ">Vegetable</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FifthComponent;
