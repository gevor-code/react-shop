import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";

const FourComponent = () => {
    const [myMessage, setMyMessage] = useState()

    const onSubmit = (data) => {
        setMyMessage(data);
        const messages = JSON.parse(localStorage.getItem('message')) || {};
        const updatedData = {...messages, ...data};
        localStorage.setItem('message', JSON.stringify(updatedData));
        toast.success('Message sent successfully!');
        reset();
    };
    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="main-container  test">
                    <div className="flex justify-evenly mb-8  inputPart">
                        <div className="mb-4">
                            <label className=" labelInput block mb-4 text-[#274C5B] font-[Roboto] text-[18px] font-bold"
                                   htmlFor="name">Full Name</label>
                            <input
                                className=" placeHolderPart inputField sm:w-[260px] md:w-[270px] lg:w-[380px] xl:w-[400px] px-4 py-2 border font-normal italic font-[Roboto] text-[18px] text-[#ABABAB] rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500 border-[#7EB693]"
                                type="text"
                                id="name"
                                placeholder="Your name is here"
                                {...register('name', {required: true, pattern: /[A-Z]/})}
                            />
                            {errors.name && (
                                <span
                                    className="text-red-500 flex justify-center mt-4  italic font-[Roboto] font-bold text-[18px]">
                  {errors.name.type === 'required' ? 'Name is required' : 'Invalid Name '}
                </span>
                            )}
                        </div>
                        <div className="mb-4">
                            <label className=" labelInput block mb-4 text-[#274C5B] font-[Roboto] text-[18px] font-bold"
                                   htmlFor="email">Your Email</label>
                            <input
                                className="  placeHolderPart inputField sm:w-[260px] md:w-[270px] lg:w-[380px] xl:w-[400px] px-4 py-2 border font-normal italic font-[Roboto] text-[18px] text-[#ABABAB] rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500 border-[#7EB693] "
                                type="email"
                                id="email"
                                placeholder="example@yourmail.com"
                                {...register('email', {required: true, pattern: /^\S+@\S+$/i})}
                            />
                            {errors.email && (
                                <span
                                    className="text-red-500  flex justify-center mt-4  italic font-[Roboto] font-bold text-[18px]">
                  {errors.email.type === 'required' ? 'Email is required' : 'Invalid email address'}
                </span>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-evenly inputPart ">
                        <div className="mb-4">
                            <label
                                className="  labelInput block mb-4 text-[#274C5B] font-[Roboto] text-[18px] font-bold"
                                htmlFor="company">Company</label>
                            <input
                                className=" placeHolderPart inputField sm:w-[260px] md:w-[270px] lg:w-[380px] xl:w-[400px] px-4 py-2 border font-normal italic font-[Roboto] text-[18px] text-[#ABABAB] rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500 border-[#7EB693]"
                                type="text"
                                id="company"
                                placeholder="Your company name is here"
                                {...register('company', {required: true, pattern: /[A-Z]/})}
                            />
                            {errors.company && (
                                <span
                                    className="text-red-500  flex justify-center mt-4  italic font-[Roboto] font-bold text-[18px]">
                  {errors.company.type === 'required' ? 'Company is required' : 'Invalid Company Name'}
                </span>
                            )}
                        </div>
                        <div className="mb-4">
                            <label className=" labelInput block mb-4 text-[#274C5B] font-[Roboto] text-[18px] font-bold"
                                   htmlFor="company">Subject</label>
                            <input
                                className=" placeHolderPart inputField sm:w-[260px] md:w-[270px] lg:w-[380px] xl:w-[400px] px-4 py-2 border font-normal italic font-[Roboto] text-[18px] text-[#ABABAB] rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500 border-[#7EB693]"
                                type="text"
                                id="subject"
                                placeholder="How can we help"
                                {...register('subject', {required: true, pattern: /[A-Z]/})}
                            />
                            {errors.subject && (
                                <span
                                    className="text-red-500  flex justify-center mt-4 italic font-[Roboto] font-bold text-[18px]">
                  {errors.subject.type === 'required' ? 'Subject is required' : 'Invalid Subject Name'}
                </span>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col items-center mt-8">
                        <div>
                            <label htmlFor="comment"
                                   className="labelInput block ml-4 mb-4  text-[#274C5B] font-[Roboto] text-[18px] font-bold">Message</label>
                            <div
                                className=" textAreaDiv textAreaPart px-4 py-2  rounded-t-lg w-[32rem] sm:w-[30rem] md:w-[40rem] lg:w-[53rem] xl:w-[62rem]">
                   <textarea
                       id="comment"
                       name="comment"
                       rows="9"
                       className="textAreaPart  placeHolderPart font-[Roboto] text-[18px] font-normal italic text-[#ABABAB] w-full px-0 text-sm pt-[2rem] pl-[1rem] text-gray-900 bg-white border border-[#7EB693] focus:ring-0 "
                       placeholder="Hello there, I would like to talk about how to..."
                       {...register('comment', {required: true})}
                   ></textarea>

                            </div>
                        </div>

                    </div>
                    <div
                        className="flex justify-center flex  mt-8 mb-16 sm:ml-0 sm:justify-center sm:mt-8 sm:mb-16 md:ml-0 md:justify-center md:mt-8 md:mb-16 lg:flex lg:justify-center lg:ml-0 lg:mt-8 lg:mb-16 xl:ml-[9.8rem] xl:mt-8 xl:justify-start xl:mb-16">
                        <button
                            className="bg-[#274C5B] hover:bg-blue-600 text-white   px-[22px] py-[14px]  sm:px-[20px] sm:py-[18px]  md:px-[24px] md:py-[19px] lg:px-[26px] lg:py-[19.2px] xl:px-[28px] xl:py-[19.5px] rounded"
                            type="submit">Send Message
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FourComponent;
