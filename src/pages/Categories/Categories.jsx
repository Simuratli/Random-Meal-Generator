import React,{useContext} from 'react'
import CategoryCard from '../../components/CategoryCard/CategoryCard'
import Loader from '../../components/Loader/Loader'
import {CategoriesContext} from '../../context/CategoriesContext'

function Categories() {

    const context = useContext(CategoriesContext)
    
    return (
        <div>
            <br/>
            <br/>
            {
                context.state.loading ? <Loader/> : context.state.data.categories.map(category=>{
                    return <CategoryCard key={category.idCategory} img={category.strCategoryThumb} name={category.strCategory} />
                })
            }
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default Categories
