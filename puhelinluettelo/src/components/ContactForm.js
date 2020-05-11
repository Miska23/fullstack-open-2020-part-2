import React from 'react'

import FormElement from './Shared/FormElement'

const ContactForm = (props) => {

  return (
    <>
      <h3>
        Add a new contact
      </h3>
      <FormElement
        submitAction={props.addContact}
        text='Name '
        changeHandler={props.handleNameChange}
        value={props.newName}
      >
      </FormElement>
      <FormElement
        submitAction={props.addContact}
        text='Number '
        changeHandler={props.handleNumberChange}
        value={props.newNumber}
        add='Add'
      >
      <button style={{display: 'block', width: 110}} type='submit'>Add</button>
      </FormElement>
    </>
  )
}

export default ContactForm 
