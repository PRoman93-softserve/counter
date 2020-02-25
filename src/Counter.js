import React from 'react';
import './App.css';
import Button from "./Button";

function CountPanel(props) {

    return (

        <>
            <div className='count'>
            <div className={props.countMax}>{props.count}</div>
            </div>
            <div className='buttonBorder'>
            <Button onClick={props.onInkrement}
                    disabled={props.countDisabled}
                    title={'ink'}/>
            <Button onClick={props.onReset}
                    title={'reset'}/>
            <Button onClick={props.onSetVisible}
                    title={'set'}/>
            </div>
            {/*<button disabled={props.countDisabled}*/}
            {/*        onClick={props.onInkrement}>{props.ink}</button>*/}
            {/*<button onClick={props.onReset}>{props.reset}</button>*/}
            {/*<button onClick={props.onSetVisible}>{props.set}</button>*/}
        </>


    )

}

export default CountPanel;
