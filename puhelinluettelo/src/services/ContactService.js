import axios from 'axios'

/* const baseUrl = 'http://localhost:3001/api/persons' */

//! käytetään jos backend lukee frontend-tiedostoa omasta kansiostaan:
const baseUrl = 'api/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  console.log('from ContactService.js/getAll/1, request is :' , request);
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject) 
  console.log('from ContactService.js/create/1, request is :' , request);
  return request.then(response => response.data) 
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  console.log('from ContactService.js/update/1, request is :' , request);
  return request.then(response => response.data)
}

const deleteContact = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  console.log('from ContactService.js/deleteContact/1, request is :' , request);
  return request.then(response => response.data)
}

  export default { 
    getAll, 
    create, 
    update,
    deleteContact
  }