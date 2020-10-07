import React,{useState} from 'react'
import SearchInput from '../../components/SearchInput/Search'
import axios from 'axios'
import Card from '../../components/Card/Card'
import './Search.css'
import Loader from '../../components/Loader/Loader'

function Search() {
    const [state, setstate] = useState({
        data:null,
        loading:null,

    })

    function  handleChange(e) {
        setstate((prev)=>({
            ...prev,
            loading:true
        }))
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${e.target.value}`)
        .then(res=>{
            setstate({
                data:res.data.meals,
                loading:false
            })
        })
    }



    let search  = state.data === null ? <div>Zero Meal find</div> : state.data.map(item=>{
            return <Card 
            key={item.idMeal} 
            area={item.strArea} 
            name={item.strMeal} 
            link={item.idMeal} 
            category={item.strCategory}  
            image={item.strMealThumb} />
        })

    if(state.loading) search = <Loader/>
    return (
        <div className='search-container'>
            <br/>
            <br/>
            <SearchInput onChange={handleChange} />
            <br/>
            <br/>
            {
                search
            }
            <br/>
        </div>
    )
}

export default Search
