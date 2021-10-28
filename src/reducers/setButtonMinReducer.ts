const SET_BUTTON_MIN = 'SET_BUTTON_MIN'

export const setButtonMinReducer = (state: number = 0, action: setButtonMinACType): number => {
    switch (action.type) {
        case SET_BUTTON_MIN: {
            return state = action.setButtonMin
        }
        default: {
            return state
        }
    }
}

export type setButtonMinACType = {
    type: 'SET_BUTTON_MIN',
    setButtonMin: number,
}
export const setButtonMinAC = (setButtonMin: number): setButtonMinACType => {
    return {type: SET_BUTTON_MIN, setButtonMin}
}