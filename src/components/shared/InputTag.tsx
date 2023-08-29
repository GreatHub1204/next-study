import React from 'react';
import { Interface } from 'readline';


interface Props  {
    type?: string;
    classvalue?: string;
}

const InputTag = ({type, classvalue}:Props) => {
    return(
        <input type={type} className={classvalue}/>
    )
    
}

export default InputTag;