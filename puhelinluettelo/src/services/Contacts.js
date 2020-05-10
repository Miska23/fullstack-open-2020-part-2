import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  console.log('from Contacts.js/getAll/1, request is :' , request);
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject) //! request on promise
  console.log('from Contacts.js/create/1, request is :' , request);
  return request.then(response => response.data) //! toinen promise ekalle promiselle
}

/* Muuta toiminnallisuutta siten, että jos jo olemassaolevalle henkilölle lisätään numero,
korvaa lisätty numero aiemman numeron. Korvaaminen kannattaa tehdä HTTP PUT -pyynnöllä */

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const deleteContact = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  console.log('from Contacts.js/deleteContact/1, request is :' , request);
  return request.then(response => response.data)
}

  export default { 
    getAll, 
    create, 
    update,
    deleteContact
  }