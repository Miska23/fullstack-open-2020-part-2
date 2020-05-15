import React from 'react'
import CountryList from './CountryList'

const CountryDisplay = ({countries, searchTerm}) => {

  return (
    <div>
      {searchTerm !== '' &&        
        <CountryList 
          countries={countries}
          searchTerm={searchTerm}
        />
      }
    </div>
  )

}

export default CountryDisplay