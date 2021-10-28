const MAX = 'MAX'

export const maxReducer = (state: number = 0, action: maxACType): number => {
    switch (action.type) {
        case MAX: {
            return state = action.max
        }
        default: {
            return state
        }
    }
}

export type maxACType = {
    type: 'MAX',
    max: number,
}
export const maxAC = (max: number): maxACType => {
    return {type: MAX, max}
}