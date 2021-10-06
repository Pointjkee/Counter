import React, {useState} from 'react';
import styles from './Counter.module.css'

type propsType = {
    counter: number
    disable?: boolean
}

export const Counter = (props: propsType) => {
    return (
        <div className={styles.i + ' ' + styles.main}>
            <input className={props.disable ? styles.red : ''} type="number" value={props.counter}/>
        </div>
    )
}