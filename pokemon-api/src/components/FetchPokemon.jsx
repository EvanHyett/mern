import React, {useState} from "react";

const FetchPokemon = () => {
    let [pokemon, setPokemon] = useState([])

    const getData = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1500")
            .then(response=>{
                return response.json()
            })
            .then(response=>{
                setPokemon(response.results);
            })
    }

    return(
        <div>
            <button onClick={getData}>Show Pokemon</button>
            {
                pokemon.map((pokemonObj, idx)=>{
                    return(
                        <div>
                            <h3>{pokemonObj.name}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FetchPokemon