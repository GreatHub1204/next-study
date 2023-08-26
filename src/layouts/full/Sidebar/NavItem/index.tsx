import React from "react";

import Link from "next/link";


type NavGroup = {
    [x:string]: any;
    title?: string;
    href?: any;
    onClick?: React.MouseEvent<HTMLButtonElement, MouseEvent>;
}

interface ItemType {
    item:NavGroup;
}

const NavItem = ({item}:ItemType) => {
    return(
        <div className="group mt-3 p-2 w-full hover:bg-[#5D87FF] rounded-[8px]">
            <Link href={item.href} className="text-sm font-bold text-gray-500  group-hover:text-white">{item.title}</Link>
        </div>        
    )
}


export default NavItem;