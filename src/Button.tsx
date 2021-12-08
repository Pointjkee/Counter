import React from 'react';
import styles from './button.module.css'
import {titleType} from "./App";

type propsButtonType = {
    inc?: () => void
    reset?: () => void
    set?: () => void
    disableInc?: boolean
    disableReset?: boolean
    disableAccept?:boolean
    title: titleType
    onClick?: () => void
}

export const Button = (props: propsButtonType) => {
    const inc = (title: titleType) => {
        if (title === 'INC') {
            return props.inc
        }
        if (title === 'RESET') {
            return props.reset
        }
        if (title === 'SET') {
            if (props.onClick) {
                props.onClick()
            }
            return props.set
        }
    }
    const disable = () => {
     return    !!(props.disableInc || props.disableReset || props.disableAccept)
    }

    return (
        <span className={styles.main}>
            <button
                className={styles.button1}
                onClick={inc(props.title)}
                disabled={disable()}>
                {props.title}
            </button>

        </span>
    )
}

