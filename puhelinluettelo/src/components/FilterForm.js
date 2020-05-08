import React from 'react'

import FormElement from './Shared/FormElement'

const FilterForm = ({handleSearchChange, searchText}) => {
  return (
    <FormElement
      submitAction={event => event.preventDefault()}
      text='filter shown with '
      changeHandler={handleSearchChange}
      value={searchText}
    />
  )
}

export default FilterForm 

/* const FilterForm = ({handleSearchChange, searchText}) => {
  return (
    <form onSubmit={event => event.preventDefault()}>
    <label> filter shown with 
      <input
        type='text'  
        onChange={handleSearchChange}
        value={searchText}
      />
    </label>
  </form> 
  )
}
 */