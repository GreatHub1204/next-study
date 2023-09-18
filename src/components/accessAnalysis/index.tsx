import React from "react";
import Title from '../shared/Title';
import SearchingField from "./component/searching";
import SumTable from "./component/sumtable";
import CommonTable from "../shared/commontable";
import Pagination from "../shared/pagination";
import { AccessAnalysisClientHeader } from "@/src/const/tableheader";

const AccessAnalysis = () => {
    return(
        <div>
            <Title title="アクセス解析"/>
            <SearchingField/>
            <div className="mt-[20px]">
                <SumTable/>
                <Pagination margin="mt-[20px]"/>
                <CommonTable margin="mt-[20px]" headertitle={AccessAnalysisClientHeader}/>
            </div>
            
        </div>
    )
}

export default AccessAnalysis;