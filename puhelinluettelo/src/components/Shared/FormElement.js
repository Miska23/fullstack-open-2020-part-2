import React from 'react'

const FormElement = (props) => {
  return  (
    <form onSubmit={props.submitAction}>
      <label>
      {props.text}
        <input
          type='text'  
          onChange={props.changeHandler}
          value={props.value}
          submitText={props.submitText}
        />
      </label>
      {props.children}
    </form>
  )
}

export default FormElement 