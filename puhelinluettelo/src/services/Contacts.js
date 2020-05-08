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

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

  export default { 
    getAll, 
    create, 
    update
    /* delete */
  }