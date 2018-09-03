'use strict'

const config = require('../config.js')
const store = require('../store.js')

const createList = (data) => {
  return $.ajax({
    url: config.apiUrl + `/checklists`,
    method: 'POST',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data
  })
}

const getLists = function () {
  return $.ajax({
    url: config.apiUrl + `/checklists`,
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const deleteList = function (id) {
  return $.ajax({
    url: config.apiUrl + `/checklists/${id}`,
    method: 'DELETE',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createList,
  getLists,
  deleteList
}
