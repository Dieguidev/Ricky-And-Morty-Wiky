import { useEffect } from 'react';
import { useState } from 'react'
import './App.css'
import axios from 'axios'
import RandomLocacion from './component/RandomLocacion';
import PokemonItem from './component/PokemonItem';

function App() {


  return (
    <div className="App">
      <header>
        <img src="https://eloutput.com/app/uploads-eloutput.com/2021/01/Rick-morty-9.jpg" alt="" />
      </header>

      <RandomLocacion />
    </div>
  )
}

export default App
