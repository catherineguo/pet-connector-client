'use strict'

const config = require('../config.js')
const store = require('../store.js')

const createList = (data) => {
  console.log('data: ', data)
  return $.ajax({
    url: config.apiUrl + `/checklists`,
    method: 'POST',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createList
}
