import React from 'react';
import { Interface } from 'readline';


interface Props  {
    type?: string;
    classvalue?: string;
    placeholder?:string;
}

const InputTag = ({type, classvalue, placeholder}:Props) => {
    return(
        <input type={type} className={classvalue} placeholder={placeholder} />
    )
    
}

export default InputTag;