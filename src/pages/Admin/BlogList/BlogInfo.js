import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {getBlog, getBlogById} from "../../../store/user";
import {toast} from "react-toastify";
import {useLocation} from "react-router";

const BlogInfo = () => {
    const location = useLocation();
    const title=location.state?.title || '';
    const description = location.state?.description || '';
    const images=location.state?.images || '';

    return (
        <div className="main-container flex justify-center">
        <div className="max-w-sm rounded overflow-hidden shadow-lg my-[3rem]">
            <img className="w-full rounded-[30px] " src={images} alt=""/>
                <div className="px-6 py-4 flex flex-col gap-6 bg-orange-100">
                    <div className="text-[#274C5B]  text-[1.1rem] font-[Roboto] font-extrabold">
                     {title}
                    </div>
                    <p className="text-gray-700 text-base">
                        {description}
                    </p>
                </div>
        </div>
        </div>
    );
};
export default BlogInfo