import React from "react";
import MenuItems from "./MenuItems";
import { useRouter } from 'next/router';
import NavItem from './NavItem';
// import NavGroup from './NavGroup/NavGroup';


const SidebarItems = ({toggleMobileSidebar}: any) => {
    const {pathname } = useRouter();
    // const pathDirect = pathname;

    return(
        <>
            {
                MenuItems.map((item)=> {
                    return(
                        <NavItem item={item}/>
                    );
                })
            }
        </>
    )
}

export default SidebarItems;