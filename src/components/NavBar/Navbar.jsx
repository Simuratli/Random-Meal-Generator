import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <nav className="logo">
            <Link to='/'>Random Meal</Link>
        </nav>
    )
}

export default Navbar
