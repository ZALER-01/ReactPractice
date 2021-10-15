import React from 'react';
import './userOutput.css'

const userOutput = (props)=>{
    return (
        <div className ='userOutput'>
            <p>userName : {props.userName}</p>
            <p>written </p>
        </div>
    );
};

export default userOutput;