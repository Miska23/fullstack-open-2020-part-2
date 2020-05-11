import React from 'react'

import '../Styles/Notification.css'

const Notification = ({ message, errorStatus }) => {
  if (message === null) {
    return null
  }  

  let className;

  if (!errorStatus) {
    className = 'success';
  } else {
    className = 'error';
  }


  return (
    <div className={className}>
      {message}
    </div>
  )
}

export default Notification; 