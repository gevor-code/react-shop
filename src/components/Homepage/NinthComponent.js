import React from 'react';
import ArrowRightSVG from "../../assets/svg/ArrowRightSVG";

const NinthComponent = () => {
    return (
        <div className="pb-[30px]">
            <div>

                <div className="flex main-container justify-around  text-center sm:text-start md:text-start lg:text-start xl:text-start gap-6 pt-8 flex-wrap sm:justify-around md:justify-around lg:justify-between xl:justify-between ">
                    <div className="flex flex-col items-center gap-4 sm:items-baseline md:items-baseline lg:items-baseline xl:items-baseline">
                        <span className="text-[#7EB693] font-[Yellow-Tail] italic text-3xl font-normal">News</span>
                        <span
                            className="text-[#274C5B] font-[Roboto] font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] xl:text-5xl sm:w-[23rem] md:w-[30rem] lg:w-[40rem] xl:w-[50rem]">Discover weekly content about organic food, & more</span>
                    </div>
                    <div className="flex flex-col justify-center ">
                        <button className="bg-white border-2 border-[#274C5B] rounded-xl p-2 hover:bg-[#d3dce2] hover:duration-500">
                            <span className="text-xs text-[#274C5B] font-bold p-5 ">More News</span></button>
                    </div>
                </div>

                <div className="flex max-w-[1400px] m-auto self-center flex-row justify-center mt-[15vw] mb-[18vw] center cardsContainer sm:mb-[8vw] sm:mt-[3vw] md:mb-[10vw] md:mt-[5vw] lg:mb-[10vw] lg:mt-[5vw] xl:mb-[8vw] xl:mt-[3vw]">
                    <div className="bgImgBox  mx-[10px] rounded-[30px] flex flex-col justify-around eachCard">
                        <div
                            className="flex flex-col items-center justify-center w-[82px] h-[82px] rounded-[41px] bg-[#fff]  ml-[5%]">
                            <span className=" font-[Roboto] text-lg font-extrabold text-[#274C5B]">25</span>
                            <span className=" font-[Roboto] text-lg font-extrabold text-[#274C5B]">Nov</span>
                        </div>
                        <div
                            className="w-[90%] shadow-2xl h-[330px] bg-[#fff] rounded-[31px] flex flex-col items-center justify-center self-center translate-y-[23%]">
                            <div className="h-[90%] w-[90%] flex flex-col justify-around items-start ">
                                <div className="flex flex-row items-center">
                                    <img src="/assets/images/usericon.svg" width="18" height="20" alt=""  className="mr-[10px]"/>
                                    <span
                                        className="font-[Roboto] font-normal text-base text-[#274C5B]">By Rachi Card</span>
                                </div>
                                <div>
                                    <span className="text-[#274C5B] text-2xl font-[Roboto] font-extrabold">The Benefits of Vitamin D & How to Get It</span>
                                    <p className="text-[#525C60] font-[Opens Sans] text-lg font-normal ">Simply dummy
                                        text of the printing and typesetting <br/> industry. Lorem Ipsum</p>
                                </div>
                                <div className="btnPart">
                                    <button
                                        className="bg-[#EFD372] flex flex-row items-center justify-center rounded-[16px] btnPart w-[222px] h-[50px] sm:w-[222px] sm:h-[80px]  md:w-[222px] md:h-[80px] lg:w-[222px] lg:h-[80px] xl:w-[222px] xl:h-[80px]  hover:bg-[#ec8973] hover:duration-500">
                                    <span
                                        className="text-xl  flex flex-row w-[60%] items-center justify-between text-[#274C5B] font-bold">
                                        Read More
                                        <ArrowRightSVG/>
                                    </span>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="bgImgBox2  mx-[10px] rounded-[30px] flex flex-col justify-around eachCard">
                        <div
                            className="flex flex-col items-center justify-center w-[82px] h-[82px] rounded-[41px] bg-[#fff]  ml-[5%]">
                            <span className=" font-[Roboto] text-lg font-extrabold text-[#274C5B]">25</span>
                            <span className=" font-[Roboto] text-lg font-extrabold text-[#274C5B]">Nov</span>
                        </div>
                        <div
                            className="w-[90%] shadow-2xl h-[330px] bg-[#fff] rounded-[31px] flex flex-col items-center justify-center self-center translate-y-[23%]">
                            <div className="h-[90%] w-[90%] flex flex-col justify-around items-start ">
                                <div className="flex flex-row items-center">
                                    <img src="/assets/images/usericon.svg" width="18" height="20" alt="" className="mr-[10px]"/>
                                    <span
                                        className="font-[Roboto] font-normal text-base text-[#274C5B]">By Rachi Card</span>
                                </div>
                                <div>
                                    <span className="text-[#274C5B] text-2xl font-[Roboto] font-extrabold">Our Favourite Summertime Tommeto</span>
                                    <p className="text-[#525C60] font-[Opens Sans] text-lg font-normal ">Simply dummy
                                        text of the printing and typesetting <br/> industry. Lorem Ipsum</p>
                                </div>
                                <div className="btnPart">
                                    <button className="bg-[#EFD372] flex flex-row items-center justify-center rounded-[16px] btnPart w-[222px] h-[50px] sm:w-[222px] sm:h-[80px]  md:w-[222px] md:h-[80px] lg:w-[222px] lg:h-[80px] xl:w-[222px] xl:h-[80px]  hover:bg-[#ec8973] hover:duration-500">
                                    <span
                                        className="text-xl  flex flex-row w-[60%] items-center justify-between text-[#274C5B] font-bold">
                                        Read More
                                        <ArrowRightSVG/>
                                    </span>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NinthComponent;
