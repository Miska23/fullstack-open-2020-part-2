//TODO: siirrä komponentit omiin tiedostoihinsa
//TODO: kokeile tehdä yksi Form-komponentti, joka osaa 
//TODO: renderöidä kaksi erinäköistä formia annettujen tietojen perusteella (https://reactjs.org/docs/composition-vs-inheritance.html)
//TODO: tee tietojen tallennus palvelimelle (2.15)
//TODO: palvelinkommunikaatio omaan moduuliin (2.16)
//TODO:  tietojen poistamistoiminto palvelimelta (2.17)
//TODO: PUT-pyyntö jossa tulee ilmoitus mikäli olem. olevan henkilön numeroa yritetään vaihtaa (2.18)

import React, { useState, useEffect } from 'react'
import axios from 'axios'

import FilterForm from './components/FilterForm'
import PersonForm from './components/PersonForm'
import PersonsDisplay from './components/PersonsDisplay'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('') 
  const [ newNumber, setNewNumber ] = useState('') 
  const [ searchText, setSearchText ] = useState('') 

  useEffect(() => {
    console.log('From useEffect: effect fired')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('From useEffect: promise fulfilled')
        setPersons(response.data)
      })
  }, [])

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


