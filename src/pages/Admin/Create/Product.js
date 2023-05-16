import React, {useState} from 'react';
import Admin from "../Admin";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {v4 as uuidv4} from "uuid";
import {addProduct} from "../../../store/user";
import {toast} from "react-toastify";

const Product = () => {
    const dispatch = useDispatch()
    const {register, handleSubmit, formState: {errors, isValid}} = useForm();
    const [myPost, setMyPost] = useState({
        product: "",
        price: "",
    })
    const handleInput = (e) => {
        setMyPost({...setMyPost, [e.target.product]: e.target.value})
        setMyPost({...setMyPost, [e.target.price]: e.target.value})
    }
    const onSubmit = async (data) => {
        try {
            data.id = uuidv4()
            await dispatch(addProduct(data));
            toast.success('Product added successfully');
        } catch (e) {
            toast.error('Error adding product');
        }
    };
    return (
        <div>
            <Admin/>
            <div className="flex items-center justify-center bg-cyan-900 h-screen ">
                <div className="main-container contentP absolute sm:left-[41%] md:left-[41%] lg:left-[41%] xl:left-[41%]">
                    <div className="bg-gray-400 rounded-2xl w-[100%] p-[5rem] sm:max-w-md sm:p-[5rem]  md:max-w-md md:p-[6rem]  lg:p-[6rem] lg:max-w-md  xl:max-w-md p-[30px] xl:p-[6rem]">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-4 flex gap-4 flex-col">
                                    <label className="block mb-1 text-gray-700" htmlFor="product">
                                        Product Name
                                    </label>
                                    <input onChange={handleInput} className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                           type="text"
                                           id="product"
                                           {...register('product', {required: true, pattern: /^[A-Za-z]+$/})}
                                    />
                                    {errors.product && (<span className="text-red-500">
            {errors.product.type === 'required' ? 'Product Name is required' : 'Invalid Product Name'}
        </span>)}
                                </div>

                                <div className="mb-4 flex gap-4 flex-col">
                                    <label className="block mb-1 text-gray-700" htmlFor="price">
                                        Price
                                    </label>
                                    <input onChange={handleInput} className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                           type="text"
                                           id="price"

                                           {...register('price', {required: true, pattern: /^[0-9]+$/, min:"100",max:"1000"})}
                                    />
                                    {errors.price && (<span className="text-red-500">
            {errors.price.type === 'required' ? 'Price is required' : 'Invalid price '}
        </span>)}
                                </div>


                                <div>
                                    <button
                                        className={`${
                                            !myPost || !isValid ? "cursor-not-allowed bg-blue-300" : "cursor-pointer bg-blue-500 hover:bg-blue-600"
                                        } text-white py-2 px-10 rounded`}
                                        type="submit"
                                        disabled={!myPost || !isValid}
                                    >
                                        Add
                                    </button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;

