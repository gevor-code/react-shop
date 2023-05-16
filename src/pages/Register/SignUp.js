import {useForm} from 'react-hook-form';
import {useNavigate} from "react-router";
import {toast} from "react-toastify";
import {useState} from "react";
import {v4 as uuidv4} from 'uuid';
import {useDispatch} from "react-redux";
import {fetchAllUsers, regUser} from "../../store/user";

const Signup = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors, isValid}, watch} = useForm();
    const [post, setPost] = useState({
        firstname: "",
        lastname: ""
    })
    const handleInput = (e) => {
        setPost({...post, [e.target.name]: e.target.value})
    }
    const onSubmit = async (data) => {
        try {
            const resp = await dispatch(fetchAllUsers())
            const allUsers = resp.data
            const findItem = allUsers.find((item) => item.email === data.email)
            if (findItem) return toast.error("Email already exists")

            data.id = uuidv4()
            await dispatch(regUser(data))
            await toast.success('Successfully registered');
            await navigate("/signin")
        } catch (e) {
            toast.error(e?.message || 'Something went wrong');
        }
    };

    const password = watch('password');
    const confirm_password = watch('confirm_password');
    return (
        <div className="flex items-center justify-center bg-blue-300 h-screen">
            <div className=" mx-[16px] sm:mx-[16px] md:mx-[16px] lg:mx-[32px] xl:mx-[64px] 2xl:mx-auto bg-gray-100 rounded-2xl w-[100%] sm:max-w-md  md:max-w-md  lg:max-w-md  xl:max-w-md p-[30px] sm:p-[6rem] md:p-[6rem] lg:p-[6rem] xl:p-[6rem]">
                <div>
                    <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="mb-4">
                            <label className="block mb-1 text-gray-700" htmlFor="firstname">
                                First Name
                            </label>
                            <input onChange={handleInput}
                                   className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                   type="text"
                                   id="firstname"
                                   {...register('firstname', {required: true, pattern: /^[A-Za-z]+$/})}
                            />
                            {errors.firstname && (<span className="text-red-500">
            {errors.firstname.type === 'required' ? 'First Name is required' : 'Invalid First Name'}
        </span>)}
                        </div>


                        <div className="mb-4">
                            <label className="block mb-1 text-gray-700" htmlFor="lastname">
                                Last Name
                            </label>
                            <input onChange={handleInput}
                                   className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                   type="text"
                                   id="lastname"
                                   {...register('lastname', {required: true, pattern: /^[A-Za-z]+$/})}
                            />
                            {errors.lastname && (<span className="text-red-500">
            {errors.lastname.type === 'required' ? 'Last Name is required' : 'Invalid Last Name'}
        </span>)}
                        </div>


                        <div className="mb-4">
                            <label className="block mb-1 text-gray-700" htmlFor="email">Email</label>
                            <input onChange={handleInput}
                                   className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                   type="email"
                                   id="email"
                                   {...register('email', {required: true, pattern: /^\S+@\S+$/i})}
                            />
                            {errors.email && (<span className="text-red-500">
              {errors.email.type === 'required' ? 'Email is required' : 'Invalid email address'}
            </span>)}
                        </div>

                        <div className="mb-4">
                            <label className="block mb-1 text-gray-700" htmlFor="password">
                                Password
                            </label>
                            <input onChange={handleInput}
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

                        <div className="mb-4">
                            <label
                                className="block mb-1 text-gray-700"
                                htmlFor="confirm_password"
                            >
                                Confirm Password
                            </label>
                            <input onChange={handleInput}
                                   className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                   type="password"
                                   id="confirm_password"
                                   {...register('confirm_password', {
                                       required: true,
                                       minLength: 6,
                                       validate: (value) => value === password
                                   })}
                            />
                            {errors.confirm_password && (
                                <span className="text-red-500">
                {errors.confirm_password.type === 'required'
                    ? 'Password is required'
                    : 'Password must be at least 6 characters'}
              </span>
                            )}
                            {password !== confirm_password && (
                                <span className="text-red-500">Password does not match</span>
                            )}
                        </div>

                        <div>
                            <button
                                className={`${
                                    !post || !isValid ? "cursor-not-allowed bg-gray-600" : "cursor-pointer bg-blue-500 hover:bg-blue-600"
                                } text-white px-6 py-3 rounded`}
                                type="submit"
                                disabled={!post || !isValid}
                            >
                                Sign Up
                            </button>


                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Signup;
