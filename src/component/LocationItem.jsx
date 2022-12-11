import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './locationitem.css'

const LocationItem = ({ url }) => {

  const [listResidents, setListResidents] = useState({})

  useEffect(() => {
    axios.get(url)
      .then(res => setListResidents(res.data))
  }, [])

  // console.log(listResidents)

  const circle = () => {
    if (listResidents.status === 'Dead') {
      return <div className='circleStatus red'></div>
    } else if (listResidents.status === 'Alive') {
      return <div className='circleStatus green'></div>
    } else {
      return <div className='circleStatus grey'></div>
    }
  }

  return (
    <div className='container'>
      <div className='containerImage'>
        <img src={listResidents.image} alt="" />
      </div>
      <div className='containerInfoResident'>
        <p className='name'><b>Name: </b>{listResidents.name}</p>
        <div className='containerInfoResident-status'>
          {circle()}
          <p><b>Status: </b>{listResidents.status}</p>
        </div>
        <p><b>Origin: </b>{listResidents.origin?.name}</p>
        <p><b>Episodes: </b>{listResidents.episode?.length}</p>
      </div>

    </div>
  );
};

export default LocationItem;