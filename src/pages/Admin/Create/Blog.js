import React, {useState} from 'react';
import Admin from "../Admin";
import {useForm} from "react-hook-form";
import {v4 as uuidv4} from "uuid";
import moment from "moment";
import {addBlog} from "../../../store/user";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {useCookies} from "react-cookie";

const Blog = () => {
    const dispatch = useDispatch();
    const [myBlog, setMyBlog] = useState({});
    const [cookies] = useCookies(['userData'])

    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    const handleInput = (e) => {
        setMyBlog({...myBlog, description: e.target.value});
    };

    const [imgPreview, setImgPreview] = useState([])
    const handleImageUpload = (e) => {
        setImgPreview([])
        const files = Array.from(e.target.files)
        files.forEach((file) => {
            const reader = new FileReader()
            reader.onload = () => {
                setImgPreview((prevState)=>[...prevState, reader.result])
            }
            reader.readAsDataURL(file)
        })
    }
    const onSubmit = async (data) => {
        try {
            const userDataCookie = cookies.userData
            const blogData = {
                id: uuidv4(),
                title: data.title,
                description: myBlog.description,
                created_at: moment().format('MMMM Do YYYY, h:mm:ss a'),
                images: imgPreview,
                userData:  {
                    firstname: userDataCookie.firstname,
                    lastname: userDataCookie.lastname,
                    userId: userDataCookie.id
                }
            };
            await dispatch(addBlog(blogData));
            toast.success('BlogPage added successfully');
            reset();
        } catch (e) {
            toast.error('Error adding blog');
        }
    };

    return (
        <div>
            <Admin/>
            <div className="flex items-center justify-center bg-violet-200 h-[100vh]">
                <div
                    className="main-container contentP absolute sm:left-[39%] md:left-[39%] lg:left-[39%] xl:left-[39%]">
                    <div className="bg-gray-400 rounded-2xl w-[100%] p-[24px]">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-4 flex gap-4 w-[500px] flex-col">
                                    <label className="block mb-1 text-gray-700" htmlFor="title">
                                        Title
                                    </label>
                                    <input
                                        onChange={handleInput}
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

                                <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                                    <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                                        <label htmlFor="comment" className="sr-only">Your comment</label>
                                        <textarea
                                            onChange={handleInput}
                                            id="comment" rows="4"
                                            className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                                            placeholder="Write a description..." required></textarea>
                                    </div>

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
                                    {imgPreview.map((imageFile,index)=>(
                                        <img className="my-4" key={index} src={imageFile} alt=""/>
                                    ))}
                                </div>
                                <div>
                                    <button
                                        className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-2 px-10 rounded">
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

export default Blog;
