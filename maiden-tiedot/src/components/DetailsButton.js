import React from 'react'
import './Button.css'

const DetailsButton = (props) => {

 let infoText;

  props.showDetails ? infoText = 'hide' : infoText = 'show';

  let className = 'button';

  if (props.showDetails) {
    className = 'button-large';
  }

  return <button className={className} onClick={props.showDetailsHandler}>{infoText}</button>

}

export default DetailsButton