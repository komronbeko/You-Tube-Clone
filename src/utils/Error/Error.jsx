import React, { useContext } from 'react'
import { ContextApi } from '../../context/context';
import "./Error.css";

const Error = () => {
    const {state} = useContext(ContextApi);
    if (state.error){
       return(
       <div className='error'>
            <h1>
                {state.error}
            </h1>
        </div>
       ) 
    }
    else {
        return null;
    }
}

export default Error