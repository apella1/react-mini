import React, { useEffect, useState } from 'react';

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

function usePokemon (): {pokemon: Pokemon[]} {
    const [pokemon, setPokemon] = useState<Pokemon[]>([]);

    useEffect(() => {
      fetch('../../data/pokemon.json')
        .then(res => res.json())
        .then(data => setPokemon(data));
    }, [])

    return { pokemon }
  }

const PokemonList = ({pokemon}: {pokemon: Pokemon[]}) => {
      return (
        <ul>
          {pokemon.map(p => (
            <li key={p.id}>{p.name}</li>
          ))}
        </ul>
      )
  }
  

const Context = () => {
  const { pokemon } = usePokemon();
 
  return (
    <div>
      <PokemonList pokemon={pokemon}/>
    </div>
  )
}

export default Context;

// ? why am i getting an empty array returned