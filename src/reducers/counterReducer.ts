const INC_ACTION = 'INC_ACTION'
const RES_ACTION = 'RES_ACTION'
const SET_MAX = 'SET_MAX'
const SET_MIN = 'SET_MIN'


export type ActionType = buttonIncACType | resetACType | setMaxACType | setMinACType

const initialState = {
    counter: 0,
    min: 0,
    max: 5,
}

export type stateType = {
    counter: number,
    min: number,
    max: number,
}

export const counterReducer = (state: stateType = initialState, action: ActionType) => {
    switch (action.type) {
        case INC_ACTION: {
            return {...state, counter: action.counter + 1}
        }
        case RES_ACTION: {
            return {...state, counter: action.min}
        }
        case SET_MAX: {
            return {...state, max: action.max}
        }
        case SET_MIN: {
            return {...state, min: action.min}
        }
        default: {
            return state
        }
    }
}
export type buttonIncACType = {
    type: 'INC_ACTION',
    counter: number,
}
export const incAC = (counter: number): buttonIncACType => {
    return {type: INC_ACTION, counter}
}
export type resetACType = {
    type: 'RES_ACTION',
    min: number,
}
export const resetAC = (min: number): resetACType => {
    return {type: RES_ACTION, min}
}
export type setMaxACType = {
    type: 'SET_MAX',
    max: number,
}
export const setMax = (max: number): setMaxACType => {
    return {type: SET_MAX, max}
}
export type setMinACType = {
    type: 'SET_MIN',
    min: number,
}
export const setMin = (min: number): setMinACType => {
    return {type: SET_MIN, min}
}