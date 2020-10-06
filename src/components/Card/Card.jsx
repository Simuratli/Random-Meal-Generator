import React from 'react'
import './Card.css'
import {Link } from 'react-router-dom'

function Card(props) {
    return (
        <div className='card'>
               <div className="image">
                   <img src={props.image} alt=""/>
               </div>
               <div className="content">
                    <h1 className='name'>{props.name}</h1>
                    <h1 className='country'><span className='country-badge'>{props.area}</span></h1>
                    <span className='category'>{props.category}</span>
                    <Link to={{
                        pathname: "/recipe",
                        search: `?id=${props.link}`,
                    }}>More</Link>
               </div>
               
        </div>
    )
}

export default Card
