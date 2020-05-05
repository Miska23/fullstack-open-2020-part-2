import React, { useState, useEffect } from 'react'
import axios from 'axios'

import WeatherDisplay from './WeatherDisplay';

const DetailedDisplay = ({ country }) => {
const [ weather, setWeather ] = useState({});

const api_key = process.env.REACT_APP_API_KEY

let city = country.capital;

useEffect(() => {
  console.log('From DetailedDisplay.js / useEffect (weatherstack.com): effect fired')
  axios
    .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${city}`)
    .then(response => {
      console.log('From DetailedDisplay.js / useEffect (weatherstack.com): promise fulfilled')
      console.log(response.data.current);
      setWeather(response.data.current)
    })
}, [])

  return (
    <>
      <h2> {country.name} </h2>
      <p> capital {country.capital} </p>
      <p> population {country.population} </p>
      <h2> languages </h2>
        <ul>
        {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
        </ul>
      <img src={country.flag} alt="Flag" height="80" width="120"></img>
      <WeatherDisplay 
        weather={weather}
        capital={country.capital}
      />
  </>
  )
} 

export default DetailedDisplay