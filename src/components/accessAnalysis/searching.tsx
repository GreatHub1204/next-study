import React from 'react';
import InputTag from '../shared/InputTag';
import ButtonTag from '../shared/ButtonTag';



const SearchingField = () =>{
    return(
        <>
            <div className="mt-[15px]">
                <InputTag type="date"  classvalue="border border-black w-64 rounded-[4px] outline-0 mr-[5px] p-[5px]"/>~
                <InputTag type="date" classvalue="border border-black w-64 rounded-[4px] outline-0 ml-[5px] p-[5px]"/>
            </div>
            <div className="mt-[15px]">
                <InputTag type="text" classvalue="border border-black w-64 rounded-[4px] outline-0 mr-[5px] p-[5px]"/>
                <ButtonTag type="button" buttonName="Search" classvalue="bg-[#6C757D] text-white p-[5px] pr-[10px] pl-[10px] ml-[5px] rounded-[4px] hover:bg-[#6C757D]/75"/>
                <ButtonTag type="button" buttonName="Customer Filtering" classvalue="bg-[#0E6EFD] text-white p-[5px] pr-[10px] pl-[10px] ml-[5px] rounded-[4px] hover:bg-[#0E6EFD]/75"/>
                <ButtonTag type="button" buttonName="CSV Download" classvalue="bg-[#6C757D] text-white p-[5px] pr-[10px] pl-[10px] ml-[5px] rounded-[4px] hover:bg-[#6C757D]/75"/>
            </div>
        </>
    )
}


export default SearchingField;