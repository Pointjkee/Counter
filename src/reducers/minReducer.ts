const MIN = 'MIN'

export const minReducer = (state: number = 0, action: minACType): number => {
    switch (action.type) {
        case MIN: {
            return state = action.min
        }
        default: {
            return state
        }
    }
}

export type minACType = {
    type: 'MIN',
    min: number,
}
export const minAC = (min: number): minACType => {
    return {type: MIN, min}
}