import React from 'react';
import FetchPokemon from '../helpers/getPokemon';

function SearchPokemon(props) {

    const [search, setSearch ] = React.useState('');

    // const handleChange = (e) => {
    //     setSearch(e.target.value)
    // }
    
    const handleSubmit = (e) => {
        setSearch(e.target.value);
        console.log(search);
        return FetchPokemon(search);
    }
    return (
        <form onSubmit={handleSubmit} className="searchForm">
            <label>
                <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Enter a Pokemon Name" />
            </label>
            {/* <button onClick={handleSubmit}>
                Search
            </button> */}
        </form>
    );
}

export default SearchPokemon;