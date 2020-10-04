import React from 'react'
import './Button.css'

function Button(props) {
    return (
        <button className="button" onClick={props.onClick}>
            Yeni Resept
        </button>
    )
}

export default Button
