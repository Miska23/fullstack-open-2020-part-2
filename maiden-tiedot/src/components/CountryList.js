import React from 'react'
import CountryInfo from './CountryInfo'

const CountryList = ({countries, searchTerm}) => {

  const filter = (array, searchValue) => {
    return array.filter(country => country.name.toLowerCase().includes(searchValue.toLowerCase()))
    }

  const filtered = filter(countries, searchTerm);
  console.log("From CountryList, filtered is: ", filtered, 'length of filtered is: ', filtered.length)
  const countryCounter = filtered.length;

  return (
    <div>
      {countryCounter > 10 
        ? 'Too many matches, specify another filter' 
        :   filtered.map(country => 
          <div key={country.name}> 
            <CountryInfo 
              country={country}
              listLength={countryCounter}
            />
          </div>
        )
      }
    </div>
  )
}

export default CountryList