import React, { useState } from 'react';
import axios from 'axios';

const GetAbilites = () => {
    const [pokemon, setPokemon] = useState("eevee");
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonType, setPokemonType] = useState("");

    const getPokemon = async () => {
    const toArray = [];

    try {
        const  url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const res = await axios.get(url);
        // set useState to the data
        toArray.push(res.data);
        setPokemonType(res.data.types[0].type.name);
        setPokemonData(toArray);

    } catch (e) {
        console.log(e);
    }
    };

    const handleChange = (e) => {
        setPokemon(e.target.value.toLowerCase());
    }
    
    const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" onChange={handleChange} placeholder="Enter Pokemon Name" />
                </label>
            </form>
            {pokemonData.map((data) => {
                return( 
                    <> 
                        <div>{data.abilties} </div>
                    
                    
                    </>
                )
            })}
        </div>
    )






};


export default GetAbilites; 