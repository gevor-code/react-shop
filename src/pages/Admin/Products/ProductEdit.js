import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useParams} from "react-router";
import {useForm} from "react-hook-form";
import {getProductId, updateProduct} from "../../../store/user";
import {toast} from "react-toastify";
import Admin from "../Admin";

const ProductEdit = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors, isValid }, setValue, reset } = useForm();

    useEffect(() => {
        fetchData();
    }, [dispatch, id]);

    const fetchData = async () => {
        try {
            const productData = await dispatch(getProductId(id));
            const { title, description, price, special_price, category, quantity, created_at } = productData;

            setValue('title', title);
            setValue('description', description);
            setValue('price', price);
            setValue('special_price', special_price);
            setValue('category', category.category || productData.category);
            setValue('quantity', quantity);
            setValue('created_at', created_at);
        } catch (error) {
            toast.error('Error retrieving product');
        }
    };

    const onSubmit = async (data) => {
        try {
            await dispatch(updateProduct(id, data));
            toast.success('Product updated successfully');
            reset();
            fetchData();
        } catch (error) {
            toast.error('Error updating product');
        }
    };
    return (
        <div>
            <Admin/>
            <div className="flex items-center justify-center bg-green-200 h-screen ">
                <div
                    className="main-container contentP absolute sm:left-[41%] md:left-[41%] lg:left-[41%] xl:left-[41%]">
                    <div
                        className="bg-gray-100 rounded-2xl w-[100%] p-[5rem] sm:max-w-md sm:p-[5rem]  md:max-w-md md:p-[6rem]  lg:p-[6rem] lg:max-w-md  xl:max-w-md p-[30px] xl:p-[6rem]">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-4 flex gap-4 flex-col">
                                    <label className="block mb-1 text-gray-700" htmlFor="title">
                                        Title
                                    </label>
                                    <input
                                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        type="text"
                                        id="title"
                                        {...register('title', { required: true, pattern: /^[A-Za-z]+$/ })}
                                    />
                                    {errors.title && (
                                        <span className="text-red-500">
                      {errors.title.type === 'required' ? 'Title is required' : 'Invalid Title'}
                    </span>
                                    )}
                                </div>
                                <div className="mb-4 flex gap-4 flex-col">
                                    <label className="block mb-1 text-gray-700" htmlFor="description">
                                        Description
                                    </label>
                                    <input
                                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        type="text"
                                        id="description"
                                        {...register('description', { required: true, pattern: /^[A-Za-z]+$/ })}
                                    />
                                    {errors.description && (
                                        <span className="text-red-500">
                      {errors.description.type === 'required' ? 'Description is required' : 'Invalid Description'}
                    </span>
                                    )}
                                </div>
                                <div className="mb-4 flex gap-4 flex-col">
                                    <label className="block mb-1 text-gray-700" htmlFor="price">
                                        Price
                                    </label>
                                    <input
                                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        type="text"
                                        id="price"
                                          {...register('price', {
                                                required: true,
                                                pattern: /^[0-9]+$/,
                                                min: "100",
                                                max: "1000"
                                            })}
                                    />
                                    {errors.price && (
                                        <span className="text-red-500">
                      {errors.price.type === 'required' ? 'Price is required' : 'Invalid Price'}
                    </span>
                                    )}
                                </div>

                                <div className="mb-4 flex gap-4 flex-col">
                                    <label className="block mb-1 text-gray-700" htmlFor="special_price">
                                       Special Price
                                    </label>
                                    <input
                                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        type="text"
                                        id="special_price"
                                        {...register('special_price', {
                                            required: true,
                                            pattern: /^[0-9]+$/,
                                            min: "100",
                                            max: "1000"
                                        })}
                                    />
                                    {errors.special_price && (
                                        <span className="text-red-500">
                      {errors.special_price.type === 'required' ? 'Special price is required' : 'Invalid Special price'}
                    </span>
                                    )}
                                </div>

                                <div className="mb-4 flex gap-4 flex-col">
                                    <label className="block mb-1 text-gray-700" htmlFor="quantity">
                                        Quantity
                                    </label>
                                    <input
                                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        type="text"
                                        id="quantity"
                                        {...register('quantity', {
                                            required: true,
                                            pattern: /^[0-9]+$/,
                                            min: "1",
                                            max: "100"
                                        })}
                                    />
                                    {errors.quantity && (
                                        <span className="text-red-500">
                      {errors.quantity.type === 'required' ? 'Quantity is required' : 'Invalid Quantity'}
                    </span>
                                    )}
                                </div>
                                <div className="mb-4 flex gap-4 flex-col">
                                    <label className="block mb-1 text-gray-700" htmlFor="category">
                                        Category
                                    </label>
                                    <input
                                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        type="text"
                                        id="category"
                                        {...register('category', { required: true, pattern: /^[A-Za-z]+$/ })}
                                    />
                                    {errors.category && (
                                        <span className="text-red-500">
                      {errors.category.type === 'required' ? 'Category is required' : 'Invalid Category'}
                    </span>
                                    )}
                                </div>
                                <div>
                                    <button
                                        className={`${!isValid ? 'cursor-not-allowed bg-gray-600' : 'cursor-pointer bg-blue-500 hover:bg-blue-600'} text-white px-10 py-2 rounded`}
                                        type="submit"
                                        disabled={!isValid}
                                    >Edit
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

export default ProductEdit;

