import React from 'react';
import styles from './button.module.css'
import {titleType} from "./App";

type propsButtonType = {
    inc?: () => void
    reset?: () => void
    disableInc?: boolean
    disableReset?: boolean
    title: titleType
}

export const Button = (props: propsButtonType) => {
    const inc = (title: titleType) => {
        if (title === 'INC') {
            return props.inc
        } else if (title === 'RESET') {
            return props.reset
        }
    }
    const disable = () => {
        if (props.disableInc) {
            return true
        } else if (props.disableReset) {
            return true
        }
    }

    return (
        <span className={styles.main}>
            <button className={styles.button1}
                    onClick={inc(props.title)}
                    disabled={disable()}>
                {props.title}
            </button>

        </span>
    )
}

/*
export const Button = (props: propsButtonType) => {

    return (
        <span className={styles.main}>
            <button className={styles.button1} onClick={props.inc} disabled={props.disableInc}> INC</button>
            <button className={styles.button2} onClick={props.reset} disabled={props.disableReset}> RESET</button>
        </span>

    )

}*/
