import React from  'react' ;
import { createContext  ,useState } from 'react';

export const MovieContext = createContext();

export const MovieContextProvider = (props) => {
    const [movies, setMovie] = useState([
        { name: "Harry Potter", price: "$10", id: 23124 },
        { name: "Game of Thrones", price: "$10", id: 2566124 },
        { name: "Inception", price: "$10", id: 23524 }
    ]);
    return (
        <MovieContext.Provider value={[movies , setMovie]}>          
            {props.children}
        </MovieContext.Provider>
    )
}