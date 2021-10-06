import React, {ChangeEvent, useState} from 'react';

type InputPropsType = {
    title: string
    newValue: (value: number) => void
    value: number
}

export const Input = (props: InputPropsType) => {
    const [value, setValue] = useState<number>(props.value)
    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(+e.currentTarget.value)
    }
    if (props.newValue) {
        props.newValue(value)
    }
    return (
        <div>
            {props.title}
            <input
                type="number"
                style={{width: 40, height: 20, margin: 5, borderRadius: 8}}
                onChange={changeValue}
                value={value}
            />
        </div>
    )
}