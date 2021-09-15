import React, {useState} from 'react';
import './App.css';
import {Button} from './Button';
import {Counter} from './Counter';

export type titleType = 'INC' | 'RESET'

function App() {
    const [counter, setCounter] = useState<number>(0)
    const buttonInc = () => {
        setCounter(counter + 1)
    }
    const buttonRes = () => {
        setCounter(0)
    }
    let disableInc
    counter >= 5 ? disableInc = true : disableInc = false
    let disableReset
    counter === 0 ? disableReset = true : disableReset = false

    return (
        <div className="App">
            <Counter counter={counter} disable={disableInc}/>
            {/*<Button inc={buttonInc} reset={buttonRes} disableInc={disableInc} disableReset={disableReset}/>*/}

            <Button title={'INC'} inc={buttonInc} disableInc={disableInc}/>
            <Button title={'RESET'} reset={buttonRes} disableReset={disableReset}/>
        </div>
    );
}

export default App;
