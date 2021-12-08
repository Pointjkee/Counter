const DISABLE_INC = 'DISABLE_INC'
const DISABLE_RESET = 'DISABLE_RESET'
const ACCEPT = 'ACCEPT'

export type ActionType = disableIncACType | disableResetACType | acceptACType
const initialState = {
    disableInc: false,
    disableReset: false,
    accept: false
}
export type stateType = {
    disableInc: boolean,
    disableReset: boolean,
    accept: boolean
}

export const disableAcceptReducer = (state: stateType = initialState, action: ActionType) => {
    switch (action.type) {
        case DISABLE_INC: {
            return {...state, disableInc: action.disable}
        }
        case DISABLE_RESET: {
            return {...state, disableReset: action.disable}
        }
        case ACCEPT: {
            return {...state, accept: action.accept}
        }
        default: {
            return state
        }
    }
}

type disableIncACType = {
    type: 'DISABLE_INC',
    disable: boolean
}
export const disableIncAC = (disable: boolean): disableIncACType => {
    return {type: DISABLE_INC, disable}
}
type disableResetACType = {
    type: 'DISABLE_RESET',
    disable: boolean
}
export const disableResetAC = (disable: boolean): disableResetACType => {
    return {type: DISABLE_RESET, disable}
}
type acceptACType = {
    type: 'ACCEPT',
    accept: boolean
}
export const acceptAC = (accept: boolean): acceptACType => {
    return {type: ACCEPT, accept}
}