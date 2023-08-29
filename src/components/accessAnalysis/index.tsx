import React from "react";
import Title from '../shared/Title';
import SearchingField from "./component/searching";
import SumTable from "./component/sumtable";
import CommonTable from "./component/commontable";
import Pagination from "./component/pagination";

const AccessAnalysis = () => {
    return(
        <div>
            <Title title="ACCESS ANALYSIS"/>
            <SearchingField/>
            <div className="mt-[20px]">
                <SumTable/>
                <Pagination margin="mt-[20px]"/>
                <CommonTable margin="mt-[20px]" />
            </div>
            
        </div>
    )
}

export default AccessAnalysis;