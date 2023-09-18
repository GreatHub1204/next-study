import React from "react";
import MenuItems from "./MenuItems";
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';

import NavItem from './NavItem';
// import NavGroup from './NavGroup/NavGroup';


const SidebarItems = ({toggleMobileSidebar}: any) => {

    const pathname = usePathname();
    return(
        <>
            {
                MenuItems.map((item, index)=> {
                    return(
                        <NavItem key={index} item={ item } url={ pathname }/>
                    );
                })
            }
        </>
    )
}

export default SidebarItems;