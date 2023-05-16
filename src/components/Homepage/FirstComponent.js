import React from 'react';

const FirstComponent = () => {
    return (
        <div className="bg-food ">
            <div className="grid flex-col flex-wrap justify-items-center p-0 pt-[10rem] gap-2 sm:sm:text-left sm:grid sm:justify-items-center md:grid md:justify-items-start md:p-44 md:pt-[10rem] lg:grid lg:justify-items-start lg:p-44 xl:grid xl:justify-items-start ">
                <h1 className="font-[Yellow-tail] italic text-4xl font-normal text-[#68A47F]">100% Natural Food</h1>
                <span className="text-[#274C5B] text-2xl sm:text-3xl md:w-[470px] md:text-3xl lg:w-[470px] lg:text-4xl xl:w-[470px] xl:text-6xl  font-extrabold  font-normal">Choose the best healthier way of life</span>
                <div>
                    <button className="bg-[#EFD372] rounded-xl p-2 hover:bg-[#ec8973] hover:duration-500"> <span className="text-xs text-[#274C5B] font-bold p-5 ">Explore Now</span></button>
                </div>
            </div>
        </div>
    );
};

export default FirstComponent;
