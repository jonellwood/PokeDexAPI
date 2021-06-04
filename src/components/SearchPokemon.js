import React from 'react';







const handleChange = (e) => {
    // setPokemon(e.target.value.toLowerCase());
    console.log('handling change');
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // getPokemon();
    console.log('handling submit');
  }


  function searchPokemon() {
      return (
          <form onSubmit={handleSubmit} className="searchForm">
              <label>
                  <input type="text" onChange={handleChange} placeholder="Enter a Pokemon Name" />
              </label>
          </form>
      )
  }

export default searchPokemon;