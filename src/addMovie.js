import React from "react";
import { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";


const AddMovie = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [movies, setMovies] = useContext(MovieContext);


    const updateName = (e) => {
        setName(e.target.value);
    }

    const updatePrice = (e) => {
        setPrice(e.target.value);
    }

    const addMovie = e => {
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies, {name: name, price: price}]
            );
        setName('');
        setPrice('');
    }

    return (
        <div>
            <form onSubmit={addMovie} >
                <input type="text" placeholder="Movie Name" onChange={updateName}/>
                <input type="text" placeholder="Movie Price" onChange={updatePrice}/>
                <button>Submit</button>
            </form>
        </div>
        
    )
    }
export default AddMovie;

