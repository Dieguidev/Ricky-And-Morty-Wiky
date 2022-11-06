import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './locationitem.css'

const LocationItem = ({url}) => {

  const [listResidents, setListResidents] = useState({})

  useEffect(()=> {
    axios.get(url)
      .then(res=> setListResidents(res.data))
  },[])

  // console.log(listResidents)

  return (
    <div className='container'>
      <div className='containerImage'>
        <img src={listResidents.image} alt="" />
      </div>
      <p><b>Name: </b>{listResidents.name}</p>
      <p><b>Status: </b>{listResidents.status}</p>
      <p><b>Origin: </b>{listResidents.origin?.name}</p>
      <p><b>Episodes: </b>{listResidents.episode?.length}</p>
    </div>
  );
};

export default LocationItem;