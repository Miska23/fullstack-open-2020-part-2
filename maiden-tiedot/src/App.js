import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchForm from './components/SearchForm'
import CountryDisplay from './components/CountryDisplay'

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    console.log('From App.js / useEffect (restcountries.eu): effect fired')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('From App.js / useEffect (restcountries.eu):: promise fulfilled')
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
