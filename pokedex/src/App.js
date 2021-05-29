import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [pokemon, setPokemon] = useState("eevee");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");

  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      const res = await axios.get(url);
      // set useSate to the data that we want
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name);
      setPokemonData(toArray);
      console.log(res);
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
            <div className="container">
              <img src={data.sprites["front_default"]} alt={data.name}/>
              <div className="divTable">
                <div className="divTableBody">
                <div className="divTableRow">
                  <div className="divTableCell">Type</div>
                  <div className="divTableCell">{pokemonType}</div>
                </div>
                <div className="divTableRow">
                  <div className="divTableCell">Height</div>
                  <div className="divTableCell">{" "}{Math.round(data.height * 3.9)} "</div>
                </div>
                <div className="divTableRow">
                  <div className="divTableCell">Weight</div>
                  <div className="divTableCell">{" "}{Math.round(data.weight / 4)} lbs</div>
                </div>
                <div className="divTableRow">
                  <div className="divTableCell">Number of Battles</div>
                  <div className="divTableCell">{data.game_indices.length}</div>
                </div>
              </div>
            </div>
            </div>
          )
        })}

    </div>
  );
}


export default App;
