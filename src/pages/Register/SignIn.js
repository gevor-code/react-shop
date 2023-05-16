import React from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router";
import {toast} from "react-toastify";
import axios from "axios";
import {logUser} from "../../store/user";
import {useDispatch} from "react-redux";
import {Cookies, useCookies} from "react-cookie";

const SignIn = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [cookies, setCookie] = useCookies(['userData'])
    const onSubmit = async (data) => {
        try {
            const response = await dispatch(logUser())
            const users = response.data;
            const userLog = users.find((user) => user.email === data.email)
            if (!userLog) {
                return toast.error('Email not found in the database')
            }
            if (userLog.password !== data.password) {
                return toast.error('Invalid password');
            }
            toast.success('Success');
            setCookie('userData', userLog)
            console.log(cookies.userData)
            navigate("/")
        } catch (e) {
            toast.error(e?.message || 'Something went wrong');
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
                                {...register('password', {required: true, minLength: 6})}
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
