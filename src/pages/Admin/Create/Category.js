import React, {useState} from 'react';
import Admin from "../Admin";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addCategory} from "../../../store/user";
import {toast} from "react-toastify";
import {v4 as uuidv4} from 'uuid';


const Category = () => {
    const dispatch = useDispatch()
    const {register, handleSubmit, formState: {errors, isValid}} = useForm();
    const [post, setPost] = useState({
        category: "",
    })
    const handleInput = (e) => {
        setPost({...post, [e.target.category]: e.target.value})
    }
    const onSubmit = async (data) => {
        try {
            data.id = uuidv4()
            await dispatch(addCategory(data));
            toast.success('Category added successfully');
        } catch (e) {
            toast.error('Error adding category');
        }
    };

    return (
        <div>
            <Admin/>
            <div className="flex items-center justify-center bg-green-200 h-screen ">
                <div className="main-container contentP absolute sm:left-[41%] md:left-[41%] lg:left-[41%] xl:left-[41%]">
                    <div className="bg-gray-100 rounded-2xl w-[100%] p-[5rem] sm:max-w-md sm:p-[5rem]  md:max-w-md md:p-[6rem]  lg:p-[6rem] lg:max-w-md  xl:max-w-md p-[30px] xl:p-[6rem]">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-4 flex gap-4 flex-col">
                                    <label className="block mb-1 text-gray-700" htmlFor="category">
                                        Category Name
                                    </label>
                                    <input onChange={handleInput} className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                           type="text"
                                           id="categoryname"
                                           {...register('category', {required: true, pattern: /^[A-Za-z]+$/})}
                                    />
                                    {errors.category && (<span className="text-red-500">
            {errors.category.type === 'required' ? 'Category Name is required' : 'Invalid Category Name'}
        </span>)}
                                </div>
                                <div>
                                    <button
                                        className={`${
                                            !post || !isValid ? "cursor-not-allowed bg-gray-600" : "cursor-pointer bg-blue-500 hover:bg-blue-600"
                                        } text-white px-10 py-2 rounded`}
                                        type="submit"
                                        disabled={!post || !isValid}
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

export default Category;
