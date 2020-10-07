import React,{useState} from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'

function Sidebar(props) {


    const [state, setstate] = useState(false);

    function Open() {
        setstate(!state)
    }

    return (
        <>
        <div className="menu">
                <img onClick={Open}  src={require('../../asset/menu.svg')} alt="hamburger"/>
        </div>
        <div className={`sidebar ${state && 'open'}`}>
            <ul className='list'>
                <li onClick={Open}> <Link to="/categories">Categories</Link></li>
                <li onClick={Open}> <Link  to="/search">Search</Link> </li>
                <li onClick={Open}> <Link  to="/areas">Search by Area</Link> </li>
            </ul>
        </div>
        </>
    )
}

export default Sidebar
