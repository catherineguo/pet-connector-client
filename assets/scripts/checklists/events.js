'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onCreateList = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  api.createList(data)
    .then(ui.createListSuccess)
    .catch(ui.createListFailure)
}

const addHandlers = () => {
  $('.create-checklist').on('submit', onCreateList)
}

module.exports = {
  addHandlers
}
