import React, {useState} from 'react';
import {Link} from "react-router-dom";
import MenuIcon from "../../assets/svg/MenuIcon";
import HeaderLogo from "../../assets/svg/HeaderLogo";
import SearchIcon from "../../assets/svg/SearchIcon";
import ShopIcon from "../../assets/svg/ShopIcon";
import CloseIcon from "../../assets/svg/CloseIcon";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className="header-container">
            <nav className="p-5 bg-white">

                <div className="flex items-center
                flex-wrap
                sm:flex sm:items-center
                md:justify-center md:items-center md:flex-wrap
                 lg:flex lg:flex-wrap lg:justify-center lg:items-center
                  xl:flex xl:justify-center xl:items-center 2xl:flex justify-center
                  md:items-center
                  h-header">

                    <div className="flex justify-evenly items-center w-fit">
                        <HeaderLogo className="hidden md:block"/>
                        <p className="text-large font-bold text-text ml-2 mr-2 hidden md:block ">Organick</p>
                        <span className="md:hidden block mx-2" onClick={toggleMenu}>
          {isMenuOpen ? <CloseIcon/> : <MenuIcon/>}
        </span>
                    </div>
                    <ul className={`md:flex md:items-center md:static uppercase absolute  w-full left-0 md:w-auto md:py-0 py-4 md:opacity-100 ${
                        isMenuOpen ? "bg-border opacity-100 top-[160px] bg-semiWhite uppercase md:top-[158px] " : "opacity-0 top-[-400px]"
                    } transition-all ease-in duration-400 `}>
                        <li className="mx-4 my-6 md:my-0"><Link to="/"
                                                                className="text-medium font-bold text-xl text-text hover:text-cyan-500 duration-500">Home</Link>
                        </li>
                        <li className="mx-4 my-6 md:my-0"><Link to="/about"
                                                                className="text-medium font-bold text-xl text-text hover:text-cyan-500 duration-500">About</Link>
                        </li>
                        <li className="mx-4 my-6 md:my-0"><Link to="/pages"
                                                                className="text-medium font-bold text-xl text-text hover:text-cyan-500 duration-500">Pages</Link>
                        </li>
                        <li className="mx-4 my-6 md:my-0"><Link to="/shops"
                                                                className="text-medium font-bold text-xl text-text hover:text-cyan-500 duration-500">Shops</Link>
                        </li>
                        <li className="mx-4 my-6 md:my-0"><Link to="/projects"
                                                                className="text-medium font-bold text-xl text-text hover:text-cyan-500 duration-500">Projects</Link>
                        </li>
                        <li className="mx-4 my-6 md:my-0"><Link to="/news"
                                                                className="text-medium font-bold text-xl text-text hover:text-cyan-500 duration-500">News</Link>
                        </li>
                    </ul>

                    <div className="flex justify-center items-center">
                        <div className="flex justify-end relative items-center">
                            <input className="bg-semiWhite  h-input rounded-md   w-48 md:w-input"/>
                            <div
                                className="bg-lightGreen flex justify-center items-center rounded-brFull w-circle2 h-circle2 absolute mr-2">
                                <SearchIcon/>
                            </div>
                        </div>
                        <div className="h-input border border-border rounded-md flex justify-evenly items-center">
                            <div className=" flex justify-center items-center  w-circle h-circle ml-1">
                                <ShopIcon/>
                            </div>
                            <p className=" text-medium font-bold text-text m-2">Cart (0)</p>
                        </div>
                    </div>
                </div>
            </nav>
        </div>


    )
        ;
};

export default Navbar;
