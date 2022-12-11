import { useEffect } from 'react';
import { useState } from 'react'
import './App.css'
import axios from 'axios'
import RandomLocacion from './component/RandomLocacion';


function App() {


  return (
    <div className="App">
      <header>
        <img src="https://media.vogue.es/photos/5cc754b215d9a34b70e83aec/master/pass/rick_y_morty_9442.jpg" alt="" />
      </header>
      <h1>Rick and Morty Wiky</h1>
      <RandomLocacion />
    </div>
  )
}

export default App
