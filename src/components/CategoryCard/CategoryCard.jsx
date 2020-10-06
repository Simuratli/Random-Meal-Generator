import React from 'react'
import './CategoryCard.css'
import {Link} from 'react-router-dom'

function CategoryCard(props) {
    return (
        <div className="category_card">
            <Link 
                to={{
                pathname: "/category",
                search: `?category=${props.name}`
              }}
            >
                <img src={props.img} alt="category"/>
                <h1>{props.name}</h1>
            </Link>
        </div>
    )
}

export default CategoryCard
