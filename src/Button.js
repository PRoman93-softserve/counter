import React from 'react';
import './App.css';

function CountPanel(props) {

    return (

        <>
            <div className={props.countMax}>{props.count}</div>
            <button disabled={props.countDisabled}
                    onClick={props.onInkrement}>{props.ink}</button>
            <button onClick={props.onReset}>{props.reset}</button>
            <button onClick={props.onSetVisible}>{props.set}</button>
        </>


    )

}

export default CountPanel;
