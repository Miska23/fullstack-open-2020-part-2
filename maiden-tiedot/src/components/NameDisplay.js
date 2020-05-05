import React from 'react'

import DetailsButton from './DetailsButton';
import DetailedDisplay from './DetailedDisplay';

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
      <DetailedDisplay country={props.country}/>
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