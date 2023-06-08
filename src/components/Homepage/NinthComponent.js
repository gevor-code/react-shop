import React, {useEffect, useState} from 'react';
import ArrowRightSVG from "../../assets/svg/ArrowRightSVG";
import {useDispatch} from "react-redux";
import {getBlog, getBlogById} from "../../store/user";
import {toast} from "react-toastify";
import moment from "moment";
import {useNavigate} from "react-router";

const NinthComponent = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [myBlog, setMyBlog] = useState([]);


    useEffect(() => {
        getMyBlogs();
    }, []);
    const getMyBlogs = async () => {
        try {
            const response = await dispatch(getBlog());
            if (response) {
                setMyBlog(response);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    const blogInfo = async (blogId) => {
        try {
            const blog = await dispatch(getBlogById(blogId));
            navigate(`/blog-info/${blogId}`, {
                state: {
                    description: blog.description,
                    title: blog.title,
                    images: blog.images
                }
            });
        } catch (error) {
            toast.error(error.message);
        }
    };
    const handleClick=()=>{
        navigate('/blog')
    }
    return (
        <div className="pb-[30px]">
            <div>

                <div
                    className=" flex main-container justify-around  text-center sm:text-start md:text-start lg:text-start xl:text-start gap-6 pt-8 flex-wrap sm:justify-around md:justify-around lg:justify-between xl:justify-between ">
                    <div
                        className="flex flex-col items-center gap-4 sm:items-baseline md:items-baseline lg:items-baseline xl:items-baseline">
                        <span className="text-[#7EB693] font-[Yellow-Tail] italic text-3xl font-normal">News</span>
                        <span
                            className="text-[#274C5B] font-[Roboto] font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] xl:text-5xl sm:w-[23rem] md:w-[30rem] lg:w-[40rem] xl:w-[50rem]">Discover weekly content about organic food, & more</span>
                    </div>
                    <div className="flex flex-col justify-center ">
                        <button onClick={()=>handleClick()}
                            className="bg-white border-2 border-[#274C5B] rounded-xl p-2 hover:bg-[#d3dce2] hover:duration-500">
                            <span className="text-xs text-[#274C5B] font-bold p-5 ">More News</span></button>
                    </div>
                </div>
                <div
                    className=" pt-[4rem] sm:grid sm:justify-items-center sm:grid-cols-1 md:grid md:justify-items-center md:grid-cols-1 lg:grid  lg:grid-cols-2 xl:grid xl:grid-cols-2 2xl:grid 2xl:grid-cols-2 p-0 blogDiv main-container">
                    {myBlog &&
                        myBlog.slice(4).map((blog) => (
                            <div key={blog.id} results={2} className=' mt-[4rem] '>
                                {blog.images &&
                                    blog.images.map((image, index) => (
                                        <div
                                            className="mx-0 sm:mx-[10px] md:mx-[10px] lg:mx-[10px]  xl:mx-[10px] flex flex-col justify-around  relative"
                                            key={index}>
                                            <img src={image}
                                                 className="  sm:w-480 md:w-480 lg:w-490 xl:w-580 2xl:w-677 rounded-0 sm:rounded-[40px] md:rounded-[40px] lg:rounded-[40px] xl:rounded-[40px] 2xl:rounded-[40px]"
                                                 alt=""/>
                                            <div
                                                className="absolute bottom-[72%] left-[3%] sm:bottom-[72%] sm:left-[3%] md:bottom-[72%] md:left-[3%] lg:bottom-[73%] lg:left-[3%] xl:bottom-[80%] xl:left-[3%] flex items-center justify-center text-center bg-[white] w-[76px] h-[76px] sm:w-[82px] sm:h-[82px] 2xl:w-[82px] 2xl:h-[82px] rounded-full">
                                                <span
                                                    className="font-[Roboto] text-[20px] font-extrabold text-[#274C5B]">
                          {moment(blog.created_at, "MMMM Do YYYY, h:mm:ss a").format("MMM Do ")}
                        </span>
                                            </div>
                                        </div>
                                    ))}
                                <div
                                    className=" shadow-2xl sm:w-[463px] sm:h-[188px] md:w-[500px] md:h-[200px]  lg:w-[400px] lg:h-[230px] xl:w-[530px] xl:h-[240px] bg-[#fff] rounded-[31px] flex flex-col items-center justify-center p-[12px]  sm:translate-y-[-70%] sm:translate-x-[17%] md:translate-y-[-70%] md:translate-x-[20%] lg:translate-y-[-62%] lg:translate-x-[6%] xl:translate-y-[-83%] xl:translate-x-[6%]">
                                    <div className="flex flex-col gap-[2px]">
                                        <div className="flex">
                                            <div
                                                className="flex my-[7px] gap-[8px] font-[Roboto] text-[18px] text-[#274C5B] font-normal ">
                                                <img src="/assets/images/blogUser.png" width="18" height="20" alt=""/>
                                                By {blog.userData.firstname} {blog.userData.lastname}
                                            </div>
                                        </div>
                                        <h1 className="text-[#274C5B]  lg:text-[1.2rem]  xl:text-[1.4rem] 2xl:text-[1.4rem] font-[Roboto] font-extrabold">
                                            {blog.title}
                                        </h1>
                                        <span
                                            className="text-[#525C60] font-[Opens Sans] text-lg font-normal overflow-ellipsis overflow-hidden whitespace-normal line-clamp-2 ">
                      {blog.description}
                    </span>
                                        <button
                                            onClick={() => blogInfo(blog.id)}
                                            className="text-[#274C5B] pt-[19px] flex items-center gap-4 font-[Roboto] font-extrabold text-[20px]">
                                            Read More <ArrowRightSVG/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>

            </div>
        </div>
    );
};

export default NinthComponent;
