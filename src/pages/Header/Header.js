import React, {useEffect, useRef, useState} from 'react';
import {Link} from "react-router-dom";
import HeaderLogo from "../../assets/svg/HeaderLogo";
import {useCookies} from "react-cookie";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const [isOpen, setIsOpen] = useState(false);
    const divRef = useRef(null);
    const [cookies, removeCookie] = useCookies(['userData'])

    const logout = () => {
        removeCookie('userData')
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event) => {
        if (divRef.current && !divRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className=" bg-white shadow-xl sticky z-10 top-0">
            <div className=" header-container ">
                <div>
                    <nav className="pt-[16px] pb-[16px] relative">

                        <div className="  flex items-center
                flex-wrap
                sm:flex sm:items-center
                md:justify-center md:items-center md:gap-4 md:flex-wrap
                 lg:flex lg:flex-wrap lg:justify-between lg:items-center
                  xl:flex xl:justify-between xl:items-center 2xl:flex justify-between
                  md:items-center
                  flex-row flex-nowrap">

                            <div className="flex justify-evenly items-center w-fit ">
                                <HeaderLogo className="hidden md:block"/>
                                <p className="text-large font-bold text-text ml-2 mr-2 hidden md:block ">Organick</p>
                                <span className="md:hidden block mx-2" onClick={toggleMenu}>
          {isMenuOpen ? <img src="/assets/images/close.svg" width="45" height="45" alt=""/> :
              <img src="/assets/images/menu.svg" width="48" height="38" alt=""/>} </span>

                                <ul className={`md:flex md:items-center md:static uppercase absolute  w-full left-0 md:w-auto md:py-0 py-4 md:opacity-100 ${
                                    isMenuOpen ? "bg-border opacity-100 z-10 top-[100px] bg-semiWhite uppercase md:top-[158px] " : "opacity-0 top-[-400px]"
                                } transition-all ease-in duration-400 `}>
                                    <li className="mx-4 my-6 md:my-0"><Link to="/"
                                                                            className="text-medium font-bold text-xl text-text hover:text-cyan-500 duration-500">Home</Link>
                                    </li>
                                    <li className="mx-4 my-6 md:my-0"><Link to="/about"
                                                                            className="text-medium font-bold text-xl text-text hover:text-cyan-500 duration-500">About</Link>
                                    </li>
                                    <li className="mx-4 my-6 md:my-0"><Link to="/shop"
                                                                            className="text-medium font-bold text-xl text-text hover:text-cyan-500 duration-500">Shop</Link>
                                    </li>


                                </ul>

                            </div>

                            <div className="flex justify-center items-center">
                                <div ref={divRef}>
                                    <div onClick={toggleOpen}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth="2" stroke="currentColor" aria-hidden="true"
                                             className="flex-shrink-0 h-[2rem] w-[2rem] text-hyugapurple-500 group-hover:text-hyugayellow-900">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                        </svg>


                                        {isOpen
                                            ?
                                            cookies.userData !== 'undefined' ? (
                                                <div
                                                    className="flex items-center static  absolute py-[4px] px-[2rem] sm:py-[6px] sm:px-[4rem] md:py-[6px] md:px-[4rem] lg:py-[23px] lg:px-[4rem] xl:py-[23px] xl:px-[4rem] 2xl:py-[23px] 2xl:px-[4rem] rounded-xl bg-border opacity-100 z-10 right-[28%] top-[89px] sm:right-[34%] sm:top-[100px]  md:right-[60%] md:top-[173px] lg:right-[22%] lg:top-[100px] xl:right-[18%] xl:top-[100px] 2xl:right-[18%] 2xl:top-[100px] bg-semiWhite">

                                                    <div className="m-4 flex flex-col  sm:gap-2 md:gap-0 lg:gap-2 xl:gap-4">
                                                        <p className="text-medium font-bold md:text-[16px] lg:text-xl xl:text-xl text-text">
                                                            {cookies.userData?.firstname} {cookies.userData?.lastname}
                                                        </p>
                                                        <button className="text-text ml-2" onClick={()=>logout()}>Logout</button>
                                                    </div>
                                                </div>

                                                ) : <div
                                                className="flex items-center static  absolute py-[4px] px-[4rem] sm:py-[6px] sm:px-[4rem] md:py-[6px] md:px-[4rem] lg:py-[23px] lg:px-[4rem] xl:py-[23px] xl:px-[4rem] 2xl:py-[23px] 2xl:px-[4rem] rounded-xl bg-border opacity-100 z-10 right-[28%] top-[89px] sm:right-[34%] sm:top-[100px]  md:right-[66%] md:top-[173px] lg:right-[22%] lg:top-[100px] xl:right-[18%] xl:top-[100px] 2xl:right-[18%] 2xl:top-[100px] bg-semiWhite">
                                                <ul className="flex flex-col uppercase">
                                                    <li className="mx-4 my-6 md:my-0 list-none"><Link to="/signin"
                                                                                                      className=" hover:text-cyan-500 duration-500 font-[Roboto] font-extrabold text-[#274c5b] text-[24px] italic">Sign
                                                        In</Link></li>
                                                    <li className="mx-4 my-6 md:my-0 list-none"><Link to="/signup"
                                                                                                      className="hover:text-cyan-500 duration-500 font-[Roboto] font-extrabold text-[#274c5b] text-[24px] italic">Sign
                                                        Up</Link></li>
                                                </ul>
                                            </div>


                                            : null
                                        }
                                    </div>
                                </div>
                                <div className="flex justify-end relative items-center">
                                    <input
                                        className="bg-semiWhite  h-input3 sm:h-input rounded-md  w-[8rem] sm:w-48 md:w-48 lg:w-48 pl-[16px] xl:w-48 md:w-input"/>
                                    <div
                                        className="bg-lightGreen flex justify-center items-center rounded-brFull w-circle3 h-circle3 sm:w-circle2 sm:h-circle2 md:w-circle2 md:h-circle2 lg:w-circle2 lg:h-circle2 xl:h-circle2 xl:w-circle2 absolute mr-2">
                                        <img src="/assets/images/search.svg" width="57" height="56"/>
                                    </div>
                                </div>
                                <div
                                    className=" h-input3 sm:h-input md:h-input lg:h-input xl:h-input border border-border rounded-md flex justify-evenly items-center">
                                    <div className=" flex justify-center items-center  w-circle h-circle ml-1">
                                        <img src="/assets/images/shop.svg"
                                             className=" w-[35px] sm:w-[49px] md:w-[49px] lg:w-[49px] xl:w-[49px]"
                                             height="56"/>
                                    </div>
                                    <p className=" text-[12px] sm:text-medium  md:text-medium lg:text-medium xl:text-medium font-bold text-text m-2">Cart
                                        (0)</p>
                                </div>

                            </div>
                        </div>

                    </nav>
                </div>
            </div>
        </div>


    )
        ;
};

export default Navbar;
