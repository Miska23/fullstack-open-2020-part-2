import React from 'react'

const PersonsDisplay = ({persons, searchText}) => {

  const filterContacts = (array, searchValue) => {
    return array.filter(person => person.name.toLowerCase().includes(searchValue.toLowerCase()))
  }   
  
  const filtered = filterContacts(persons, searchText);

  return (
    <>
      <h3>Numbers</h3>
      <ul style={{listStyleType: "none"}}>
        {filtered.map(person => 
          <li key={person.id}>
            {person.name} {' '}
            {person.number}
          </li>
        )}
      </ul>
    </> 
  )
}
  
export default PersonsDisplay 