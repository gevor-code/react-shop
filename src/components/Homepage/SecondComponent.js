import React from 'react';

const SecondComponent = () => {
    return (
        <div className="main-container">
            <div
                className="grid  grid-cols-1 gap-8 sm:grid-cols-1  md:grid-cols-1 mt-20 mb-20 sm:justify-items-stretch lg:grid-cols-2 xl:grid-cols-2  ">


                <div className=" bg-fruit1 p-14 italic">
                    <h1 className="font-[Yellow-tail] italic text-lg sm:text-lg md:text-xl lg:text-xl xl:text-2xl  tracking-wider font-normal text-white"> Natural!!</h1>
                    <h1 className="text-white text-lg w-48 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-extrabold  font-serif"> Get
                        Garden Fresh Fruits</h1>
                </div>


                <div className="bg-fruit2 p-14 italic">
                    <h1 className="font-[Yellow-tail] italic text-lg sm:text-lg md:text-xl lg:text-xl xl:text-2xl tracking-wider font-normal text-[#68A47F]">Offer!!</h1>
                    <h1 className="text-black text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl w-56  font-extrabold  font-serif">Get
                        10% off on Vegetables</h1>
                </div>


            </div>
        </div>
    );
};

export default SecondComponent;
