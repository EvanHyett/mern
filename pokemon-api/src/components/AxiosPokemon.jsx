import React, {useState} from "react";
import axios from 'axios';

const AxiosPokemon = () => {
    let [pokemon, setPokemon] = useState([])

    const getData = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=1500")
            .then(response=>{
                setPokemon(response.data.results);
            })
            .catch(err=>{
                console.log("Something went wrong fetching from the api", err)
            })
    }

    return(
        <div>
            <button onClick={getData}>Click for Pokemon</button>
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

export default AxiosPokemon