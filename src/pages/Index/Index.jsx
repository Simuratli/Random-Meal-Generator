import React,{useContext} from 'react'
import Card from '../../components/Card/Card'
import './Index.css'
import Button from '../../components/Button/Button'
import {AppContext} from '../../context/Random_Meal_Context'
import Loader from '../../components/Loader/Loader'

function Index() {
    const context = useContext(AppContext);
    let {state} = context



  

    return (
        <div className='index'>
            <div className="card-container">
                {
                    state.loading ? <Loader/> : <Card link={state.data.idMeal} image={state.data.strMealThumb} category={state.data.strCategory} area={state.data.strArea} name={state.data.strMeal}/>
                }
            </div>
            <br/>
            <br/>
            <div className="button-container">
                <Button onClick={context.functions.randomMeal}/>
            </div>
        </div>
    )
}

export default Index
