import React from 'react'
import './Checkbox.css'

function Chekbox(props) {
    return (
        <label className="b-contain">
            <span>{props.label}</span>
            <input onChange={props.onChange} value={props.label} type="checkbox" />
            <div className="b-input"></div>
        </label>
    )
}

export default Chekbox
