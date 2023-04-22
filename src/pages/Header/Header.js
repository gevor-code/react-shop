import React, {useState} from 'react';
import {Link} from "react-router-dom";
import MenuIcon from "../../assets/svg/MenuIcon";
import HeaderLogo from "../../assets/svg/HeaderLogo";
import SearchIcon from "../../assets/svg/SearchIcon";
import ShopIcon from "../../assets/svg/ShopIcon";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className="App ">
            <div className="bg-white max-w=[1980] mx-auto	flex shink-0 justify-evenly items-center h-header">
                <div className="visible lg:visible visilbe lg:invisible">
                    <MenuIcon/>
                </div>
                <div className="flex justify-evenly items-center w-fit hidden lg:flex">
                    <HeaderLogo/>
                    <p className="text-large font-bold text-text ml-2 mr-2">Organick</p>
                </div>
                <div className="flex justify-between items-center w-fit hidden lg:flex">
                    <ul className='hidden md:flex'>
                    <li><Link to="/" className="text-medium font-bold ml-2 text-xl mr-4  p-6 text-text"> Home </Link></li>
                        <li><Link to="/about" className="text-medium font-bold ml-2 text-xl mr-4  p-6 text-text"> About </Link></li>
                        <li><Link to="/pages" className="text-medium font-bold text-xl ml-2 mr-4  p-6 text-text"> Pages </Link></li>
                        <li><Link to="/shops" className="text-medium font-bold text-xl ml-2 mr-4 p-6 text-text"> Shops </Link></li>
                    <li><Link to="/projects" className="text-medium font-bold text-xl  ml-2 mr-4  p-6 text-text"> Projects </Link></li>
                    <li><Link to="/news" className="text-medium font-bold text-xl ml-2 mr-4  p-6 text-text"> News </Link></li>
                    </ul>
                </div>
                <div className="flex justify-end items-center w-fit relative">
                    <input className="bg-semiWhite w-input h-input rounded-md"/>
                    <div
                        className="bg-lightGreen flex justify-center items-center rounded-brFull w-circle h-circle absolute mr-2">
                        <SearchIcon/>
                    </div>
                </div>
                <div className="h-input border border-border rounded-md flex justify-evenly items-center">
                    <div className=" flex justify-center items-center  w-circle h-circle ml-1">
                        <ShopIcon/>
                    </div>
                    <p className="text-medium font-bold text-text m-2">Cart(0)</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
