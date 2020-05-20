import React from 'react'

const ContactsDisplay = ({contacts, searchText, removeContact}) => {

  const filterContacts = (array, searchValue) => {
    return array.filter(contact => contact.name.toLowerCase().includes(searchValue.toLowerCase()))
  }   
  
  const filtered = filterContacts(contacts, searchText);

  return (
    <>
      <h3>Numbers</h3>
      <ul style={{listStyleType: "none"}}>
          {filtered.map(contact => 
          <div key={contact.id}>
            <li>
              {contact.name} {' '}
              {contact.number} {' '}
            <button onClick={() => removeContact(contact.id)}>delete</button>
            </li>
          </div>
          )}
      </ul>
    </> 
  )
}
  
export default ContactsDisplay 