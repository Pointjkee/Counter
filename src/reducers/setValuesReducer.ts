const SET_VALUES = 'SET_VALUES'

export const setValuesReducer = (state: boolean = false, action: setValuesACType): boolean => {
    switch (action.type) {
        case SET_VALUES: {
            return state = action.setValues
        }
        default: {
            return state
        }
    }
}

export type setValuesACType = {
    type: 'SET_VALUES',
    setValues: boolean,
}
export const setValuesAC = (setValues: boolean): setValuesACType => {
    return {type: SET_VALUES, setValues}
}