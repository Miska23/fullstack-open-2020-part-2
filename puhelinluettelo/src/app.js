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
  const [notification, setNotification] = useState(null)
    
  useEffect(() => {
    console.log('from App.js/uEf/1, uEf Started');    
    ContactService
      .getAll()
      .then(initialContacts => {
        setContacts(initialContacts)
      })
      console.log('from App.js/uEf/1, uEf finished');
  }, [])

  const showNotification = (message, classSelector='success') => {
    setNotification({ message, classSelector })
    setTimeout(() => {
      setNotification(null)
    }, 5000)
  }
 
  const addContact = (event) => {
    event.preventDefault()

    const foundContact = contacts.find(contact => contact.name === newName)
    if (foundContact) { 
      const acceptUpdating = window.confirm(`${foundContact.name} already in phonebook, replace the old number with new one?`)
        if (acceptUpdating) {
          ContactService
            .update(foundContact.id, {
              name: foundContact.name,
              number: newNumber
            }).then(returnedContact => {
              console.log('from App.js/addContact() / update 2, returnedContact is :', returnedContact);
              setContacts(contacts.map(contact => contact.id !== returnedContact.id ? contact : returnedContact))
              showNotification(`Contact ${newName} in the phonebook was updated`)
            }).catch(errоr => {  //! mongoosen validointierror, jos tulee kahden selaimen virhe, ohjelma kaatuu
              const {err: errorMessage} = errоr.response.data
              showNotification(`${errorMessage}`, 'error')
            })
        }

    } else {
      ContactService
       .create({
         name: newName,
         number: newNumber
       })
       .then(addedContact => {
         console.log('from App.js/addContact()/1, returnedContact is :', addedContact);
         setContacts([...contacts, addedContact]) 
         console.log('from App.js/addContact()/2, contacts is now:', contacts)
         showNotification(`Contact ${newName} was added to the phonebook`)
      }).catch(error => { 
        const {err: errorMessage} = error.response.data
        showNotification(`${errorMessage}`, 'error')
      })
    }
    setNewName('');
    setNewNumber('');  
  }

  const removeContact = (id) => {
    console.log('from deleteContact() / 1, id is:', id);
    const contactToDelete = contacts.find(contact => contact.id === id)
    const acceptDeleting = window.confirm(`Delete ${contactToDelete.name}`)
    if (acceptDeleting) {
       ContactService.deleteContact(contactToDelete.id)
        .then(() => {
          setContacts(contacts.filter(contact => contact.id !== contactToDelete.id))
          showNotification(`Contact ${contactToDelete.name} was deleted from the phonebook`)
        }).catch(errоr => {
          setContacts(contacts.filter(contact => contact.id !== contactToDelete.id))
          showNotification(`Contact ${contactToDelete.name} was not found on the server`, 'error')
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
        notification={notification}
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


              //! kontakteihin muut kuin se jota yritettiin päivittää poistamisen jälkeen,
              //! jolloin lista päivittyy vastaamaan palvelimen oikeaa tilaa
              /* setContacts(contacts.filter(contact => contact.id !== foundContact.id))
              showNotification(`Contact ${newName} was not found on the server`, 'error') */