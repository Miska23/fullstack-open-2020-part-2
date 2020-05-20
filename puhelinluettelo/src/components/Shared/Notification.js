import React from 'react'

import '../Styles/Notification.css'

const Notification = ({ notification }) => {
  
   if (notification === null) {
    return null
  }   

  return (
    <div className={notification.classSelector}>
      {notification.message}
    </div>
  )
}

export default Notification; 