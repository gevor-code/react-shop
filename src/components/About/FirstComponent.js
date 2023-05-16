import React from 'react';

const FirstComponent = () => {
    return (
        <div className="bgAbout flex  h-[280px] sm:h-[300px] md:h-[350px] lg:h-[350px] xl:h-[420px]  my-16 ">
            <div className=" main-container flex ">

                <div className="flex justify-around flex-col items-center gap-2 text-center sm:flex-col sm:items-center sm:text-center sm:gap-4 md:justify-around md:flex lg:flex-col xl:justify-around xl:flex-row ">
                    <div className="flex flex-col ">
                        <span className="text-[#274c5b] font-[Roboto] font-extrabold text-3xl  sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl">About Us</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstComponent;
