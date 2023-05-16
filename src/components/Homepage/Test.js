import React from 'react';
import StarsComponent from "./StarsComponent";
const items = [
    { text: '100%',text2:"Organic", bgColor: 'bg-[#f1f1f1]' },
    { text: '285',text2:"Active Product", bgColor: 'bg-[#f1f1f1]'},
    { text: '350+',text2:"Organic Orchads", bgColor: 'bg-[#f1f1f1]'},
    { text: '25+',text2:"Years of Farming", bgColor: 'bg-[#f1f1f1]'},
];
const Test = () => {

    return (
        <div>
            <div className="relative">
                <img src="/assets/images/fifthbg.svg" className="w-full" alt=''/>

                <div className=" absolute top-1/2 left-[55%] -translate-x-[60%] -translate-y-[60%] flex items-center flex-col ">
                    <span className="text-[#7EB693] font-[Yellow-tail] italic font-normal leading-8">Testimonial</span>
                    <h1 className="text-2xl md:text-4xl lg:text-5xl text-[#274C5B] font-[Roboto] font-extrabold leading-10 md:leading-12 xl:leading-14 text-center mt-4 md:mt-8 max-w-3xl mx-auto">What Our Customer
                        Saying?</h1>
                    <div className="mt-4">
                        <img className="rounded-full w-14 md:w-20 lg:w-24 mx-auto" src="/assets/images/womenicon.svg" alt=""/>
                        <div className="flex items-center justify-center">
                            <StarsComponent/>
                        </div>
                    </div>


                    <div className="flex items-center text-center flex-col mt-4">
                        <span className="text-[#525C60] font-[Open Sans] text-lg ">Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</span>
                        <div className="flex items-center flex-col mt-4">
                            <h1 className="text-[#274C5B] font-[Roboto] text-2xl font-semibold leading-7">Sara
                                Taylor</h1>
                            <p className="text-[#525C60] font-[Opens Sans] text-base font-normal">Consumer</p>
                            <div className="flex gap-2 mt-6">
                                <img src="/assets/images/elips.svg" alt=""/>
                                <img src="/assets/images/elipsgreen.svg" alt=""/>
                                <img src="/assets/images/elips.svg" alt=""/>
                            </div>
                        </div>
                    </div>

                    <hr className="w-full h-1 mx-auto bg-[#E0E0E0] border-0 dark:bg-gray-[#E0E0E0] mt-24"/>
                    <div className="absolute -bottom-[15rem] left-1/2 -translate-x-1/2">
                        <div className="flex gap-4  ">
                            {items.map((item, index) => (
                                <div key={index} className={`border-8 border-[#7EB693] h-48 rounded-[50%] bg-[#F1F1F1] w-56 shadow-md flex items-center justify-center flex-col ${item.bgColor}`}>
                                    <p className="text-[#274C5B] text-5xl font-[Roboto] font-extrabold ">{item.text}</p>
                                    <p className="text-[#274C5B] text-xl font-[Opens Sans] font-semibold ">{item.text2}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Test;
