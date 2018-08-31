'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onCreateList = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  console.log('Data is: ', data)
  api.createList(data)
    .then(ui.createListSuccess)
    .catch(ui.createListFailure)
}

const onGetLists = function (event) {
  event.preventDefault()
  api.getLists()
    .then(ui.getChecklistsSuccess)
    .catch(ui.getChecklistsFailure)
}

const onHideLists = () => {
  event.preventDefault()
  ui.hideLists()
}

const addHandlers = () => {
  $('.create-checklist').on('submit', onCreateList)
  $('#show-checklists').on('click', onGetLists)
  $('#hide-checklists').on('click', onHideLists)
}

module.exports = {
  addHandlers
}
