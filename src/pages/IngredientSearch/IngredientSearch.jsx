import React,{useEffect,useState} from 'react'
import Chekbox from '../../components/Checkbox/Chekbox'
import './IngredientSearch.css'
import axios from 'axios'


function IngredientSearch() {

    const [state, setstate] = useState({
        data:null,
        loading:true
    })

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
        .then(res=>{
            setstate({data:res.data.meals,loading:false})
        })
    }, [])
    
    let chosenIngredient = []
    function handleChange(e) {
        let item = e.target.value.toString().toLowerCase().replaceAll(' ', '_');
        chosenIngredient.push(item)
        console.log(chosenIngredient.join(','));
    }

    return (
        <div className='ing-container'>
            <br/>

            {
                state.data && state.data.map((item,i)=>{
                    return <Chekbox onChange={handleChange} key={i} label={item.strIngredient} />
                })
            }
        </div>
    )
}

export default IngredientSearch
