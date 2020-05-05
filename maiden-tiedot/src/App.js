import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchForm from './components/SearchForm'
import CountryDisplay from './components/CountryDisplay'

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
  const [ weather, setWeather ] = useState([]);

  useEffect(() => {
    console.log('From useEffect: effect fired')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('From useEffect: promise fulfilled')
        console.log(response.data);
        setCountries(response.data);
      })
  }, [])


  //! Tämä alemmas puussa
const api_key = process.env.REACT_APP_API_KEY

let city = 'helsinki';

useEffect(() => {
  console.log('From useEffect / weatherstack: effect fired')
  axios
    .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${city}`)
    .then(response => {
      console.log('From useEffect / weatherstack: promise fulfilled')
      console.log(response);
      setWeather(response.data)
    })
}, [])



  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }

  return (
    <>
      <SearchForm
        handleSearchChange={handleSearchChange}
        searchTerm={searchTerm}
      />
      <CountryDisplay 
        countries={countries}
        searchTerm={searchTerm}
      />
    </>
  )
  
}

export default App 
