import React from 'react';

const SeventhComponent = () => {
    return (
        <div className=" w-full block mt-8 mb-8 ">
            <div className="w-[50%] float-left "><img src="/assets/images/naturepic.svg" width="100%" alt=""/></div>
            <div className="absolute right-0 top-[25%] left-[47%] bg-white rounded-2xl p-20">
                <div className="flex flex-col">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col">
                            <span
                                className="font-[Yellow-Tail] font-bold italic text-4xl text-[#7EB693]">Eco Friendly</span>
                            <span className="font-[Roboto] font-extrabold  text-[#274C5B] text-5xl w-[27rem]">Econis is a Friendly Organic Store</span>
                        </div>

                        <div className="flex flex-col gap-8 items-baseline">
                            <div className="flex flex-col">
                                <span className="font-[Roboto] font-semibold text-2xl text-[#274C5B]">Start with Our Company First</span>
                                <span className="font-[Open Sans] font-normal text-[#525C60] text-lg">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-[Roboto] font-semibold text-2xl text-[#274C5B]">Learn How to Grow Yourself</span>
                                <span className="font-[Open Sans] font-normal text-[#525C60] text-lg">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</span>
                            </div>

                            <div className="flex flex-col">
                                <span className="font-[Roboto] font-semibold text-2xl text-[#274C5B]">Farming Strategies of Today</span>
                                <span className="font-[Open Sans] font-normal text-[#525C60] text-lg">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="clear-both"></div>
        </div>
    );
};

export default SeventhComponent;
