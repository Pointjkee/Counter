const NEW_VALUE_MAX = 'NEW_VALUE_MAX'
const NEW_VALUE_MIN = 'NEW_VALUE_MIN'

export type ActionType = newValueMinACType | newValueMaxACType

const initialState = {
    valueMax:0,
    valueMin:0,
}


export type stateType = {
  valueMax:number,
  valueMin:number,
}

export const setButtonReducer = (state: stateType = initialState, action: ActionType) => {
    switch (action.type) {
        case NEW_VALUE_MIN:{
            return {...state, valueMin:action.value}
        }
        case NEW_VALUE_MAX: {
            return {...state, valueMax:action.value}
        }
        default: {
            return state
        }
    }
}
type newValueMinACType = {
    type: 'NEW_VALUE_MIN',
    value:number,
}
export const newValueMinAC = (value:number):newValueMinACType => {
    return {type:NEW_VALUE_MIN, value}
}
type newValueMaxACType = {
    type: 'NEW_VALUE_MAX',
    value:number,
}
export const newValueMaxAC = (value:number):newValueMaxACType => {
    return {type:NEW_VALUE_MAX, value}
}

