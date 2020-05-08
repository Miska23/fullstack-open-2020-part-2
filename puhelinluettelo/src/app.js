//TODO: muuta persons Contacts-nimiseksi
//TODO: tee tietojen tallennus palvelimelle (2.15)
//TODO: palvelinkommunikaatio omaan moduuliin (2.16)
//TODO:  tietojen poistamistoiminto palvelimelta (2.17)
//TODO: PUT-pyyntö jossa tulee ilmoitus mikäli olem. olevan henkilön numeroa yritetään vaihtaa (2.18)

import React, { useState, useEffect } from 'react'

import Contacts from './services/Contacts'
import FilterForm from './components/FilterForm'
import PersonForm from './components/PersonForm'
import PersonsDisplay from './components/PersonsDisplay'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('') 
  const [ newNumber, setNewNumber ] = useState('') 
  const [ searchText, setSearchText ] = useState('') 

  useEffect(() => {
    console.log('from App.js/uEf/1, uEf Started');    
    Contacts
      .getAll()
      .then(initialContacts => {
        setPersons(initialContacts)
      })
      console.log('from App.js/uEf/1, uEf finished');
  }, [])
 
  //! olion lisäys
  const addContact = (event) => {
      event.preventDefault()
      const personObject = {
        name: newName,
        number: newNumber,
        id: newName
      }       
/*    if(!persons.some(person => person.name === newName)) {
        setPersons(newPersons);
      } else {
        alert(`${newName} is already added to phonebook`)
      }   */
      Contacts
      .create(personObject)
      .then(returnedContact => {
        console.log('returnedContact is :', returnedContact);
/*         const newPersons = [...persons, returnedContact]; */
/*         setPersons(newPersons)
        setPersons([...persons, returnedContact]) //! onko OK vai pitääkö tehdä  kuten yllä?
 */        setNewName('');
        setNewNumber('');
      })
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
      <PersonForm 
        newName={newName} 
        newNumber={newNumber}
        addContact={addContact}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      /> 
      <PersonsDisplay persons={persons} searchText={searchText}/>
    </div>
  )

}

export default App 


