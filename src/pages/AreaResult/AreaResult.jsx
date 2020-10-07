import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Card from '../../components/Card/Card'
import Loader from '../../components/Loader/Loader'
const queryString = require('query-string');

function AreaResult(props) {

    const [state, setstate] = useState({
        data:null,
        loading:true
    });

    const parsed = queryString.parse(props.location.search);
    let url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${parsed.area}`
    useEffect(() => {
        axios.get(url)
        .then(res=>{
            setstate({data:res.data.meals,loading:false})
        })
    }, [url])


    return (
        <div className='category-container'>
            <br/>
            <br/>
            <br/>
                {
                    state.loading ? <Loader/> : state.data.map((item,i)=>{
                        return <Card key={i} image={item.strMealThumb}  name={item.strMeal}  area={parsed.area}    link={item.idMeal} />
                    })
                }
                
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default AreaResult
