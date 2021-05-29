import React, { useState } from 'react';
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
      const abilities = (res.data.abilities);
      abilities.forEach(logAbility);
      const id = (res.data.id);
      console.log(id);
      
      console.log(res);
      // console.log(res.data.abilities[0].ability.name);
      // console.log(abilities);
    } catch (e) {
      console.log(e);
    }
    function logAbility(ability, index, orginalArray) {
      const nextAbility = orginalArray[index + 1];
      const prevAbility = orginalArray[index - 1];
      // prevAbility ? console.log(prevAbility):
      // nextAbility ? console.log(nextAbility): 
      // console.log(ability, index, array)
      // console.log(ability);
      // console log next ability of there is one
      console.log(orginalArray.[index].ability.name)
      // if (nextAbility) {console.log(nextAbility);}
      // console.log(orginalArray.[index + 1]);
      console.log('---------*---------')
    }
  };
  
  

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  }
  // backgroundImage: url(""https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{data.id}}.png"")
  
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" onChange={handleChange} placeholder="Enter Pokemon Name" />
        </label>
        </form> 
        {pokemonData.map((data) => {
          return(<>
            <div style={{ backgroundImage: `url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png")`  }} className="container">
            <img src={data.sprites.other.["official-artwork"].["front_default"]} alt={data.name}/>
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
                <div className="divTableRow">
                  <div className="divTableCell">Abilities</div>
                  <div className="divTableCell">{data.abilities[0].ability.name}</div>
                </div>
                
                {/* TODO - create a list of abilities and display them all in one cell - joined with a , */}
            


                <div className="divTableRow">
                  <div className="divTableCell">Abilities</div>
                  <div className="divTableCell">{data.abilities[1].ability.name}</div>
                </div>
                {/* <div className="divTableRow"> */}
                  {/* <div className="divTableCell">Abilities</div> */}
                  {/* <div className="divTableCell">{data.abilities[2].ability.name}   </div> */}
                {/* </div> */}
              </div>
            </div>
            </div>
            </>  )
        })}
        
    </div>
  );
}


export default App;
