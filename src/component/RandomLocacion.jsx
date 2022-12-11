import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import LocationItem from './LocationItem';
import './RandomLocation.css'

const RandomLocacion = () => {

  const [randomLocation, setRandomLocation] = useState([]);
  // const [locationId, setLocationId] = useState('')
  const [locations, setLocations] = useState([])
  const [locationName, setLocationName] = useState('')

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 126) + 1;
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then(res => setRandomLocation(res.data));

    axios.get('https://rickandmortyapi.com/api/location')
      .then(res => setLocations(res.data.results))
  }, [])

  // console.log(randomLocation)
  // console.log(locations)
  // para buscar por id
  // const searchLocation = () => {
  //   axios.get(`https://rickandmortyapi.com/api/location/${locationId < 127 ? locationId : alert('no existe ese numero')}`)
  //     .then(res => setRandomLocation(res.data));
  // }

  const searchLocationName = () => {
    axios.get(`https://rickandmortyapi.com/api/location/?name=${locationName}`)
      .then(res => setRandomLocation(res.data.results[0]));
      setLocationName('')
  }

  return (
    <div>
      <div className='container-search-info'>
        {/* <div className='container-input'>
          <input placeholder='Search Ubication' type="text" value={locationId} onChange={e => setLocationId(e.target.value)} />
          <button onClick={searchLocation}>Search</button>
        </div> */}
        {/* para buscar por nombre */}
        <div className='container-input'>
          <label>
            <input
              list='ubications'
              name='ubications'
              placeholder='Search Ubication'
              type="text" value={locationName}
              onChange={e => setLocationName(e.target.value)}
            />
            <datalist id='ubications'>
              {locations.map(location => (
                <option value={location.name} key={location.name}></option>
              ))}
            </datalist>
          </label>
          <button onClick={searchLocationName}>Search</button>
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