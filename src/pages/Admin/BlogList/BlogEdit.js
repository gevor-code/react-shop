import React, {useEffect} from 'react';
import Admin from "../Admin";
import {useDispatch} from "react-redux";
import {useParams} from "react-router";
import {useForm} from "react-hook-form";
import {getBlogById, updateBlog} from "../../../store/user";
import {toast} from "react-toastify";
import {useCookies} from "react-cookie";


const BlogEdit = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const [cookies] = useCookies(['userData'])
    const {register, handleSubmit, formState: {errors, isValid}, setValue} = useForm();
    useEffect(() => {
        if (id) {fetchData()}
    }, []);
    const fetchData = async () => {
        try {
            const blogData = await dispatch(getBlogById(id));
            const {title, description,images} = blogData;
            setValue('title', title);
            setValue('description', description);
            setValue('images', images);
        } catch (error) {
            toast.error('Error retrieving blog');
        }
    };

    const onSubmit = async (data) => {
        try {
            const userDataCookie = cookies.userData
            const userData = {
                firstname: userDataCookie.firstname,
                lastname: userDataCookie.lastname,
                userId: userDataCookie.id
            };

            const {title, description,images} = data;
            await dispatch(updateBlog(id, {title, description,images, userData}));
            fetchData()

            toast.success('BlogPage updated successfully');
        } catch (error) {
            toast.error('Error updating blog');
        }
    };
    const onChangeDescription = (e) => {
        setValue('description', e.target.value);
    };

    return (
        <div>
            <Admin/>
            <div className="flex items-center justify-center bg-green-200 h-[100vh] ">
                <div className="absolute sm:left-[39%] md:left-[39%] lg:left-[39%] xl:left-[39%]">
                    <div className="bg-gray-100 rounded-2xl w-[100%] p-[24px] ">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-4 flex gap-4 flex-col w-[500px]">
                                    <label className="block mb-1 text-gray-700" htmlFor="title">
                                        Title
                                    </label>
                                    <input
                                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        type="text"
                                        id="title"
                                        {...register('title',)}
                                    />
                                    {errors.title && (
                                        <span className="text-red-500">
                      {errors.title.type === 'required' ? 'Title is required' : 'Invalid Title '}
                    </span>
                                    )}
                                </div>

                                <div
                                    className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                                    <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                                        <label htmlFor="comment" className="sr-only">Your comment</label>
                                        <textarea
                                            id="comment"
                                            rows="4"
                                            className="pl-[10px] pt-[10px] w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                                            placeholder="Write a description..."
                                            {...register('description')}
                                            onChange={onChangeDescription}

                                        ></textarea>
                                    </div>

                                </div>

                                <div>
                                    <button
                                        className={`${!isValid ? 'cursor-not-allowed bg-gray-600' : 'cursor-pointer bg-blue-500 hover:bg-blue-600'} text-white px-10 py-2 rounded`}
                                        type="submit"
                                        disabled={!isValid}
                                    >
                                        Update
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

export default BlogEdit;
