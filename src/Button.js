import React from 'react';
import './App.css';

function Button(props) {

    return (
        <button onClick={props.onClick}
                disabled={props.disabled}
                className={'button'}>{props.title}</button>
    )
}

export default Button;
