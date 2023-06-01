import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {getProd} from "../../store/user";
import StarsComponent from "../../components/Homepage/StarsComponent";
import {quantityCart} from "../../store/cart";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    const addToCart = (product) => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartCount = cart.length;
        const updatedCart = [...cart, product];
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        const currentCount = cartCount + 1;
        dispatch(quantityCart(currentCount))
    };

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await dispatch(getProd());
            setProducts(data);
        };
        fetchProducts();
    }, [dispatch]);
    return (
        <div className="my-[3rem]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 shopPart main-container">
            {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg flex flex-col justify-around  ">
                    {product.images.map((image, index) => (
                        <div key={index} className="max-w-full sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm overflow-hidden shadow-lg rounded-[2rem] shopPart bg-[#f9f8f8]  ">
                        <div className=" m-7">
                        <span
                        className="text-white bg-[#274C5B]  leading-5 font-[Opens Sans] text-sm font-semibold pl-6 pr-6 pt-2 pb-2 rounded  ">{product?.category.category}</span>
                        </div>
                            <div className="flex w-full justify-center">
                        <img className=" w-96 sm:h-64 md:h-64 lg:h-[17rem] xl:h-[17rem]"src={image} alt="" />
                            </div>
                        <div className="px-6 py-4">
                        <div className="text-xl gap-4 text-[#274C5B] font-semibold leading-6 font-[Roboto] ">{product.title}</div>

                        </div>
                        <div className="px-6 pb-4 flex justify-between gap-2">
                            <div className="flex">
                        <span className="rounded-full text-[#B8B8B8] mr-2 line-through ">{product.price}</span>
                        <span className="text-[#274C5B] font-bold font-[Open Sans] ">{product.special_price}</span>
                            </div>
                                <div className="flex items-center">
                        <StarsComponent/>
                        </div>
                        </div>
                                <div className="flex justify-center pb-6">
                            <button onClick={() => addToCart(product)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Add to Cart
                            </button>
                            </div>

                        </div>
                    ))}
                </div>
            ))}
        </div>
        </div>
    );
};

export default Shop;
