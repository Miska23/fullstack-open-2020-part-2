import React from 'react'

const CountryInfo = ({country, listLength}) => {
  return (
    <div>
      {listLength > 1
        ? country.name
        : 
        <div>
          <h2> {country.name} </h2>
          <p> capital {country.capital} </p>
          <p> population {country.population} </p>
        <h2> languages </h2>
          <ul>
            {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
        </ul>
        <img src={country.flag} alt="Flag" height="80" width="120"></img>
         </div>
      }
    </div>
  )
} 

export default CountryInfo