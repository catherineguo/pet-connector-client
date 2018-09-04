'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
const store = require('../store.js')

const onCreateList = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  api.createList(data)
    .then(() => onGetLists(event))
    .catch(ui.failure)
}

const onGetLists = function (event) {
  event.preventDefault()
  api.getLists()
    .then(ui.getChecklistsSuccess)
    .catch(ui.failure)
}

const onHideLists = (event) => {
  event.preventDefault()
  ui.hideLists()
}

const onDeleteList = (event) => {
  event.preventDefault()
  const listId = $(event.target).parent().data('id')
  api.deleteList(listId)
    .then(() => onGetLists(event))
    .catch(ui.failure)
}

const onClickEdit = (event) => {
  store.listId = $(event.target).parent().data('id')
  console.log('store.listId is: ', store.listId)
}

const onUpdateList = (event) => {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.updateList(store.listId, data)
    .then(() => onGetLists(event))
    .catch(ui.failure)
}

const addHandlers = () => {
  $('.create-checklist').on('submit', onCreateList)
  $('#show-checklists').on('click', onGetLists)
  $('#hide-checklists').on('click', onHideLists)
  $('.checklists-display').on('click', '#delete-button', onDeleteList)
  $('.checklists-display').on('click', '#edit-button', onClickEdit)
  $('.update-checklist').on('submit', onUpdateList)
}

module.exports = {
  addHandlers
}
