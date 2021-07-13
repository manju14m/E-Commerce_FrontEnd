import React,{createContext,useState} from 'react'
import {storeProducts} from '../data'

export const productContext = createContext()

export function ContextProvider(props){
    const [products, setProducts] = useState([storeProducts])
        return(
        <productContext.Provider value={products}>
            {props.children}
        </productContext.Provider>
    )
    
}

