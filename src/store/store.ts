import {counterReducer} from "../reducers/counterReducer";
import {minReducer} from "../reducers/minReducer";
import {combineReducers, createStore} from "redux";
import {maxReducer} from "../reducers/maxReducer";
import {setValuesReducer} from "../reducers/setValuesReducer";
import {setButtonMaxReducer} from "../reducers/setButtonMaxReducer";
import {setButtonMinReducer} from "../reducers/setButtonMinReducer";

const reducers = combineReducers({
    counter: counterReducer,
    min: minReducer,
    max: maxReducer,
    setValues: setValuesReducer,
    setButtonMax: setButtonMaxReducer,
    setButtonMin: setButtonMinReducer,
})
const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev