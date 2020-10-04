import React,{useState,useEffect} from 'react'
import Card from '../../components/Card/Card'
import './Index.css'
import Button from '../../components/Button/Button'
import axios from 'axios'
// import Loader from '../../components/Loader/Loader'

function Index() {

    const [state, setstate] = useState({
        data:null,
        loading:true
    });

    function randomMeal() {
        axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res=>{
            setstate({data:res.data.meals[0],loading:false})
        })
    }

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res=>{
            setstate({data:res.data.meals[0]})
        })
    },[]);

    console.log(state.data)
    return (
        <div className='index'>
            <div className="card-container">
                {
                    state.data && <Card link={state.data.idMeal} image={state.data.strMealThumb} category={state.data.strCategory} area={state.data.strArea} name={state.data.strMeal}/>
                }
            </div>
            <br/>
            <br/>
            <div className="button-container">
                <Button onClick={randomMeal}/>
            </div>
        </div>
    )
}

export default Index
