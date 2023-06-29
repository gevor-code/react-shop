import React, {useEffect, useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {getProducts} from "../../store/user";
import {useDispatch} from "react-redux";
import StarsComponent from "./StarsComponent";
import {useNavigate} from "react-router";

const FourComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, [dispatch]);

    const fetchProducts = async () => {
        try {
            const payload = {
                sorting: 'HighToLow',
            };

            const response = await dispatch(getProducts(payload));
            setProducts(response);
        } catch (err) {
            console.error(err);
        }
    };

    const handleClickProduct = (productId, product) => {
        navigate(`/shop/${productId}`, {state: product});
    }

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1070,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="main-container flex flex-col  slider slidDiv">
            <div className="flex items-center gap-4 flex-col mt-[3rem]">
        <span
            className="font-[Yellow-tail] tracking-wider italic text-lg sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-[#68A47F] font-bold mb-2">
          Categories
        </span>
                <h1 className="text-[#274C5B] font-[Roboto] text-5xl font-extrabold leading-10 textSlider">Our
                    Products</h1>
            </div>

            <div className="grid grid-cols-1 mb-[3rem] mt-[3rem]">
                <Slider {...settings}>
                    {products.map((product) => (
                        <div className="imgPart" key={product.id}
                             onClick={() => handleClickProduct(product.id, product)}>
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
                </Slider>
            </div>
        </div>
    );
};

export default FourComponent;