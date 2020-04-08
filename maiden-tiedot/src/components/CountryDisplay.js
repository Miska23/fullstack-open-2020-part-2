import React from 'react'
import CountryList from './CountryList'

const CountryDisplay = ({countries, searchTerm}) => {

  return (
    <div>
      {searchTerm !== '' &&        
      //! jos hakutermi ei ole tyhjä merkkijono (muulloin tyhjä div):
        <CountryList 
          countries={countries}
          searchTerm={searchTerm}
        />
      }
    </div>
  )

}

export default CountryDisplay