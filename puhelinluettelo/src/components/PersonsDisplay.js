import React from 'react'

const PersonsDisplay = ({persons, searchText, deleteContact}) => {

  const filterContacts = (array, searchValue) => {
    return array.filter(person => person.name.toLowerCase().includes(searchValue.toLowerCase()))
  }   
  
  const filtered = filterContacts(persons, searchText);

  return (
    <>
      <h3>Numbers</h3>
      <ul style={{listStyleType: "none"}}>
          {filtered.map(person => 
          <div key={person.id}>
            <li>
              {person.name} {' '}
              {person.number} {' '}
            <button onClick={() => deleteContact(person)}>delete</button>
            </li>
          </div>
          )}
      </ul>
    </> 
  )
}
  
export default PersonsDisplay 