import React from 'react'
import './Search.css'

function Search(props) {
    return (
        <input onChange={props.onChange} placeholder='Search' className='search' type="text"  />
    )
}

export default Search
