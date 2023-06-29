import React, {useEffect, useRef, useState} from 'react';
import {useDispatch} from "react-redux";
import {getCateg, getProductId, getProducts} from "../../store/user";
import StarsComponent from "../../components/Homepage/StarsComponent";
import {quantityCart} from "../../store/cart";
import PriceRange from "../../components/Range/PriceRange";
import {toast} from "react-toastify";
import Loader from "../../components/Loader/Loader";
import {useNavigate} from "react-router";

const Shop = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [isFilterMenuOpen, setFilterMenuOpen] = useState(false);
    const divRef = useRef(null);

    const [filter, setFilter] = useState({
        sorting: null,
        productByCategories: null,
        range: null,
    });


    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState([0, 20]);
    const [loader, setMyLoader] = useState(false)
    const [checkboxes, setCheckboxes] = useState([
        {id: 1, label: "Price: High to low", checked: false},
        {id: 2, label: "Price: Low to hight", checked: false}
    ])


    useEffect(() => {
        fetchCategory()
    }, []);


    useEffect(() => {
        fetchProducts();
    }, [filter]);

    const handleFilterMenu = () => {
        setFilterMenuOpen(!isFilterMenuOpen);
    };
    const toggleDiv = () => {
        setIsOpen(!isOpen);
    };

    const handleChange = async (obj) => {
        setCheckboxes(
            checkboxes.map((elm) =>
                elm.id === obj.id ? {...elm, checked: !elm.checked} : {...elm, checked: false}
            )
        );
        const sorting = obj.label === "Price: High to low" ? "HighToLow" : "LowToHigh";
        setFilter({...filter, sorting: sorting});
        setIsOpen(!isOpen);
    };



    const addToCart = (product) => {
        try {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const cartCount = cart.length;
            const updatedCart = [...cart, product];
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            const currentCount = cartCount + 1;
            dispatch(quantityCart(currentCount))
            toast.success('Successfully Added');

        } catch (error) {
            toast.error(error)
        }
    };

    const fetchCategory = async () => {
        try {
            const dataCategory = await dispatch(getCateg())
            setCategories(dataCategory)
        } catch (error) {
            toast.error(error)
        }
    }
    const fetchProducts = async () => {
        try {
            setMyLoader(true);
            const data = await dispatch(getProducts(filter));
            setProducts(data);
        } catch (error) {
            toast.error(error);
        } finally {
            setMyLoader(false);
        }
    };


    const handleCategorySelection = async (category) => {
        const updatedSelectedCategory = selectedCategory.includes(category)
            ? selectedCategory.filter((data) => data !== category)
            : [...selectedCategory, category];
        setSelectedCategory(updatedSelectedCategory);
        setFilter({...filter, productByCategories: updatedSelectedCategory});
    }


    const clearSelect = async () => {
        setSelectedCategory([]);
        setCheckboxes([
            {id: 1, label: "Price: High to low", checked: false},
            {id: 2, label: "Price: Low to hight", checked: false}
        ])
        setPrice([0, 20])
        setFilter({
            sorting: null,
            productByCategories: null,
            range: null,
        })
    };

    const productDetail = async (productId) => {
        try {
            navigate(`/shop/${productId}`);
        } catch (error) {
            toast.error(error.message);
        }
    };

    const handleClickOutside = (event) => {
        if (divRef.current && !divRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };
    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);
    return (
        <div className=" main-container shopDiv">
            <div className="flex my-[5rem]  sm:gap-[25px] md:gap-[16px] lg:gap-[14px] xl:gap-[25px] ">
                <div className="sticky  ">
                    <div className="flex flex-col hidden sm:flex md:flex lg:flex xl:flex">
                        <span
                            className=" flex items-center justify-center gap-3 text-2xl font-semibold mb-4">Filters</span>
                        <div className="flex flex-col mt-4">
                            <div className="flex items-center flex-col ">
                                <ul className="xl:w-[140px] px-[1rem] py-[1rem] text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                    {categories.map((category) => (
                                        <li key={category.id} className="flex items-center mb-4">
                                            <input
                                                id={`category-${category}`}
                                                type="checkbox"
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                checked={selectedCategory.includes(category.category)}
                                                onChange={() => handleCategorySelection(category.category)}
                                            />
                                            <label htmlFor={`category-${category.category}`}
                                                   className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                {category.category}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                                {selectedCategory.length > 0 ? (
                                    <div className="flex mt-2">
                                        <button
                                            className="text-sm text-white px-[1rem] py-[8px] bg-[#374151] hover:bg-[#0c3c60] transition duration-300 cursor-pointer"
                                            onClick={() => clearSelect()}>
                                            Clear All
                                        </button>
                                    </div>
                                ) : null}

                            </div>

                        </div>

                    </div>
                    <PriceRange filter={filter} setFilterHandler={setFilter} values={price} setValues={setPrice}/>
                </div>

                <div className="w-[100%]" ref={divRef}>
                    <div
                        className="flex  sortByDiv sm:justify-end  md:justify-end lg:justify-end xl:justify-end relative">
                        <button
                            className="flex justify-between w-[160px] items-center  cursor-pointer  rounded-[5px] bg-[#5552a2] text-white text-[16px] font-semibold p-3"
                            onClick={toggleDiv}>
                            Sort by
                            <span>
                      {isOpen ? (
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-arrow-up-short"
                              viewBox="0 0 16 16"
                          >
                              <path
                                  fillRule="evenodd"
                                  d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 0 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
                              />
                          </svg>
                      ) : (
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className={`bi bi-arrow-${isOpen ? "up" : "down"}`}
                              viewBox="0 0 16 16"
                          >
                              <path
                                  fillRule="evenodd"
                                  d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                                  fill="#cac8bf"
                              />
                          </svg>
                      )}
                    </span>
                        </button>
                        {isOpen ? (
                            <div
                                className="flex sortByContent justify-center sm:justify-end md:justify-end lg:justify-end xl:justify-end absolute top-[3rem] left-0 right-0 ">
                                <div
                                    className="flex flex-col bg-white border border-b-gray-400 mt-2 mb-2 p-4 w-[11rem] ">
                                    <ul>

                                        {checkboxes.map((checkbox) => {
                                            return <div key={checkbox.id}>
                                                <li className="flex items-center mb-4">
                                                    <input
                                                        id={checkbox.id}
                                                        type="checkbox"
                                                        checked={checkbox.checked}
                                                        onChange={() => handleChange(checkbox)}
                                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                    />
                                                    <label
                                                        htmlFor="high-to-low-checkbox"
                                                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                        {checkbox.label}
                                                    </label>
                                                </li>
                                            </div>
                                        })

                                        }

                                    </ul>
                                </div>
                            </div>
                        ) : null}
                    </div>

                    {loader ? (
                        <div className="absolute left-[50%] top-[32%]">
                            <Loader/>
                        </div>
                    ) : (
                        <div
                            className=" mt-[1rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 sm:gap-10 md:gap-10 lg:gap-10 xl:gap-10 shopPart ">
                            {products && products.map((product) => (
                                <div key={product.id} className="bg-white rounded-lg flex flex-col justify-around  ">
                                    {product.images.map((image, index) => (
                                        <div key={index}
                                             className="max-w-full sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm overflow-hidden shadow-lg rounded-[2rem] shopPart bg-[#f9f8f8]  ">
                                            <div className=" m-7">
                                                <span
                                                    className="text-white bg-[#274C5B]  leading-5 font-[Opens Sans] text-sm font-semibold pl-6 pr-6 pt-2 pb-2 rounded  ">{product?.category.category}</span>
                                            </div>
                                            <div className="flex w-full justify-center"
                                                 onClick={() => productDetail(product.id)}
                                            >
                                                <img className=" w-96 sm:h-64 md:h-64 lg:h-[17rem] xl:h-[17rem]"
                                                     src={image}
                                                     alt=""/>
                                            </div>
                                            <div className="px-6 py-4">
                                                <div
                                                    className="text-xl gap-4 text-[#274C5B] text-center font-semibold leading-6 font-[Roboto] line-clamp-1  ">{product.title}</div>

                                            </div>
                                            <div
                                                className="px-2 pb-4 flex justify-center sm:justify-center md:justify-center md:flex-wrap lg:flex-wrap lg:justify-center xl:flex-nowrap ">
                                                <div className="flex">
                                                    <span
                                                        className="rounded-full text-[#B8B8B8] mr-2 line-through ">${product.price.toFixed(2)}</span>
                                                    <span
                                                        className="text-[#274C5B] font-bold font-[Open Sans] ">${product.special_price.toFixed(2)}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <StarsComponent/>
                                                </div>
                                            </div>
                                            <div className="flex justify-center pb-6">
                                                <button onClick={() => addToCart(product)}
                                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                    Add to Cart
                                                </button>
                                            </div>

                                        </div>
                                    ))}
                                </div>
                            ))}

                        </div>
                    )}


                    <div>
                        <div className="flex justify-center items-end fixed bottom-[2%] left-[13px]">
                            <button
                                className="  xl:hidden lg:hidden md:hidden sm:hidden block bg-[#5552a2] hover:bg-indigo-800 cursor-pointer text-white font-bold py-2 px-4 rounded"
                                onClick={handleFilterMenu}>
                                Filter Menu
                            </button>
                        </div>
                        {isFilterMenuOpen ? (
                            <div
                                className="fixed top-0 right-0 bottom-0 w-[300px]  bg-gray-300 shadow-lg transition-all duration-300  filterMenu filterMenuContainer">
                                <div className="mt-[7rem]">
                                    <div className="flex flex-col">
                                            <span
                                                className=" pl-[1rem] gap-3 text-2xl font-semibold mb-4">Filters</span>
                                        <div className="flex flex-col">
                                            <div className="flex  flex-col absolute z-10">
                                                <ul className=" p-4 w-screen text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                                    {categories.map((category) => (
                                                        <li key={category} className="flex items-center mb-4">
                                                            <input
                                                                id={`category-${category.category}`}
                                                                type="checkbox"
                                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                                checked={selectedCategory.includes(category)}
                                                                onChange={() => handleCategorySelection(category)}
                                                            />
                                                            <label htmlFor={`category-${category}`}
                                                                   className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                                {category.category}
                                                            </label>
                                                        </li>
                                                    ))}
                                                </ul>
                                                {selectedCategory.length > 0 ? (
                                                    <div className="flex mt-2">
                                                        <button
                                                            className="text-sm text-white px-[1rem] py-[8px] bg-[#374151] hover:bg-[#0c3c60] transition duration-300 cursor-pointer"
                                                            onClick={() => clearSelect()}>
                                                            Clear All
                                                        </button>
                                                    </div>
                                                ) : null}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <PriceRange values={price} setValues={setPrice} setter={setProducts}
                                                loader={setMyLoader}/>
                                </div>

                            </div>
                        ) : null}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
