import React, {useEffect, useRef, useState} from 'react';
import {Link} from "react-router-dom";
import HeaderLogo from "../../assets/svg/HeaderLogo";
import {useCookies} from "react-cookie";
import {useDispatch, useSelector,} from "react-redux";
import {quantityCart} from "../../store/cart";

const Navbar = () => {
    const dispatch = useDispatch()
    const cartItemCount = useSelector((state) => state.cart.quantity);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const [isOpen, setIsOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const divRef = useRef(null);
    const [cookies, removeCookie] = useCookies(['userData'])

    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            const parsedCart = JSON.parse(storedCart);
            const cartCount = parsedCart.length;
            dispatch(quantityCart(cartCount));
        }
    }, []);


    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const logout = () => {
        removeCookie('userData')
    }
    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };
    const handleClickOutside = (event) => {
        if (divRef.current && !divRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };


    const deleteCartItem = (itemId) => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            const parsedCart = JSON.parse(storedCart);
            const updatedCart = parsedCart.filter((item) => item.id !== itemId);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            const updatedCartCount = updatedCart.length;
            dispatch(quantityCart(updatedCartCount));
        }

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
                 lg:flex lg:flex-wrap lg:justify-center lg:items-center
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
                                                                            className=" font-bold text-xl text-text hover:text-cyan-500 duration-500">Home</Link>
                                    </li>
                                    <li className="mx-4 my-6 md:my-0"><Link to="/about"
                                                                            className=" font-bold text-xl text-text hover:text-cyan-500 duration-500">About</Link>
                                    </li>
                                    <li className="mx-4 my-6 md:my-0"><Link to="/shop"
                                                                            className=" font-bold text-xl text-text hover:text-cyan-500 duration-500">Shop</Link>
                                    </li>
                                    <li className="mx-4 my-6 md:my-0"><Link to="/blog"
                                                                            className=" font-bold text-xl text-text hover:text-cyan-500 duration-500">Blog</Link>
                                    </li>
                                    <li className="mx-4 my-6 md:my-0"><Link to="/contact-us"
                                                                            className=" font-bold  text-xl text-text hover:text-cyan-500 duration-500">Contact
                                        Us</Link>
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
                                        <img src="/assets/images/search.svg" width="57" height="56" alt=""/>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div
                                        className="h-input3 sm:h-input md:h-input lg:h-input xl:h-input border border-border rounded-md flex justify-evenly items-center">
                                        <div className="flex justify-center items-center w-circle h-circle ml-1">
                                            <img
                                                src="/assets/images/shop.svg"
                                                className="w-[35px] sm:w-[49px] md:w-[49px] lg:w-[49px] xl:w-[49px]"
                                                height="56"
                                                alt=""
                                            />
                                        </div>

                                        <p className="text-[12px] sm:text-medium md:text-medium lg:text-medium xl:text-medium font-bold text-text m-2"
                                           onClick={toggleCart}>Cart ({cartItemCount})
                                        </p>
                                    </div>

                                    {isCartOpen && (
                                        <div ref={divRef}
                                             className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm">
                                            <div
                                                className=" openCart flex pl-[1rem] pt-[8rem]  sm:pl-[1rem] sm:pt-[8rem] md:pl-[1rem] md:pt-[6rem] lg:pl-[2rem] lg:pt-[6rem] xl:pl-[3rem] xl:pt-[3rem] 2xl:pl-[3rem] 2xl:pt-[3rem] absolute  top-[90px] right-[-19px] sm:top-[100px] sm:right-[-19px] md:top-[170px] md:right-[-19px] lg:top-[100px] lg:right-[-19px] xl:top-[100px] xl:right-[-19px] 2lx:top-[100px] 2xl:right-[-19px] rounded-xl p-4 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-md w-[85%]  sm:w-[80%] md:w-[68%] lg:w-[60%] xl:w-[50%] 2xl:w-[50%] h-full">
                                                <div className="flex justify-end">
                                                    <button
                                                        className=" absolute  top-[20px] right-[60px] sm:top-[20px] sm:right-[60px] md:top-[20px] md:right-[60px] lg:top-[20px] lg:right-[60px] xl:top-[20px] xl:right-[60px]  2xl:top-[20px] 2xl:right-[60px] text-white hover:text-gray-300 transition-colors duration-200"
                                                        onClick={toggleCart}
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-16 w-16"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M11.414 10L16.707 4.707a1 1 0 010 1.414L12.828 10l3.879 3.879a1 1 0 01-1.414 1.414L11.414 11l-3.879 3.879a1 1 0 01-1.414-1.414L10 11.586 6.121 7.707a1 1 0 011.414-1.414L11.414 10z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>
                                                {localStorage.getItem("cart") ? (
                                                    <div className="flex flex-col gap-10">
                                                        {JSON.parse(localStorage.getItem("cart")).map((item, index) => (
                                                            <div key={index}>
                                                                <div
                                                                    className="flex items-center gap-8 sm:gap-8 md:gap-8 lg:gap-8 xl:gap-8 2xl:gap-8 cartGap">
                                                                    <img src={item.images} width="100px" height="200px"
                                                                         className="rounded-[2rem]" alt=""/>
                                                                    <div>
                                                                        <p className="font-[Roboto] text-[23px]  sm:text-[29px] md:text-[29px] lg:text-[29px] xl:text-[29px] 2xl:text-[29px] text-white font-extrabold cartText openCartText">{item.title}</p>
                                                                        <div className="flex gap-8 priceGap">
                                                                            <p className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl text-green-200">{item.special_price}</p>
                                                                            <p className="line-through text-[18px] sm:text-[24px] md:text-[24px] lg:text-[24px] lg:text-[24px] xl:text-[24px] 2xl:text-[24px] text-blue-50 cartPrice openCartPrice ">{item.price}</p>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <button onClick={() => deleteCartItem(item.id)}>
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="25"
                                                                                height="25"
                                                                                fill="currentColor"
                                                                                className="bi bi-trash text-red"
                                                                                viewBox="0 0 16 16"
                                                                            >
                                                                                <path
                                                                                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                                                                                    fill="red"
                                                                                ></path>
                                                                                <path
                                                                                    fillRule="evenodd"
                                                                                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                                                                    fill="red"
                                                                                ></path>
                                                                            </svg>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <p className="flex font-[Roboto] italic absolute  top-[40%] right-[22%] sm:top-[40%] sm:right-[22%] md:top-[40%] md:right-[18%]  lg:top-[40%] lg:right-[22%] xl:top-[40%] xl:right-[20%] 2xl:top-[40%] 2xl:right-[26%] text-amber-100 items-center text-[30px] sm:text-[40px] md:text-[40px] lg:text-[40px] xl:text-[38px] ">Your
                                                        cart is empty.</p>
                                                )}
                                            </div>
                                        </div>
                                    )}
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
