import React, { useState } from 'react'

import NameDisplay from './NameDisplay';
import DetailedDisplay from './DetailedDisplay';

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
          <DetailedDisplay country={country}/>
      }
    </>
  )
} 

export default CountryInfo