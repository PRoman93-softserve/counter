import React from 'react';
import './App.css';

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


    // incorrectValue = () => {
    //   if(this.state.maxValue <= this.state.minValue){
    //     this.setState({
    //
    //     })
    //   }
    // }

    render() {

        let countDisabled = this.state.count === this.state.maxValue

        let setButtonDisabled = this.state.maxValue <= this.state.minValue || this.state.minValue < 0

        let inputError = this.state.maxValue <= this.state.minValue || this.state.minValue < 0 ? 'inputError' : ''

        let countMax = this.state.count === this.state.maxValue ? 'redCount' : ''

        return (
            <div className="App">
                {this.state.countVisible && <>
                    <div className={countMax}>{this.state.count}</div>
                    <button disabled={countDisabled} onClick={this.onInkrement}>ink</button>
                    <button onClick={this.onReset}>reset</button>
                    <button onClick={this.onSetVisible}>set</button>
                </>}
                {this.state.setVisible && <>
                    <div>maxValue <input className={inputError} onChange={this.onMaxChangeValue} type="number"
                                         value={this.state.maxValue}/></div>
                    <div>minValue <input className={inputError} onChange={this.onMinChangeValue} type="number"
                                         value={this.state.minValue}/></div>
                    <button disabled={setButtonDisabled} onClick={this.onCountVisible}>set</button>
                </>}


                {/*<div>{this.state.count}</div>*/}
                {/*<div>*/}
                {/*    <button onClick={this.onInkrement}>ink</button>*/}
                {/*    <button onClick={this.onReset}>reset</button>*/}
                {/*    <button onClick={this.onSetVisible}>set</button>*/}
                {/*</div>*/}
            </div>

        )
    }
}

export default App;
