import React from "react";

import Link from "next/link";


type NavGoup = {
    [x:string]: any;
    title?: string;
    href?: any;
    onClick?: React.MouseEvent<HTMLButtonElement, MouseEvent>;
}

interface ItemType {
    item:NavGoup;
}

const NavItem = ({item}:ItemType) => {
    return(
        <div>
            <Link href={item.href}>{item.title}</Link>
        </div>        
    )
}


export default NavItem;