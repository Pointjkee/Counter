import React, {useCallback, useEffect} from 'react';
import './App.css';
import {Button} from './Button';
import {Counter} from './Counter';
import {Input} from './Input';
import {restoreState, saveState} from "./localStorage";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./store/store";
import {incAC, resetAC, setMax, setMin} from './reducers/counterReducer';
import {newValueMaxAC, newValueMinAC} from './reducers/setButtonReducer';
import {acceptAC, disableIncAC, disableResetAC} from "./reducers/disableAcceptReducer";

//60108
export type titleType = 'INC' | 'RESET' | 'SET'

function App() {
    const counter = useSelector<AppStoreType, number>(state => state.counter.counter)
    const min = useSelector<AppStoreType, number>(state => state.counter.min)
    const max = useSelector<AppStoreType, number>(state => state.counter.max)
    const setButtonMin = useSelector<AppStoreType, number>(state => state.setButton.valueMin)
    const setButtonMax = useSelector<AppStoreType, number>(state => state.setButton.valueMax)
    const disableInc = useSelector<AppStoreType, boolean>(state => state.disableAccept.disableInc)
    const disableReset = useSelector<AppStoreType, boolean>(state => state.disableAccept.disableReset)
    const accept = useSelector<AppStoreType, boolean>(state => state.disableAccept.accept)
    const dispatch = useDispatch()

    const saveMax =  useCallback((max: number) => {
        saveState<number>('max', max)
    },[max])
    const saveMin = useCallback((min: number) => {
        saveState<number>('min', min)
    },[min])
    useEffect(() => {
        dispatch(setMax(restoreState('max', max)))
        dispatch(setMin(restoreState('min', min)))
        dispatch(resetAC(restoreState('min', min)))
    }, [])
    const buttonInc = useCallback(() => {
        dispatch(incAC(counter))
    }, [counter])
    const buttonRes = useCallback(() => {
        dispatch(resetAC(setButtonMin))
    }, [setButtonMin])
    const newValueMax = useCallback((value: number) => {
        dispatch(newValueMaxAC(value))
        counter >= max ? dispatch(disableIncAC(true)) : dispatch(disableIncAC(false))
        value !== max ? dispatch(acceptAC(true)) : dispatch(acceptAC(false))
    }, [counter, max])

    const newValueMin = useCallback((value: number) => {
        dispatch(newValueMinAC(value))
        counter === min ? dispatch(disableResetAC(true)) : dispatch(disableResetAC(false))
        value !== min ? dispatch(acceptAC(true)) : dispatch(acceptAC(false))
    }, [counter, min])

    const buttonSet = () => {
        dispatch(setMax(setButtonMax))
        dispatch(setMin(setButtonMin))
        dispatch(resetAC(setButtonMin))
        saveMax(setButtonMax)
        saveMin(setButtonMin)
    }
    let error = false
    if (setButtonMin >= setButtonMax) {
        error = true
    }
    if (setButtonMin < 0 || counter < 0) {
        error = true
    }
    return (
        <div>
            <div className="App">
                {error
                &&
                <div className={'error'}> Incorrect value!</div>
                ||
                <div>
                    {accept && <div className={'error'}> Press SET</div> ||
                    <div>
                        <Counter counter={counter} disable={disableInc}/>
                        <Button title={'INC'} inc={buttonInc} disableInc={disableInc}/>
                        <Button title={'RESET'} reset={buttonRes} disableReset={disableReset}/>
                    </div>}
                </div>}
            </div>
            <div className="App">
                <Input title={'Max value'} newValue={newValueMax} value={restoreState('max', max)}/>
                <Input title={'Min value'} newValue={newValueMin} value={restoreState('min', min)}/>
                <Button title={'SET'} set={buttonSet} disableAccept={error}  />
            </div>
        </div>
    )
}

export default App;
