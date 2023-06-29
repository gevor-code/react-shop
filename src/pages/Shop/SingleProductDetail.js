import React, {useEffect, useState} from 'react';
import StarsComponent from "../../components/Homepage/StarsComponent";
import '../../pages/Shop/style.css';
import {quantityCart} from "../../store/cart";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {getProductId} from "../../store/user";
import {useParams} from "react-router";


const SingleProductDetail = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const [product, setProduct] = useState()
    useEffect(() => {
        fetchProduct();
    }, [id]);

    const fetchProduct = async () => {
        try {
            const productData = await dispatch(getProductId(id))
            setProduct(productData)
            console.log(productData, "productData")
        } catch (error) {
            toast.error(error.message)
        }
    }

    const handleAdd = (myProduct) => {
        try {
            const myCart = JSON.parse(localStorage.getItem('cart')) || [];
            const cartCount = myCart.length;
            const updatedCart = [...myCart, myProduct];
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            const currentCount = cartCount + 1;
            dispatch(quantityCart(currentCount))
            toast.success('Successfully Added');
        } catch (error) {
            toast.error(error)
        }
    };
    return (
        <div>
            <div className=" mt-7 mb-7  shadow-lg rounded-[2rem] shopPart bg-[#f9f8f8]  ">
                {product && (
                    <div
                        className="flex flex-col items-center sm:items-center sm:flex-col md:items-center md:flex-col lg:justify-evenly xl:justify-evenly xl:flex-row">
                        <div className="flex">
                            <img
                                className=" w-full sm:w-96 md:w-96 lg:w-96 xl:w-96  sm:h-64 md:h-64 lg:h-[17rem] xl:h-[17rem]"
                                src={product.images}
                                alt=""/>
                            <div
                                className=" productDiv px-6  py-6 sm:py-4 md:py-4 lg:py-4 xl:py-4 flex gap-8 flex-col">
                                <div
                                    className=" text-xl flex flex-col gap-4 text-[#274C5B] text-center font-semibold leading-6 font-[Roboto] line-clamp-1  ">{product?.title}
                                    <span
                                        className="text-white bg-[#274C5B]  leading-5 font-[Opens Sans] text-sm font-semibold pl-6 pr-6 pt-2 pb-2 rounded ">{product?.category?.category}</span>
                                </div>

                                <div className="flex  items-baseline gap-8 productInfoDiv">
                                    <div className="flex flex-col gap-2">
                                <span
                                    className="text-white bg-[#274C5B]  leading-5 font-[Opens Sans] text-sm font-semibold pl-6 pr-6 pt-2 pb-2 rounded"> Product Description</span>
                                        <div
                                            className="text-xl gap-4 text-[#274C5B] text-center font-semibold leading-6 font-[Roboto]"> {product?.description} </div>
                                    </div>
                                    <div>
                                        <div className=" flex-col items-center gap-4 flex">
                                            <div><span
                                                className="text-white bg-[#274C5B]  leading-5 font-[Opens Sans] text-sm font-semibold pl-6 pr-6 pt-2 pb-2 rounded">Product Information</span>
                                            </div>
                                            <div className="flex">
                                        <span
                                            className="rounded-full text-[#B8B8B8] mr-2 line-through ">${product?.price}</span>
                                                <span
                                                    className="text-[#274C5B] font-bold font-[Open Sans] ">${product?.special_price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <StarsComponent/>
                                </div>

                                <div className="flex justify-center pb-6">
                                    <button onClick={() => handleAdd(product)}
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SingleProductDetail;
