import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


const PokemonItem = ({url}) => {

  const [ pokemon, setPokemon]= useState({});

  useEffect(()=> {
    axios.get(url)
      .then(res => setPokemon(res.data));
  }, [])

  console.log(pokemon)

  return (
    <div>
      <li>{pokemon.name}</li>
      <img src={pokemon.sprites?.front_default} alt="" />
    </div>
  );
};

export default PokemonItem;