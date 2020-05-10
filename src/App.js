import React from 'react';
import './App.css';
import CountPanel from './CountPanel'
import SettingsPanel from "./SettingsPanel";

class App extends React.Component {

    state = {
        startCount: 0,
        count: 0,
        countVisible: true,
        setVisible: false,
        maxValue: 5,
        minValue: 0
    }

    componentDidMount() {
        this.restoreState()
    }

    saveState = () => {
        let stateAsString = JSON.stringify(this.state)
        localStorage.setItem('state', stateAsString)
    }
    restoreState = () => {
        let state = {
            startCount: 0,
            count: 0,
            countVisible: true,
            setVisible: false,
            maxValue: 5,
            minValue: 0
        }
        let newState = localStorage.getItem('state')
        if (newState != null) {
            state = JSON.parse(newState)
        }
        this.setState(state)
    }


    onInkrement = () => {
        this.setState({
            count: this.state.count + 1
        }, () => {
            this.saveState()
        })
    }

    onReset = () => {
        this.setState({
            count: this.state.startCount
        }, () => {
            this.saveState()
        })
    }
    onSetVisible = () => {
        this.setState({
            countVisible: false,
            setVisible: true
        }, () => {
            this.saveState()
        })
    }
    onCountVisible = () => {
        this.setState({
            count: this.state.minValue,
            countVisible: true,
            setVisible: false,
            startCount: this.state.minValue,


        }, () => {
            this.saveState()
        })
    }
    onMaxChangeValue = (e) => {
        let maxChange = e.target.value
        this.setState({
            maxValue: Number(maxChange)
        }, () => {
            this.saveState()
        })
    }
    onMinChangeValue = (e) => {
        let minChange = e.target.value
        this.setState({
            minValue: Number(minChange)
        }, () => {
            this.saveState()
        })
    }


    render() {

        let countDisabled = this.state.count === this.state.maxValue

        let setButtonDisabled = this.state.maxValue <= this.state.minValue || this.state.minValue < 0

        let inputError = this.state.maxValue <= this.state.minValue || this.state.minValue < 0 ? 'inputError' : 'input'

        let countMax = this.state.count === this.state.maxValue ? 'redCount counter' : 'counter'

        return (
            <div className="App">
                <div className='container'>
                    {this.state.countVisible && <>
                        <CountPanel onReset={this.onReset}
                                    onInkrement={this.onInkrement}
                                    onSetVisible={this.onSetVisible}
                                    count={this.state.count}
                                    countMax={countMax}
                                    countDisabled={countDisabled}
                                    ink={'ink'}
                                    reset={'reset'}
                                    set={'set'}
                        />
                    </>}
                    {this.state.setVisible && <>
                        <SettingsPanel inputError={inputError}
                                       onMaxChangeValue={this.onMaxChangeValue}
                                       maxValue={this.state.maxValue}
                                       onMinChangeValue={this.onMinChangeValue}
                                       minValue={this.state.minValue}
                                       setButtonDisabled={setButtonDisabled}
                                       onCountVisible={this.onCountVisible}
                        />
                    </>}
                </div>
            </div>
        )
    }
}

export default App;
