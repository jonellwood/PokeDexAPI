import React from 'react';
import SectionItem from './SectionItem';
import SectionItemList from './SectionItemList';

function PokemonData({ pokemon }) {
    return (
        <article className="PokemonDisplay">
            <section className="heading">
                <span className="capitalize">{pokemon.name}</span>
            </section>
            <section>
                <img src={pokemon.sprites.other.["official-artwork"].["front_default"]} alt={pokemon.name} />
            </section>
            <SectionItem className="statSection" title="ID" data={pokemon.id} />
            <SectionItem className="statSection" title="Base Experience" data={pokemon.base_experience} />
            <SectionItemList className="statSection" title="Type" propName="type" data={pokemon.types} />
            {
                pokemon.stats.map((data) => (
                    <SectionItem title={data.stat.name} data={data.base_stat} key={data.stat.name} />
                ))
            }
            <SectionItemList className="statSection" title="Abilities" propName="ability" data={pokemon.abilities} />
            <SectionItemList className="statSection" title="Moves" propName="move" data={pokemon.moves} />
            <SectionItem className="statSection" title="Weight" data={pokemon.weight} />
            <SectionItem className="statSection" title="Height" data={pokemon.height} />
        </article>
    );
}

export default PokemonData;