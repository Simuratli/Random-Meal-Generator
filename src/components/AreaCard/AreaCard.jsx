import React from 'react'
import './AreaCard.css'
import {Link} from 'react-router-dom'

function AreaCard(props) {
    return (
        <Link to={{
            pathname:"area",
            search:`?area=${props.label}`
        }} className='area-card'>
                {props.label}
        </Link>
    )
}

export default AreaCard
