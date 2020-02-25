import React from 'react';
import './App.css';
import Button from "./Button";

function SettingsPanel(props) {

    return (
        <>
            <div className='count'>
            <div>
                <span>maxValue</span>
                <input className={props.inputError}
                       onChange={props.onMaxChangeValue}
                       type="number"
                       value={props.maxValue}/>
            </div>
            <div >
                <span>minValue</span>
                <input className={props.inputError}
                       onChange={props.onMinChangeValue}
                       type="number"
                       value={props.minValue}/>
            </div>
            </div>
            <div className='buttonBorder'>
                <Button disabled={props.setButtonDisabled}
                        onClick={props.onCountVisible}
                        title={'set'}/>
                {/*<button disabled={props.setButtonDisabled}*/}
                {/*        onClick={props.onCountVisible}>*/}
                {/*    {props.set}*/}
                {/*</button>*/}
            </div>
        </>


    )

}

export default SettingsPanel;
