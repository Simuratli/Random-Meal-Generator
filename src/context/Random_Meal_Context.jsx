import React,{useState,useEffect} from 'react'
import axios from 'axios'


const AppContext = React.createContext([{}, () => {}]);

function RandomMealProvider(props) {
    const [state, setstate] = useState({
        data:null,
        loading:true,
        randomMeal:randomMeal
    });


    function randomMeal() {
        setstate({loading:true});
        axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res=>{
            setstate({data:res.data.meals[0],loading:false})
        })
    }

    
    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res=>{
            setstate({data:res.data.meals[0],loading:false})
        })
    },[]);

    return(
        <AppContext.Provider value={{
            state:state,
            functions:{
                randomMeal:randomMeal
            }
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export  {RandomMealProvider , AppContext}