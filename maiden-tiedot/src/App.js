import React, { useState, useEffect } from 'react'
import axios from 'axios'

const SearchForm = ({handleSearchChange, searchTerm}) => {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
    <div> Find countries
      <input  
        onChange={handleSearchChange}
        value={searchTerm}
      />
    </div>
  </form> 
  )
}

const Countries = (props) => {

  const filterCountries = (array, searchValue) => {
    return array.filter((country) => country.name.toLowerCase().includes(searchValue.toLowerCase()))
    }

  const filtered = filterCountries(props.countries, props.searchTerm);

  console.log("From Countries:", filtered)

  console.log(filtered.length);
  
  //! jos hakutermi ei ole tyhjä merkkijono
  if (props.searchTerm !== '') {
    if (filtered.length > 10) {
      return(
        <div>
          Too many matches, specify another filter
        </div>
      )
    } else if (filtered.length > 1) {
      return (
        <div>
          <ul style={{listStyleType: "none"}}>
            {filtered.map(country => 
              <li key={country.name}>
                {country.name} 
              </li>
            )}
          </ul>
        </div>
      )
    } else {
      return (
        <div>
          {filtered.map(country => 
            <h2 key={country.name}>
                {country.name} 
          </h2>
          )}
        </div>
      )
    }
  //! jos hakutermi on tyhjä merkkijono  
  } else {
    return (
      null
    )
  }
}


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
      <Countries 
        countries={countries}
        searchTerm={searchTerm}
      />
    </>
  )

}

export default App 
