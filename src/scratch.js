// <div style={{ backgroundImage: `url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png")`, backgroundSize: 'contain' }} className="container">


// const getPokemon = async (query) => {
//             {!query ? (this.setState({ setErrorMsg: "EnterPokemon", setError: true }))} :
            
//             setTimeout(async () => {
//                 try {
//                     const response = await FetchPokemon(query);
//                     const results = await response.json();
//                     console.log(results);
//                     setPokemon(results)
//                     setLoading(false);
//                 } catch (err) {
//                     console.log(err);
//                     setLoading(false);
//                     setError(false);
//                     setErrorMsg("Pokemon not found");
//                 }
//             }, 1500);

        // {/* {error ? (<alert>{errorMsg}</alert> ): null}
        //         <SearchPokemon getPokemon={getPokemon} />
        //         {loading ? (
        //             <div>Pivot....Pivot....Pivot</div>
        //         ) : null}
        //         {!loading && pokemon ? (
        //             <PokemonData pokemon={pokemon} />
        //         ): null} */}