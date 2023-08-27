import React from "react";
import MenuItems from "./MenuItems";
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';

import NavItem from './NavItem';
// import NavGroup from './NavGroup/NavGroup';


const SidebarItems = ({toggleMobileSidebar}: any) => {
    // const {pathname } = useRouter();
    // const pathDirect = pathname;
    const pathname = usePathname();
    return(
        <>
            {
                MenuItems.map((item)=> {
                    return(
                        <NavItem item={ item } url={ pathname }/>
                    );
                })
            }
        </>
    )
}

export default SidebarItems;