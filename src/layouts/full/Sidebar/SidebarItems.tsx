import React from "react";
import Menuitems from "./MenuItems";
import { useRouter } from 'next/router';
import NavItem from './NavItem';
// import NavGroup from './NavGroup/NavGroup';


const SidebarItems = ({toggleMobileSidebar}: any) => {
    const {pathname } = useRouter();
    // const pathDirect = pathname;

    return(
        <>
            {
                Menuitems.map((item)=> {
                    return(
                        <NavItem item={item}/>
                    );
                })
            }
        </>
    )
}

export default SidebarItems;