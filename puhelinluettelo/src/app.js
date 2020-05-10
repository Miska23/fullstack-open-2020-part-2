//TODO: muuta persons Contacts-nimiseksi
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

  console.log('from App.js/global/1, persons is now:', persons)

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
  //! tee kirjasinkoon ignoraus!
  const addContact = (event) => {
      event.preventDefault()
      const personObject = {
        name: newName,
        number: newNumber,
        id: Math.random()
      }       
    if (persons.some(person => person.name === newName)) { //! tähän kohtaan päivitystoiminto
      window.confirm(`${newName} is already in the phonebook, replace the old number with a new one?`)
      let foundPerson = persons.find(person => person.name === newName)
      let id = foundPerson.id
      console.log('from addContact() / update / 1, id is: ', id);
      Contacts
        .update(id, personObject)
        .then(returnedContact => {
          console.log('from App.js/addContact() / update 2, returnedContact is :', returnedContact);
          setPersons(persons.map(person => person.id !== id ? person : returnedContact)) //! tilan päivittäminen then-blockin sisällä - voisiko tehdä jälkeen vasta 
       })
      } else {
      Contacts
       .create(personObject)
       .then(returnedContact => {
         console.log('from App.js/addContact()/1, returnedContact is :', returnedContact);
         setPersons([...persons, returnedContact]) //! tilan päivittäminen then-blockin sisällä - voisiko tehdä jälkeen vasta 
         console.log('from App.js/addContact()/2, persons is now:', persons)
      })
    }
    setNewName('');
    setNewNumber('');
  }


  //! poisto toimii jos sivun päivittää mutta delete-pyynnön vastauksessa ei ole 
  //! tietoja poistetusta tai poistettavasta oliosta!
  const deleteContact = (personToDelete) => {
    console.log('from deleteContact() / 1, personToDelete is:', personToDelete);
    if (persons.some(person => person.id === personToDelete.id)) {
      window.confirm(`Delete ${personToDelete.name} ?`)
       Contacts
       .deleteContact(personToDelete.id)
       .then(() => {
         const updatedPersons = persons.filter(person => person.id !== personToDelete.id)
        setPersons(updatedPersons) 
      }) 
    } 
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
      <PersonsDisplay 
        persons={persons} 
        searchText={searchText}
        deleteContact={deleteContact}
        />
    </div>
  )

}

export default App 


