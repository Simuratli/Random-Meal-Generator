import React from 'react'
import './Button.css'

function Button(props) {
    return (
        <button className="button" onClick={props.onClick}>
            Random
        </button>
    )
}

export default Button
