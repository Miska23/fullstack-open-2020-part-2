import React from 'react'
import DetailsButton from './DetailsButton';

const NameDisplay = (props) => {

  if (!props.showDetails) {
    return (
    <>
    {props.country.name}
    <DetailsButton 
      showDetailsHandler={props.showDetailsHandler}
      showDetails={props.showDetails}
      />
    </>
    )
  } else {
    return (
    <>
    <h2> {props.country.name} </h2>
    <p> capital {props.country.capital} </p>
    <p> population {props.country.population} </p>
    <h2> languages </h2>
      <ul>
      {props.country.languages.map(language => <li key={language.name}>{language.name}</li>)}
      </ul>
    <img src={props.country.flag} alt="Flag" height="80" width="120"></img>
    <div>
    <DetailsButton 
      showDetailsHandler={props.showDetailsHandler}
      showDetails={props.showDetails}
   
    />
    </div>
  </>
  )
  }
  
}

export default NameDisplay