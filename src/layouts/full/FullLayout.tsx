import React, { useState } from "react";

import Sidebar from './Sidebar/Sidebar';
import Main from "./main/Main";


interface Props {
    children: React.ReactNode;
}

const FullLayout: React.FC<Props> = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen">
            <Sidebar/>
            <div className="m-10 p-10 rounded-[20px] shadow-[0_7px_30px_-10px_rgba(0,0,0,0.45)] w-screen">
                {children}
            </div>            
        </div>
    )
}


export default FullLayout;