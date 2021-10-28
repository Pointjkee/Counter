const BUTTON_INC_ACTION = 'BUTTON_INC_ACTION'
const SET_MIN = 'SET_MIN'

type ActionType = buttonIncACType | setMinACType

export const counterReducer = (state: number = 0, action: ActionType): number => {
    switch (action.type) {
        case BUTTON_INC_ACTION: {
            return state = action.counter + 1
        }
        case SET_MIN: {
            return state = action.min
        }
        default: {
            return state
        }
    }
}
export type buttonIncACType = {
    type: 'BUTTON_INC_ACTION',
    counter: number,
}
export const buttonIncAC = (counter: number): buttonIncACType => {
    return {type: BUTTON_INC_ACTION, counter}
}
export type setMinACType = {
    type: 'SET_MIN',
    min: number,
}

export const setMinAC = (min: number) => {
    return {type: SET_MIN, min}
}


