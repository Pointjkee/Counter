import {counterReducer} from "../reducers/counterReducer";
import {combineReducers, createStore} from "redux";
import {setButtonReducer} from "../reducers/setButtonReducer";
import { disableAcceptReducer } from "../reducers/disableAcceptReducer";


const reducers = combineReducers({
 counter: counterReducer,
 setButton: setButtonReducer,
 disableAccept:disableAcceptReducer,
})
const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev