
import Logo from '../shared/logo/Logo';
import SidebarItems from './SidebarItems';
import React from "react";


interface ItemType {
    isMobileSidebarOpen:  boolean;
    onSidebarClose: (event: React.MouseEvent<HTMLElement>) => void;
    isSidebarOpen: boolean;
}

const Sidebar = () => {
    const sidebarWidth = '270px';
    return (   
        <div className='w-1/6 pt-6 pl-5 pr-5 shadow-[0_7px_30px_-10px_rgba(0,0,0,0.45)]'>  
            <Logo/>
            <SidebarItems/>
        </div>
    )
    
    
}

export default Sidebar;