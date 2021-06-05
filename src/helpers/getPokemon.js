// import React, { useState } from 'react';
// import axios from 'axios'

const baseUrl = 'http://pokeapi.co/api/v2';
const query = {
    pokemon: 'pokemon'
}

export async function FetchPokemon(pokemon) {
    console.log(`${baseUrl}/${query.pokemon}/${pokemon}`);
    return fetch(`${baseUrl}/${query.pokemon}/${pokemon}`)
}

// const FetchPokemon = () => {
//     const [pokemon, setPokemon] = useState("eevee");
//     const [pokemonData, setPokemonData] = useState([]);
//     const [pokemonType, setPokemonType] = useState("");

//     const getPokemon = async () => {
//     const toArray = [];

//     try {
//       const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
//       const res = await axios.get(url);

//       toArray.push(res.data)
//       setPokemonType(res.data.types[0].type.name);
//       setPokemonData(toArray);

//         } catch (e) {
//             console.log(e);
//         } 
//     };

//     return (
//         <div className="App">
//             <p>it works</p>
//         </div>
//     );
// }

export default FetchPokemon;