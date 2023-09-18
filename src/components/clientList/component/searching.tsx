import React from "react";
import InputTag from "../../shared/InputTag";
import ButtonTag from "../../shared/ButtonTag";


const SearchingField = () => {
    return(
        <>
            <div className="mt-[15px]">
                <InputTag type="text" placeholder="半角英数字またはアンダーバー　登録後変更不可" classvalue="border border-black w-56 rounded-[4px] outline-0 mr-[5px] p-[5px]"/>
                <ButtonTag type="button" buttonName="検索" classvalue="bg-[#6C757D] text-white p-[5px] pr-[10px] pl-[10px] ml-[5px] rounded-[4px] hover:bg-[#6C757D]/75"/>
                <ButtonTag type="button" buttonName="配信作成" classvalue="bg-[#0E6EFD] text-white p-[5px] pr-[10px] pl-[10px] ml-[5px] rounded-[4px] hover:bg-[#0E6EFD]/75"/>
                <ButtonTag type="button" buttonName="csv出力" classvalue="bg-[#6C757D] text-white p-[5px] pr-[10px] pl-[10px] ml-[5px] rounded-[4px] hover:bg-[#6C757D]/75"/>
            </div>
        </>
    )
    
}

export default SearchingField;