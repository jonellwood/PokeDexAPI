import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
// import SectionsItemList from '../SectionsItemList';

const Abilites = () => {
    // const [pokemon, setPokemon] = useState("eevee");
    // const [pokemonData, setPokemonData] = useState([]);
    const [pokemonAbility, setPokemonAbility] = useState([]);

    const GetAbilites = async () => {
    const abilityArray = [];

    try {
        const  aUrl = `https://pokeapi.co/api/v2/ability/`
        const aRes = await axios.get(aUrl);
        // set useState to the data
        abilityArray.push(aRes.data);

        setPokemonAbility(abilityArray);
        console.log(aRes)

    } catch (e) {
        console.log(e);
    }
  };
  // const onClick = (e) => {
  //   e.preventDefault();
  //   GetAbilites()
  // }
  return (
    <div className="App">
      {pokemonAbility.map((data) => {
      return(
        <div classname="divTable">
          <button type="button" onClick={GetAbilites}>Load</button>
          <div className="divTabeRow">
            <div className="divTableCell bold">Maybe I am just dumb</div>
            <div className="divTableCell"></div>
          </div>
          </div>
      )
    })}
    </div>
  );
}

export default Abilites;
