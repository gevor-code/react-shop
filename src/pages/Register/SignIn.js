import React from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router";
import {toast} from "react-toastify";

const SignIn = () => {

    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => {
        try {
            console.log(data, 'data')
            toast.success('Success');
            setTimeout(() => navigate("/"), 2000)
        } catch (e) {
            toast.error('Warning');
        }
    };

    return (
        <div className="flex items-center justify-center bg-blue-200 h-screen">
            <div
                className="max-w-md mx-[16px] sm:mx-[16px] md:mx-[16px] lg:mx-[32px] xl:mx-[64px] 2xl:mx-auto bg-gray-100 rounded-2xl p-[6rem]">
                <div>
                    <h2 className="text-2xl font-bold mb-4">Sign In</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label className="block mb-1 text-gray-700" htmlFor="email">Email</label>
                            <input
                                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                type="email"
                                id="email"
                                {...register('email', {required: true, pattern: /^\S+@\S+$/i})}
                            />
                            {errors.email && (
                                <span className="text-red-500">
                  {errors.email.type === 'required' ? 'Email is required' : 'Invalid email address'}
                </span>
                            )}
                        </div>

                        <div className="mb-4">
                            <label className="block mb-1 text-gray-700" htmlFor="password">Password</label>
                            <input
                                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                type="password"
                                id="password"
                                {...register('confirm_password', {required: true, minLength: 6})}
                            />
                            {errors.password && (
                                <span className="text-red-500">
                  {errors.password.type === 'required'
                      ? 'Password is required'
                      : 'Password must be at least 6 characters'}
                </span>
                            )}
                        </div>

                        <div>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded"
                                    type="submit">Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>



    );
};
export default SignIn
