import React, { useEffect, useState, createContext, useContext} from 'react';

interface Pokemon {
  id: number,
  name: string,
  type: string[],
  hp: number,
  attack: number,
  defense: number,
  special_attack: number,
  special_defense: number,
  speed: number
}

function usePokemonSource (): {pokemon: Pokemon[]} {
    const [pokemon, setPokemon] = useState<Pokemon[]>([]);

    useEffect(() => {
      fetch('../../data/pokemon.json')
        .then(res => res.json())
        .then(data => setPokemon(data))
    }, [])

    return { pokemon }
  }

const PokemonContext = createContext({
  pokemon: [] as Pokemon[],
});
  
const PokemonList = () => {
      const {pokemon} = useContext(PokemonContext);
      return (
        <>
        <ul>
          {pokemon.map(p => (
            <li key={p.id}>{p.name}</li>
          ))}
        </ul>
        </>
      )
  }
  

const Context = () => {
  return (
    <PokemonContext.Provider value={usePokemonSource()}>
      <div className = 'bg-lime-500'>
        <PokemonList />
      </div>
    </PokemonContext.Provider>
  )
}

export default Context;

// ? why am i getting an empty array returned