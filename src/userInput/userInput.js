import React from 'react';
const userInput = (props)=>{
        const inputStyle ={
                border : '2px solid red'
        };
        return <input type ="text"
        style ={inputStyle} 
        onChange={props.Changed} 
        value ={props.currentName} />;
};

export default userInput;