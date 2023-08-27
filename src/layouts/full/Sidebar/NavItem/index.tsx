import React from "react";

import Link from "next/link";


type NavGroup = {
    [x:string]: any;
    title?: string;
    href?: any;
    onClick?: React.MouseEvent<HTMLButtonElement, MouseEvent>;
}

interface ItemType {
    item : NavGroup;
     url : string;
}


const NavItem = ({item, url}:ItemType) => {
    const isActive = url === item.href;

    return(
        <div className={isActive?"group mt-3 p-2 w-full bg-[#5D87FF] rounded-[8px] cursor-pointer ": "group mt-3 p-2 w-full hover:bg-[#5D87FF] hover:bg-opacity-10 rounded-[8px] cursor-pointer "}>
            <Link href={item.href} className={isActive?"text-sm font-bold text-white":"text-sm font-bold text-gray-500  group-hover:text-[#5D87FF]"}>{item.title}</Link>
        </div>        
    )
}


export default NavItem;