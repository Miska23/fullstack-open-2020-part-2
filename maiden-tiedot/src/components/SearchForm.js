import React from 'react'

const SearchForm = ({handleSearchChange, searchTerm}) => {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
    <div> Find countries
      <input  
        onChange={handleSearchChange}
        value={searchTerm}
      />
    </div>
  </form> 
  )
}

export default SearchForm