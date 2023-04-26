import Item from "./Item";
import {Utility_Pages, Contact_Us, Icons,} from "./Menus"
import HeaderLogo from "../../assets/svg/HeaderLogo";
import React from "react";
import SocialIcons from "./SocialIcons";

const ItemsContainer = () => {
    return (
        <div
            className="grid justify-items-center grid-cols-1 sm:grid-cols-1  sm:justify-items-center lg:grid-cols-1 2xl:grid-cols-3 xl:grid-cols-1 md:grid-cols-1 md:gap-12 gap-12 sm:px-8 sm:gap-8 px-5 py-16 ">
            <Item Links={Contact_Us} title="Contact Us"/>
            <div className="grid justify-items-center">
                <div className="flex">
                    <HeaderLogo/>
                    <p className="text-large font-bold text-text ml-2 mr-2 ">Organick</p>
                </div>
                <div className="grid justify-items-center text-center w-[543px] h-[60px] grid-flow-row">
                    <p className="text-[#525C60]">Simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum simply dummy text of the printing </p>
                    <SocialIcons/>

                </div>
            </div>
            <Item Links={Utility_Pages} title="Utility Pages"/>
        </div>
    );
};

export default ItemsContainer;
