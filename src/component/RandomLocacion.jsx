import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import LocationItem from './LocationItem';
import './RandomLocation.css'

const RandomLocacion = () => {

  const [randomLocation, setRandomLocation] = useState([]);
  const [locationId, setLocationId] = useState('')

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 126) + 1;
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then(res => setRandomLocation(res.data));
  }, [])

  console.log(randomLocation)


  const searchLocation = () => {

    axios.get(`https://rickandmortyapi.com/api/location/${locationId < 127 ? locationId : alert('no existe ese numero')}`)
      .then(res => setRandomLocation(res.data));

  }

  return (
    <div>
      <div className='container-search-info'>
        <div className='container-input'>
          <input placeholder='Search Ubication' type="text" value={locationId} onChange={e => setLocationId(e.target.value)} />

          <button onClick={searchLocation}>Search</button>
        </div>

        <h2>{randomLocation.name}</h2>
        <ul className='container-info'>
          <p className='ubicationDate'><b>Type: </b>{randomLocation.type}</p>
          <p className='ubicationDate'><b>Dimension: </b>{randomLocation.dimension}</p>
          <p className='ubicationDate'><b>Residents:</b>  {randomLocation.residents?.length}</p>
        </ul>
      </div>

      <ul className='listResidents'>
        {randomLocation.residents?.map(resident => (
          <LocationItem key={resident} url={resident} />
        ))}
      </ul>
    </div>
  );
};

export default RandomLocacion;