import React, { useState } from 'react'

const Persons = ({persons, searchText}) => {

console.log("props.persons before filtering is ", persons);

const filterContacts = (array, searchValue) => {
    return array.filter((person) => person.name.toLowerCase().includes(searchValue.toLowerCase()))
    }   

  const filtered = filterContacts(persons, searchText);

  console.log("props.persons after filtering is ", filtered);
  
    return (
      <div>
        <ul style={{listStyleType: "none"}}>
          {filtered.map(person => 
            <li key={person.id}>
              {person.name} {' '}
              {person.number}
            </li>
          )}
        </ul>
      </div>
    )
}

const PersonForm = ({addContact, newName, newNumber, handleNameChange, handleNumberChange}) => {
    return  (
      <form onSubmit={addContact}>
        <div> name: 
          <input 
            value={newName}
            onChange={handleNameChange}    
          />
        </div>
        <div> number: 
          <input 
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

const FilterForm = ({handleSearchChange, searchText}) => {
    return (
      <form onSubmit={(event) => event.preventDefault()}>
      <div> filter shown with 
        <input  
          onChange={handleSearchChange}
          value={searchText}
        />
      </div>
    </form> 
    )
}

  
const App = () => {
  const [ persons, setPersons] = useState([
    {name: 'Miska Lindén', number: '666', id:'Miska Lindén'},
    {name: 'Ville Lindén', number: '777', id: 'Ville Lindén'},
    {name: 'Leena Lindén', number: '999', id: 'Leena Lindén'}
  ]) 
  const [ newName, setNewName ] = useState('') 
  const [ newNumber, setNewNumber ] = useState('') 

  const [ searchText, setSearchText ] = useState('') 

  console.log("persons-state is now: ", persons);
  console.log("newName-state is now: ", newName);
  console.log("newNumber-state is now: ", newNumber);
  console.log("searchText is now: ", searchText);
  
  //! olion lisäys
  const addContact = (event) => {
      event.preventDefault()
      const personObject = {
        name: newName,
        number: newNumber,
        id: newName
      }       
      const newPersons = [...persons, personObject]
      if(!persons.some(person => person.name === newName)) {
        setPersons(newPersons);
      } else {
        alert(`${newName} is already added to phonebook`)
      }  
      setNewName('');
      setNewNumber('');
  }

  //! lomakkeen toiminta 
  const handleNameChange = (event) => {
      setNewName(event.target.value)        
  }
  const handleNumberChange = (event) => {
      setNewNumber(event.target.value)        
  }
  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterForm 
        handleSearchChange={handleSearchChange}
        searchText={searchText}
      />
      <h3>Add a new contact</h3>
      <PersonForm 
        newName={newName} 
        newNumber={newNumber}
        addContact={addContact}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      /> 
      <h3>Numbers</h3>
      <Persons persons={persons} searchText={searchText}/>
    </div>
  )
}

export default App 
