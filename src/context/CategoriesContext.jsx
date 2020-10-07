import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
const CategoriesContext = React.createContext()

function CategoriesContextProvider(props) {
    const [state, setstate] = useState({
        data:null,
        loading:true,
    });
    
    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res=>{
            setstate({data:res.data,loading:false})
        })
    }, []);


    return (
        <CategoriesContext.Provider value={{
            
            state:state,
            functions:null
       
        }}>
            {props.children}
        </CategoriesContext.Provider>
    )
}

export  {CategoriesContext}
export default withRouter(CategoriesContextProvider)
