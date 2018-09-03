'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onCreateList = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  console.log('Data is: ', data)
  api.createList(data)
    .then(() => onGetLists(event))
    .catch(ui.createListFailure)
}

const onGetLists = function (event) {
  event.preventDefault()
  api.getLists()
    .then(ui.getChecklistsSuccess)
    .catch(ui.getChecklistsFailure)
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
    .catch(ui.deleteListFailure)
}

const addHandlers = () => {
  $('.create-checklist').on('submit', onCreateList)
  $('#show-checklists').on('click', onGetLists)
  $('#hide-checklists').on('click', onHideLists)
  $('.checklists-display').on('click', 'button', onDeleteList)
}

module.exports = {
  addHandlers
}
