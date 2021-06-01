import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';
import './App.css';
import SectionsItemList from './SectionsItemList';
import './Nav.js';
import "./Abilities";
import Abilites from './Abilities';


const App = () => {
  const [pokemon, setPokemon] = useState("eevee");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");
  const [pokemonAbility, setPokemonAbility] = useState([]);

  const getPokemon = async () => {
    const toArray = [];
    const abilityArray = [];


    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      const res = await axios.get(url);
      // set useSate to the data that we want
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name);
      setPokemonData(toArray);
      // const abilities = (res.data.abilities);
      // abilities.forEach(logAbility);
      const id = (res.data.id);
      console.log(id);

      console.log(res);
      console.log(res.data.stats[0].base_stat);
      // console.log(res.data.abilities[0].ability.name);
      // console.log(abilities);
      const aUrl = `https://pokeapi.co/api/v2/ability`
      const aRes = await axios.get(aUrl);
      console.log(aRes);
      abilityArray.push(aRes.data);
      setPokemonAbility(abilityArray);
      console.log('aa', abilityArray);
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
  // backgroundImage: url(""https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{data.id}}.png"")

  return (
    <div className="App">
      {/* <Router>
        <Switch>
          <Route path="/" exact component={() => <App />} />
          <Route path="/abilities" exact component={() => <Abilites />} />
        </Switch>
      </Router> */}
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" onChange={handleChange} placeholder="Enter Pokemon Name" />
        </label>
        </form>
        <a href="/abilities">
        <button type="button">Abilities List</button>
        </a>
        {pokemonData.map((data) => {
          return(<>
            <div style={{ backgroundImage: `url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png")`, backgroundSize: 'contain' }} className="container">

              <div className="divTable">
                <div className="divTableBody">
                <div className="divTableRow">
                  <div className="divTableCell bold">Image</div>
                  <div className="divTableCell"><img src={data.sprites.other.["official-artwork"].["front_default"]} alt={data.name}/></div>
                </div>
                <div className="divTableRow">
                  <div className="divTableCell bold">Type</div>
                  <div className="divTableCell">{pokemonType}</div>
                </div>
                <div className="divTableRow">
                  <div className="divTableCell bold">Weight</div>
                  <div className="divTableCell">{" "}{Math.round(data.weight / 4)} lbs</div>
                </div>
                <div className="divTableRow">
                  <div className="divTableCell bold">Abilities</div>
                  <div className="divTableCell"><SectionsItemList title="Abilities" propName="ability" data={data.abilities}/></div>
                </div>
                <div className="divTableRow">
                  <div className="divTableCell bold">Moves</div>
                  <div className="divTableCell"><SectionsItemList title="Moves" propName="move" data={data.moves} /></div>
                </div>
                <div className="divTableRow">
                  <div className="divTableCell bold">Stats</div>
                  <div className="divTableCell"><SectionsItemList title="Stats" propName="stat" data={data.stats} /></div>
                </div>

              {pokemonAbility.map((data) => {
                return(
                  <div className="divTableRow">
                    <div className="divTableCell bold">All pokemon moves count </div>
                    <div className="divTableCell">{data.count}</div>
                  </div>

                )
              })}

                {/* <div className="divTableRow">
                  <div className="divTableCell bold">Characteristics</div>
                  <div className="divTableCell"><SectionsItemList title="Characteristic" propName="characteristic" data={data.characteristics} /></div>
                </div> */}
              </div>

            </div>
            </div>
            </>  )
        })}

    </div>
  );
}


export default App;
