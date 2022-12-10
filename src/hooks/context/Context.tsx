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

  // '!' makes the context mandatory

function usePokemon() {
  return useContext(PokemonContext)!
}

const PokemonContext = createContext<
  ReturnType<typeof usePokemonSource> | undefined
>(undefined);
  
const PokemonList = () => {
      const {pokemon} = usePokemon();
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