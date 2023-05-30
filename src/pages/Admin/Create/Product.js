import React, {useState} from 'react';
import Admin from "../Admin";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {v4 as uuidv4} from "uuid";
import {addProduct, getAllCategory} from "../../../store/user";
import {toast} from "react-toastify";
import {useEffect} from 'react';
import moment from "moment/moment";

const Product = () => {
    const dispatch = useDispatch();
    const {register, handleSubmit, formState: {errors, isValid}, reset} = useForm();
    const [myPost, setMyPost] = useState({
        product: "",
        price: "",
    });
    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        try {
            const categories = await dispatch(getAllCategory());
            setCategories(categories);
        } catch (error) {
            toast.error('Error categories:' || error.message);
        }
    };
    useEffect(() => {
        fetchCategories();
    }, []);

    const handleInput = (e) => {
        setMyPost({...myPost, [e.target.name]: e.target.value});
    };


    const [imagesPreview, setImagesPreview] = useState([])
    const handleImageUpload = (e) => {
        setImagesPreview([])
        const files = Array.from(e.target.files)
        files.forEach((file) => {
            const reader = new FileReader()
            reader.onload = () => {
                setImagesPreview((prevState)=>[...prevState, reader.result])
            }
            reader.readAsDataURL(file)
        })
    }

    const onSubmit = async (data) => {
        try {
            const findCategory = categories.find(obj => {
                return obj.id === data.category
            });
            const productData = {
                id: uuidv4(),
                title: data.title,
                description: data.description,
                price: data.price,
                special_price: data.special_price,
                quantity: data.quantity,
                category: findCategory ,
                images: imagesPreview,
                created_at: moment().format('MMMM Do YYYY, h:mm:ss a')
            };

            await dispatch(addProduct(productData));
            toast.success('Product added successfully');
            reset();
        } catch (e) {
            toast.error('Error adding product');
        }
    };

    return (
        <div>
            <Admin/>
            <div className="flex items-center justify-center bg-cyan-900 h-[150vh]">
                <div
                    className="main-container contentP absolute sm:left-[41%] md:left-[41%] lg:left-[41%] xl:left-[41%]">
                    <div
                        className="bg-gray-400 rounded-2xl w-[100%] p-[24px]">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col items-center text-center">
                                                        <div className="mb-4 flex gap-4 w-full flex-col">
                                                            <label className="block mb-1 text-gray-700" htmlFor="title">
                                                                Title
                                                            </label>
                                                            <input
                                                                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                                                type="text"
                                                                id="title"
                                                                {...register('title', {required: true})}
                                                            />
                                                            {errors.title && (
                                                                <span className="text-red-500">
                                              {errors.title.type === 'required' ? 'Title is required' : 'Invalid Title'}
                                            </span>
                                                            )}
                                                        </div>

                                                        <div className="mb-4 flex gap-4 w-full flex-col">
                                                            <label className="block mb-1 text-gray-700" htmlFor="description">
                                                                Description
                                                            </label>
                                                            <input onChange={handleInput}
                                                                   className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                                                   type="description"
                                                                   id="description"
                                                                   {...register('description')}
                                                            />
                                                            {errors.description && (<span className="text-red-500">
                                    {errors.description.type === 'required' ? 'Description is required' : 'Invalid Description'}
                                </span>)}
                                                        </div>

                                                        <div className="mb-4 flex gap-4  w-full flex-col">
                                                            <label className="block mb-1 text-gray-700" htmlFor="price">
                                                                Price
                                                            </label>
                                                            <input onChange={handleInput} className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                                                   type="text"
                                                                   id="price"

                                                                   {...register('price', {
                                                                       required: true,
                                                                       pattern: /^\$[0-9]+(\.[0-9]{1,2})?$/,
                                                                       min: "10",
                                                                       max: "100000"
                                                                   })}
                                                            />
                                                            {errors.price && (<span className="text-red-500">
                                    {errors.price.type === 'required' ? 'Price is required' : 'Invalid price '}
                                </span>)}
                                                        </div>

                                                        <div className="mb-4 flex gap-4 w-full flex-col">
                                                            <label className="block mb-1 text-gray-700" htmlFor="special_price">
                                                                Special price
                                                            </label>
                                                            <input onChange={handleInput}
                                                                   className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                                                   type="text"
                                                                   id="special_price"

                                                                   {...register('special_price', {
                                                                       required: true,
                                                                       pattern: /^\$[0-9]+(\.[0-9]{1,2})?$/,
                                                                       min: "10",
                                                                       max: "100000"
                                                                   })}
                                                            />
                                                            {errors.special_price && (<span className="text-red-500">
                                            {errors.special_price.type === 'required' ? 'Special price is required' : 'Invalid special price '}
                                </span>)}
                                                        </div>


                                                        <div className="mb-4 flex gap-4 w-full flex-col">
                                                            <label className="block mb-1 text-gray-700" htmlFor="quantity">
                                                                Quantity
                                                            </label>
                                                            <input onChange={handleInput}
                                                                   className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                                                   type="text"
                                                                   id="quantity"

                                                                   {...register('quantity', {
                                                                       required: true,
                                                                       pattern: /^[0-9]+$/,
                                                                       min: "1",
                                                                       max: "1000"
                                                                   })}
                                                            />
                                                            {errors.quantity && (<span className="text-red-500">
                                    {errors.quantity.type === 'required' ? 'Quantity is required' : 'Invalid quantity '}
                                </span>)}
                                                        </div>
                                                        <div className="mb-4 flex gap-4 w-full flex-col">
                                                            <label className="block mb-1 text-gray-700" htmlFor="category">
                                                                Category
                                                            </label>
                                                            <select
                                                                onChange={handleInput}
                                                                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                                                id="category"
                                                                name="category"
                                                                {...register('category', {required: true})}
                                                            >
                                                                <option value="">Select a category</option>
                                                                {categories.map((category) => (
                                                                    <option key={category.id} value={category.id}>
                                                                        {category.category}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                            {errors.category && (
                                                                <span className="text-red-500">Category is required</span>
                                                            )}
                                                        </div>


                                <div className="mb-4 flex gap-4 w-full flex-col">
                                    <label className="block mb-1 text-gray-700" htmlFor="image">
                                        Image
                                    </label>
                                    <input
                                        multiple
                                        onChange={handleImageUpload}
                                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        type="file"
                                        id="image"
                                    />
                                    {errors.image && (
                                        <span className="text-red-500">Image is required</span>
                                    )}
                                </div>
                                <div className="flex justify-center w-[108px] gap-3">
                                    {imagesPreview.map((imageFile,index)=>(
                                        <img className="my-4" key={index} src={imageFile} alt=""/>
                                    ))}
                                </div>

                                <div>
                                    <button
                                        className={`${
                                            !isValid
                                                ? 'cursor-not-allowed bg-blue-300'
                                                : 'cursor-pointer bg-blue-500 hover:bg-blue-600'
                                        } text-white py-2 px-10 rounded`}
                                        type="submit"
                                        disabled={!isValid}
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


