import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import Sidebar from '../SideBar/Sidebar'

function Navbar() {

    return (
        <>
            <nav className="logo">
                <Link to='/'>Random Meal</Link>
            </nav>
           
            <Sidebar  />
        </>
    )
}

export default Navbar
