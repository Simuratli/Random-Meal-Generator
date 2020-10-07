import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
const queryString = require("query-string")
const SpecialCategoryContext = React.createContext()

function SpecialCategoryContextProvider(props) {
    const [state, setstate] = useState({
        data:null,
        loading:true,
    });
   
    const parsed = queryString.parse(props.location.search);
    let url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${parsed.category}`
    
    useEffect(() => {
       async function fetch() {
        const res = await axios.get(url)
        setstate({data:res.data.meals,loading:false})           
       }
       fetch()
    },[url])

    return (
        <SpecialCategoryContext.Provider value={{
            
            state:state,
            functions:null,
            category:parsed.category,
       
        }}>
            {props.children}
        </SpecialCategoryContext.Provider>
    )
}

export  {SpecialCategoryContext}
export default withRouter(SpecialCategoryContextProvider)
