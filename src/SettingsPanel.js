import React from 'react';
import './App.css';
import Button from "./Button";
import Input from "./Input";

function SettingsPanel(props) {

    return (
        <>
            <div className='count'>
                <div>
                    <Input
                        value={props.maxValue}
                        inputError={props.inputError}
                        changeValue={props.onMaxChangeValue}
                        title={'maxValue'}
                    />
                </div>
                <div>
                    <Input
                        value={props.minValue}
                        inputError={props.inputError}
                        changeValue={props.onMinChangeValue}
                        title={'minValue'}
                    />
                </div>
            </div>
            <div className='buttonBorder'>
                <Button disabled={props.setButtonDisabled}
                        onClick={props.onCountVisible}
                        title={'set'}/>
            </div>
        </>


    )

}

export default SettingsPanel;
