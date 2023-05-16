import React from 'react';

const Item = ({Links, title}) => {
    return (
        <ul className="grid justify-items-center sm:justify-items-center md:justify-items-start lg:justify-items-start xl:justify-items-start">
            <h1 className="text-[#274C5B] text-large font-bold text-text ">{title}</h1>
            {
         Links.map((link)=>(
             <li key={link.name}>
                 <a className="text-black hover:text-teal-400 duration-300 text-sm cursor-pointer leading-5" href={link.link}>{link.name}</a>
             </li>
         ))}
        </ul>
    );
};

export default Item;
