import React, { useState, useEffect } from 'react'

import NameDisplay from './NameDisplay';

const CountryInfo = ({country, listLength}) => {
  const [ showDetails, setShowDetails ] = useState(false);

  const showDetailsHandler = () => {
    showDetails ? setShowDetails(false) : setShowDetails(true) 
  }

  return (
    <>
      {listLength > 1
        ? 
        <NameDisplay 
          country={country}
          showDetailsHandler={showDetailsHandler}
          showDetails={showDetails}
          /> 
        : 
        <> {/* //! Tästä oma komponentti! */}
          <h2> {country.name} </h2>
          <p> capital {country.capital} </p>
          <p> population {country.population} </p>
          <h2> languages </h2>
            <ul>
            {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
            </ul>
          <img src={country.flag} alt="Flag" height="80" width="120"></img>
        </>
      }
    </>
  )
} 

export default CountryInfo