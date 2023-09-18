import React from 'react'
import ButtonTag from '../../shared/ButtonTag'

const NewSignUp = () => {
    return (
        <>
            <div className='mt-[15px] flex items-center'>
                <ButtonTag type="button" buttonName="新規登録" classvalue="bg-[#0E6EFD] text-white p-[5px] pr-[10px] pl-[10px] ml-[5px] rounded-[4px] hover:bg-[#0E6EFD]/75"/>
                <p className='pl-[10px]'>表示数：253件</p>
            </div>
        </>
    )
}

export default NewSignUp;