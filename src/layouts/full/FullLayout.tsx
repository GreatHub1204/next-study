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
        <div className="flex">
            <Sidebar
            // isSidebarOpen={isSidebarOpen} 
            // isMobileSidebarOpen={isMobileSidebarOpen}
            // onSidebarClose={() => setMobileSidebarOpen(false)}
            />
            {children}
        </div>

    )
}


export default FullLayout;