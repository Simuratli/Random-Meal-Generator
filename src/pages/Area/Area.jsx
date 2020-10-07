import React,{useEffect, useState} from 'react'
import './Area.css'
import Card from '../../components/AreaCard/AreaCard'
import axios from 'axios'
import Loader from '../../components/Loader/Loader'

function Area() {

    const [state, setstate] = useState({
        data:null,
        loading:true
    });


    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
        .then(res=>{
            setstate({data:res.data.meals,loading:false})
        })
    }, []);

    return (
        <div className='area-container'>
               {
                   state.loading ? <Loader/> : state.data.map(item=>{ return <Card label={item.strArea} />})
               }
        </div>
    )
}

export default Area
