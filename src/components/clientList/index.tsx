import React from "react";
import Title from "../shared/Title";
import NewSignUp from  "./component/signup"
import SearchingField from "./component/searching";
import Pagination from "../shared/pagination";
import CommonTable from "../shared/commontable";
import { ClientTableHeader } from "@/src/const/tableheader";
const ClientList = () =>{
    return(
        <>
            <div>
                <Title title="顧客一覧"/>
                <NewSignUp/>
                <SearchingField/>
            </div>
            <div className="">
                <Pagination margin="mt-[20px]"/>
                <CommonTable margin="mt-[20px]" headertitle={ClientTableHeader}/>
            </div>
        </>
        
    )
} 

export default ClientList;