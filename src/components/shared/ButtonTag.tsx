import React from 'react';


interface Props{
    classvalue : string;
    type       : string;
    buttonName : string; 
}


const ButtonTag = ({type, classvalue, buttonName}:Props) => {
    return(
        <button type={type} className={classvalue}>{buttonName}</button>
    )
}

export default ButtonTag;