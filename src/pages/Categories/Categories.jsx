import React,{useState,useEffect} from 'react'
import CategoryCard from '../../components/CategoryCard/CategoryCard'
import axios from 'axios'
import Loader from '../../components/Loader/Loader'

function Categories() {

    const [state, setstate] = useState({
        data:null,
        loading:true
    })

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res=>{
            setstate({data:res.data,loading:false})
        })
    }, []);
    return (
        <div>
            <br/>
            <br/>
            {
                state.loading ? <Loader/> : state.data.categories.map(category=>{
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
