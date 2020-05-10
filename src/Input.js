import React from 'react';
import './App.css';
import Button from "./Button";

function Input(props) {

    return (
        <>
                <span>{props.title}</span>
                <input className={props.inputError}
                       onChange={props.changeValue}
                       type="number"
                       value={props.value}/>
        </>
    )
}

export default Input;
