import React, {useState} from 'react';
import './App.css';
import {Button} from './Button';
import {Counter} from './Counter';
import {Input} from './Input';
import {restoreState, saveState} from "./localStorage";

export type titleType = 'INC' | 'RESET' | 'SET'

function App() {
    const [min, setMin] = useState<number>(0)
    const [max, setMax] = useState<number>(5)
    const [counter, setCounter] = useState<number>(restoreState('min', min))

    const saveMax = (max: number) => {
        saveState<number>('max', max)
    }
    const saveMin = (min: number) => {
        saveState<number>('min', min)
    }
    window.onload = () => {
        setMax(restoreState('max', max))
        setMin(restoreState('min', min))
    }
    const buttonInc = () => {
        setCounter(counter + 1)
    }
    const buttonRes = () => {
        setCounter(min)
    }
    const [setButtonMax, setSetButtonMax] = useState<number>(max)
    const [setButtonMin, setSetButtonMin] = useState<number>(min)
    const newValueMax = (value: number) => {
        setSetButtonMax(value)
    }
    const newValueMin = (value: number) => {
        setSetButtonMin(value)
    }
    const buttonSet = () => {
        setMax(setButtonMax)
        setMin(setButtonMin)
        setCounter(setButtonMin)
        saveMax(setButtonMax)
        saveMin(setButtonMin)
    }
    let disableInc
    counter >= max ? disableInc = true : disableInc = false
    let disableReset
    counter === min ? disableReset = true : disableReset = false

    let error = false
    if (setButtonMin >= setButtonMax) {
        error = true
    }
    if (setButtonMin < 0 || counter <0) {
        error = true
    }

    return (
        <div>
            <div className='App'>
                {error
                &&
                <div className={'error'}> Incorrect value!</div>
                ||
                <div>
                    <Counter counter={counter} disable={disableInc}/>
                    <Button title={'INC'} inc={buttonInc} disableInc={disableInc}/>
                    <Button title={'RESET'} reset={buttonRes} disableReset={disableReset}/>
                </div>}
            </div>

            <div className="App">
                <Input title={'Max value'} newValue={newValueMax} value={restoreState('max', max)}/>
                <Input title={'Min value'} newValue={newValueMin} value={restoreState('min', min)}/>
                <Button title={'SET'} set={buttonSet}/>
            </div>
        </div>
    )
}

export default App;
