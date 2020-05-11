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
