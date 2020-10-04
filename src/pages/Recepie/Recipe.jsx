import React,{useEffect,useState} from 'react'
import './Recipe.css'
import axios from 'axios'
import Loader from '../../components/Loader/Loader'
const queryString = require('query-string');



function Recipe(props) {
    const parsed = queryString.parse(props.location.search);
    const id = parsed.id
    const [state, setstate] = useState({
        data:null,
        loading:true
    })

    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res=>{
            setstate({data:res.data.meals[0],loading:false})
        })
    }, [id])

    console.log(state.data);

    let recipe =  state.data && <div className='recipe'>
    <div className="recipe-conteiner">
    <div className="recipe-image">
        <img src={state.data.strMealThumb} alt=""/>
    </div>
    <div className="content">
        <h1>{state.data.strMeal}</h1>
        <h1 className="area">Area: {state.data.strArea}</h1>
        <span className='category'>{state.data.strCategory}</span>
        <span className='youtube'><a href={state.data.strYoutube}>Youtube</a></span>
    </div>
    </div>
    <div className="description">
        <p>{state.data.strInstructions}</p>
    </div>
    <div className="ingredients">
        <h1>Ingredients</h1>
        <p>{state.data.strIngredient1}   <span>{state.data.strMeasure1}</span></p>
        <p>{state.data.strIngredient2}   <span>{    state.data.strMeasure2}</span></p>
        <p>{state.data.strIngredient3}   <span> {state.data.strMeasure3} </span></p>
        <p>{state.data.strIngredient4}   <span> {state.data.strMeasure4} </span></p>
        <p>{state.data.strIngredient5}   <span> {state.data.strMeasure5} </span></p>
        <p>{state.data.strIngredient6}     {state.data.strMeasure6}</p>
        <p>{state.data.strIngredient7}     {state.data.strMeasure7}</p>
        <p>{state.data.strIngredient8}     {state.data.strMeasure8}</p>
        <p>{state.data.strIngredient9}     {state.data.strMeasure9}</p>
        <p>{state.data.strIngredient10}     {state.data.strMeasure10}</p>
        <p>{state.data.strIngredient11}     {state.data.strMeasure11}</p>
        <p>{state.data.strIngredient12}      {state.data.strMeasure12}</p>
        <p>{state.data.strIngredient13}     {state.data.strMeasure13}</p>
        <p>{state.data.strIngredient14}     { state.data.strMeasure14}</p>
        <p>{state.data.strIngredient15}     {state.data.strMeasure15}</p>
        <p>{state.data.strIngredient16 }    {   state.data.strMeasure16}</p>
        <p>{state.data.strIngredient17}    {state.data.strMeasure17}</p>
        <p>{state.data.strIngredient18}    {state.data.strMeasure18}</p>
        <p>{state.data.strIngredient19}    {state.data.strMeasure19}</p>
        <p>{state.data.strIngredient30}    {state.data.strMeasure20}</p>
    </div>

</div>

if(state.loading) recipe = <Loader/>

    return (
      <>
       {recipe}
      </>
    )
}

export default Recipe
