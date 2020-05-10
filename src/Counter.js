import React from 'react';
import './App.css';
import Button from "./Button";

function Counter(props) {

    return (
        <div className={props.countMax}>{props.count}</div>
    )

}

export default Counter;
