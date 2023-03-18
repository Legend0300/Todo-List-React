import React from "react";

const Movie = ({movie}) => {
    const {name, price} = movie;
    return (
        <div>
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
    )
}
export default Movie;