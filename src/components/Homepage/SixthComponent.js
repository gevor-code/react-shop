import React, {useEffect, useState} from 'react';
import StarsComponent from "./StarsComponent";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import {getProducts} from "../../store/user";
import {toast} from "react-toastify";

const SixthComponent = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [product, setProduct] = useState()

    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = async () => {
        try {
            const productData = await dispatch(getProducts({category: "Vegetable"}))
            setProduct(productData)
        } catch (error) {
            toast.error(error.message)
        }
    }
    const handleClick = () => {
        navigate('/shop')
    }
    return (
        <div className="bg-[#274c5b]">
            <div className=" main-container pb-6 pt-6">

                <div
                    className="flex justify-around flex-col items-center gap-2 text-center sm:flex-col sm:items-center sm:text-center sm:gap-4 md:justify-around md:flex lg:flex-col xl:justify-around xl:flex-row ">
                    <div className="flex flex-col ">
                        <span className="text-[#7EB693] font-[Yellow-Tail] italic text-3xl font-normal">Offer</span>
                        <span
                            className="text-white font-[Roboto] font-extrabold text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl">We Offer Organic For You</span>
                    </div>
                    <div className="flex flex-col justify-center">
                        <button onClick={handleClick}
                                className="bg-[#EFD372] rounded-xl p-2 hover:bg-[#ec8973] hover:duration-500"><span
                            className="text-xs text-[#274C5B] font-bold p-5 ">View All Product</span></button>
                    </div>
                </div>

                <div className="flex justify-center flex-wrap lg:gap-14 xl:grid-cols-4 gap-6  mt-8 ">
                    {product?.map((product) => (
                        <div className="imgPart" key={product.id}>
                            <div className="overflow-hidden shadow-lg rounded-sm bg-[#f9f8f8]">
                                <div className=" m-7">
                            <span
                                className="text-white bg-[#274C5B]  leading-5 font-[Opens Sans] text-sm font-semibold pl-6 pr-6 pt-2 pb-2 rounded  ">{product?.category?.category}</span>
                                </div>
                                <img className="w-full h-60 sm:h-64 md:h-64 lg:h-[17rem] xl:h-[17rem]"
                                     src={product.images} alt={product.images}/>
                                <div className="px-6 py-4 flex justify-center">
                                    <div
                                        className="text-xl gap-4 text-[#274C5B] font-semibold leading-6 font-[Roboto] ">{product.title}
                                    </div>

                                </div>
                                <div className="px-6 pb-2 flex justify-evenly gap-2">
                                    <div className="border-b-2 mb-4"></div>
                                    <span
                                        className="rounded-full text-[#B8B8B8] mr-2 line-through ">${product.price.toFixed(2)}</span>
                                    <span
                                        className="text-[#274C5B] font-bold font-[Open Sans] ">${product.special_price.toFixed(2)}</span>
                                    <div className="flex items-center">
                                        <StarsComponent/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SixthComponent;
