import React from 'react';

const FourComponent = () => {
    return (
        <div className="main-container">
            <div className="flex items-center  mt-[177px] gap-2 flex-col text-center ">
                <span className="font-[Yellow-tail] tracking-wider italic text-lg sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-[#68A47F] font-bold mb-2  ">Team</span>
                <h1 className="text-[#274C5B] font-[Roboto] text-5xl font-extrabold leading-10 ">Our Organic Experts</h1>
                <span className=" mt-[16px] text-center font-[Open-Sans] font-normal text-[#525C60]  lg:w-[852px] lg:h-[60px] lg:text-[17px] xl:w-[852px] xl:h-[60px] text-[18px] ">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</span>
            </div>

            <div className=" mb-[177px] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:grid-cols-3 gap-6 justify-items-center mt-8 ">
                <div>
                    <img className="w-[729px] rounded-t-3xl" src="/assets/images/firstpers.svg" alt=""/>
                    <div className="hover:bg-[#f9f8f8] hover:shadow-2xl hover:duration-300 bg-white rounded-b-3xl flex flex-col">
                        <div className="px-6 pt-[35px] pb-[7px]">
                            <div className="text-[25px] gap-4 text-[#274C5B] font-extrabold leading-6 font-[Roboto] ">Giovani Bacardo</div>

                        </div>

                        <div className="flex justify-between px-6 pb-[34px]">
                            <span className="text-[#7EB693] text-[22px] italic font-[Yellow-Tail]   ">Farmer</span>
                            <div className="flex items-center gap-[17px] ">
                                <img src="/assets/images/Fb.png" onClick={()=>window.open('https://www.facebook.com')} alt="" className=" cursor-pointer w-[28px] h-[22px]"/>
                                <img src="/assets/images/Twiter.png" onClick={()=>window.open('https://www.twitter.com')} alt="" className="cursor-pointer w-[28px] h-[22px]"/>
                            </div>
                        </div>
                    </div>

                </div>

                {/*     second person------*/}

                <div>
                    <img className="w-[729px] rounded-t-3xl" src="/assets/images/secondpers.svg" alt=""/>
                    <div className="hover:bg-[#f9f8f8] hover:shadow-2xl hover:duration-300 bg-white rounded-b-3xl flex flex-col">
                        <div className="px-6 pt-[35px] pb-[7px]">
                            <div className="text-[25px] gap-4 text-[#274C5B] font-extrabold leading-6 font-[Roboto] ">Marianne Loreno</div>

                        </div>

                        <div className="flex justify-between px-6 pb-[34px]">
                            <span className="text-[#7EB693] text-[22px] italic font-[Yellow-Tail]">Designer</span>
                            <div className="flex items-center gap-[17px] ">
                                <img src="/assets/images/inst.svg" onClick={()=>window.open('https://www.instagram.com')} alt="" className="cursor-pointer w-[28px] h-[22px]"/>
                                <img src="/assets/images/Fb.png"  onClick={() => window.open('https://www.facebook.com/')} alt="" className=" cursor-pointer w-[28px] h-[22px]"/>
                                <img src="/assets/images/Twiter.png" onClick={()=>window.open('https://www.twitter.com')} alt="" className="cursor-pointer w-[28px] h-[22px]"/>
                            </div>
                        </div>
                    </div>


                </div>

                {/* third person */}

                <div>
                    <img className="w-[729px] rounded-t-3xl" src="/assets/images/thirdpers.svg" alt=""/>
                    <div className=" hover:bg-[#f9f8f8] hover:shadow-2xl hover:duration-300 bg-white  rounded-b-3xl flex flex-col">
                        <div className="px-6 pt-[35px] pb-[7px]">
                            <div className="text-[25px] gap-4 text-[#274C5B] font-extrabold leading-6 font-[Roboto] ">Riga Pelore</div>

                        </div>

                        <div className="flex justify-between px-6 pb-[34px]">
                            <span className="text-[#7EB693] text-[22px] italic font-[Yellow-Tail]   ">Farmer</span>
                            <div className="flex items-center gap-[17px] ">
                                <img src="/assets/images/inst.svg" onClick={()=>window.open('https://www.instagram.com')} alt="" className="cursor-pointer w-[28px] h-[22px]"/>
                                <img src="/assets/images/Fb.png" onClick={() => window.open('https://www.facebook.com/')} alt="" className=" cursor-pointer w-[28px] h-[22px]"/>
                                <img src="/assets/images/Twiter.png"  onClick={() => window.open('https://www.twitter.com/')} alt="" className="cursor-pointer w-[28px] h-[22px]"/>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default FourComponent;
