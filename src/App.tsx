import React, {useCallback, useEffect} from 'react';
import './App.css';
import {Button} from './Button';
import {Counter} from './Counter';
import {Input} from './Input';
import {restoreState, saveState} from "./localStorage";
import {useDispatch, useSelector} from "react-redux";
import {buttonIncAC, setMinAC} from "./reducers/counterReducer";
import {AppStoreType} from './store/store';
import {minAC} from "./reducers/minReducer";
import {maxAC} from "./reducers/maxReducer";
import {setValuesAC} from './reducers/setValuesReducer';
import {setButtonMaxAC} from "./reducers/setButtonMaxReducer";
import {setButtonMinAC} from "./reducers/setButtonMinReducer";

export type titleType = 'INC' | 'RESET' | 'SET'

const App = () => {
    // const [min, setMin] = useState<number>(0)
    // const [max, setMax] = useState<number>(5)
    // const [counter, setCounter] = useState<number>(restoreState('min', min))
    // const [setButtonMin, setSetButtonMin] = useState<number>(min)
    // const [setButtonMax, setSetButtonMax] = useState<number>(max)
    // const [setValues, setSetValues] = useState(false)

    const counter = useSelector<AppStoreType, number>(state => state.counter)
    const min = useSelector<AppStoreType, number>(state => state.min)
    const max = useSelector<AppStoreType, number>(state => state.max)
    const setValues = useSelector<AppStoreType, boolean>(state => state.setValues)
    const setButtonMax = useSelector<AppStoreType, number>(state => state.setButtonMax)
    const setButtonMin = useSelector<AppStoreType, number>(state => state.setButtonMin)
    const dispatch = useDispatch()

    const saveMax = (max: number) => {
        saveState<number>('max', max)
    }
    const saveMin = (min: number) => {
        saveState<number>('min', min)
    }
    useEffect(() => {
        dispatch(maxAC(restoreState('max', max)))
        dispatch(setMinAC(restoreState('min', min)))
        dispatch(minAC(restoreState('min', min)))
    }, [])
    const buttonInc = useCallback(() => {
        dispatch(buttonIncAC(counter))
    }, [dispatch, counter])

    const buttonRes = useCallback(() => {
        dispatch(setMinAC(restoreState('min', min)))
    }, [dispatch, min])

    const newValueMax = useCallback((value: number) => {
        dispatch(setButtonMaxAC(value))
        setButtonMax !== max ? dispatch(setValuesAC(true)) : dispatch(setValuesAC(false))
    }, [dispatch])
    const newValueMin = useCallback((value: number) => {
        dispatch(setButtonMinAC(value))
        if (setButtonMin !== min) {
            dispatch(setValuesAC(true))
        }
    }, [dispatch])
    const buttonSet = useCallback(() => {
        dispatch(maxAC(setButtonMax))
        dispatch(minAC(setButtonMin))
        dispatch(setMinAC(setButtonMin))
        saveMax(setButtonMax)
        saveMin(setButtonMin)
    }, [dispatch, setButtonMax, setButtonMin])


    let disableInc
    counter >= max ? disableInc = true : disableInc = false
    let disableReset
    counter === min ? disableReset = true : disableReset = false

    let error
    if (setButtonMin >= setButtonMax) {
        error = true
    }
    if (setButtonMin < 0 || counter < 0) {
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
                    {setValues && <div className={'setValues'}>Press 'SET'</div>
                    ||
                    <div>
                        <Counter counter={counter} disable={disableInc}/>
                    </div>}
                    <Button title={'INC'} inc={buttonInc} disableInc={disableInc}/>
                    <Button title={'RESET'} reset={buttonRes} disableReset={disableReset}/>
                </div>}
            </div>

            <div className="App">
                <Input title={'Max value'} newValue={newValueMax} value={restoreState('max', max)}/>
                <Input title={'Min value'} newValue={newValueMin} value={restoreState('min', min)}/>
                <Button title={'SET'} set={buttonSet} disableSet={error}/>
            </div>
        </div>
    )
}

export default App;
