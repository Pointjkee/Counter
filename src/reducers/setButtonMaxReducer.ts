const SET_BUTTON_MAX = 'SET_BUTTON_MAX'

export const setButtonMaxReducer = (state: number = 0, action: setButtonMaxACType): number => {
    switch (action.type) {
        case SET_BUTTON_MAX: {

            return state = action.setButtonMax
        }
        default: {
            return state
        }
    }
}

export type setButtonMaxACType = {
    type: 'SET_BUTTON_MAX',
    setButtonMax: number,
}
export const setButtonMaxAC = (setButtonMax: number): setButtonMaxACType => {
    return {type: SET_BUTTON_MAX, setButtonMax}
}