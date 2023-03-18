import React from "react";
import Movie from "./Movie";
import { useState , useContext } from 'react';
import { MovieContext } from "./MovieContext";



const MovieList = (props) => {
    const [movies, setMovie] = useContext(MovieContext);
    return (
        <div className="movie-list">    
            {movies.map(movie => (
                <Movie movie={movie} key={movie.id} />
            ))}
        </div>
    )
}   
export default MovieList;                    