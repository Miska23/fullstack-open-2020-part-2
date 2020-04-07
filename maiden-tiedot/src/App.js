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

const Country = (props) => {
  if (props.listLength === 1) {
    return (
      <div>
        <h2> {props.country.name} </h2>
          <p> capital {props.country.capital}</p>
          <p> population {props.country.population}</p>
        <h2> languages </h2>
          <ul>
            {props.country.languages.map(language =>         
                <li key={language.name}>{language.name}</li>       
            )}
        </ul>
        <img src={props.country.flag} alt={"Flag"} height="80" width="120"></img>
      </div>
    )
  } else {
    return(
      <div>{props.country.name}</div>
    )
  } 
}

const Countries = (props) => {

  const filter = (array, searchValue) => {
    return array.filter((country) => country.name.toLowerCase().includes(searchValue.toLowerCase()))
    }

  const filtered = filter(props.countries, props.searchTerm);
  console.log("From Countries:", filtered)
  console.log(filtered.length);

  const countryCounter = filtered.length;

  //! &&-merkintä korvaa ternaryn ja se ei vaadi oikeanpuoleista osaa, sillä true/false saadaan selville 
  //! pelkästään vasemman puolen evaluoinnilla. Palautetaan siis jotain tai ei mitään!
  return (
    <div>
      {props.searchTerm !== '' &&        
      //! jos hakutermi ei ole tyhjä merkkijono (muulloin tyhjä div):
        filtered.map(country => 
          <div key={country.name}> 
            <Country 
              country={country}
              listLength={countryCounter}
            />
          </div>
        )
      }
    </div>
  )
/*   return (
    <div>
      {props.searchTerm !== '' 
      ? <div>{filtered.map(country => 
        <div key={country.name}> 
        <Country 
          country={country}
          listLength={countryCounter}
          />
        </div>
        )}
       </div>
      : null
    }
    </div>
  ) */

  
/*   //! jos hakutermi ei ole tyhjä merkkijono
  if (props.searchTerm !== '') {
    return (
      filtered.map(country => 
        <div key={country.name}> 
        <Country 
          country={country}
          listLength={countryCounter}
          />
        </div>
      )
    )  
  //! jos hakutermi on tyhjä merkkijono  
  } else {
    return (
      null
    )
  } */
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

/*     if (filtered.length > 10) {
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
    } */