import React,{useContext} from 'react'
import Card from '../../components/Card/Card'
import './Category.css';
import Loader from '../../components/Loader/Loader'
import {SpecialCategoryContext} from '../../context/SpecialCategoryContext'


function Category(props) {

    const context  = useContext(SpecialCategoryContext)

    let cards =  context.state.data && context.state.data.map((item,i)=>{
        return <Card key={i} image={item.strMealThumb}  name={item.strMeal}  category={context.category}  link={item.idMeal} />
    })
    if(context.state.loading) cards = <Loader/>
    return (
        <div className='category-container'>
            <br/>
            <br/>
            <br/>
                {
                   cards
                }
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default Category
