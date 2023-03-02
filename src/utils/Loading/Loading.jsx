import React, { useContext } from 'react';
import { ContextApi } from '../../context/context';
import "./Loading.css"

const Loading = () => {
    const {state} = useContext(ContextApi);  
    if (state.loading){
       return(
       <div className='loading'>
            <h1>Loading...</h1>
        </div>
       ) 
    }
    else {
        return null;
    }
}

export default Loading