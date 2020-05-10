import React from 'react';
import './App.css';
import Button from "./Button";
import Counter from "./Counter";

function CountPanel(props) {

    return (

        <>
            <div className='count'>
                <Counter countMax={props.countMax}
                         count={props.count}/>
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
        </>


    )

}

export default CountPanel;
