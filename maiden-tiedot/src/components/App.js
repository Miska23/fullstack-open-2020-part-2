import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchForm from './SearchForm'
import CountryDisplay from './CountryDisplay'

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [searchTerm, setSearchTerm] = useState('');

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
