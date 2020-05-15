
import React, { useState, useEffect } from 'react'

import ContactService from './services/ContactService'
import FilterForm from './components/FilterForm'
import ContactForm from './components/ContactForm'
import ContactsDisplay from './components/ContactsDisplay'
import Notification from './components/Shared/Notification'

const App = () => {
  const [ contacts, setContacts] = useState([]) 
  const [ newName, setNewName ] = useState('') 
  const [ newNumber, setNewNumber ] = useState('') 
  const [ searchText, setSearchText ] = useState('') 
  const [message, setMessage] = useState(null)
  const [errorStatus, setErrorStatus] = useState(false)

  useEffect(() => {
    console.log('from App.js/uEf/1, uEf Started');    
    ContactService
      .getAll()
      .then(initialContacts => {
        setContacts(initialContacts)
      })
      console.log('from App.js/uEf/1, uEf finished');
  }, [])
 
  const addContact = (event) => {
      event.preventDefault()
      const contactObject = {
        name: newName,
        number: newNumber,
        id: Math.random()
      }       
      let foundContact = contacts.find(contact => contact.name === newName);
    if (foundContact) { 
      window.confirm(`${newName} is already in the phonebook, replace the old number with a new one?`)
      let id = foundContact.id
      console.log('from addContact() / update / 1, id is: ', id);
      ContactService
        .update(id, contactObject)
        .then(returnedContact => {
          console.log('from App.js/addContact() / update 2, returnedContact is :', returnedContact);
          setContacts(contacts.map(contact => contact.id !== id ? contact : returnedContact))
          setMessage(`Contact ${newName} in the phonebook was updated`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
        .catch(errоr => {
          setErrorStatus(true);
          setMessage(`Contact ${newName} was not found on the server`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
          setContacts(contacts.filter(contact => contact.id !== id))
        })
      } else {
      ContactService
       .create(contactObject)
       .then(returnedContact => {
         console.log('from App.js/addContact()/1, returnedContact is :', returnedContact);
         setContacts([...contacts, returnedContact]) 
         console.log('from App.js/addContact()/2, contacts is now:', contacts)
         setMessage(`Contact ${newName} was added to the phonebook`)
         setTimeout(() => {
           setMessage(null)
         }, 5000)
      })
    }
    setNewName('');
    setNewNumber('');
    setErrorStatus(false);
  }

  const removeContact = (contactToDelete) => {
    console.log('from deleteContact() / 1, contactToDelete is:', contactToDelete);
    if (contacts.some(contact => contact.id === contactToDelete.id)) {
      window.confirm(`Delete ${contactToDelete.name} ?`)
       ContactService
       .deleteContact(contactToDelete.id)
       .then(() => {
         const updatedContacts = contacts.filter(contact => contact.id !== contactToDelete.id)
        setContacts(updatedContacts)
        setMessage(`Contact ${contactToDelete.name} was deleted from the phonebook`)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
        })
        .catch(errоr => {
          setErrorStatus(true);
          setMessage(`Contact ${contactToDelete.name} was not found on the server`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
          setContacts(contacts.filter(contact => contact.id !== contactToDelete.id))
        })
    }
  }
  
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
      <Notification 
        message={message}
        errorStatus={errorStatus}
        />
      <FilterForm 
        handleSearchChange={handleSearchChange}
        searchText={searchText}
      />
      <ContactForm 
        newName={newName} 
        newNumber={newNumber}
        addContact={addContact}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      /> 
      <ContactsDisplay 
        contacts={contacts} 
        searchText={searchText}
        removeContact={removeContact}
        />
    </div>
  )
}

export default App 


