'use strict'

const showChecklistsTemplate = require('../templates/checklist-display.handlebars')

const createListFailure = function (error) {
  $('#message').html('').removeClass('alert alert-success').removeClass('alert alert-danger')
  $('#message').html('<p>Uh oh. Something went wrong</p>').addClass('alert alert-danger')
  console.log('Error is :', error)
}

const getChecklistsSuccess = (data) => {
  console.log(data)
  const showChecklistsHtml = showChecklistsTemplate({ checklists: data.checklists })
  $('.checklists-display').html(showChecklistsHtml)
}

const hideLists = () => {
  $('.checklists-display').empty()
}

const deleteListFailure = function (error) {
  $('#message').html('').removeClass('alert alert-success').removeClass('alert alert-danger')
  $('#message').html('<p>Uh oh. Something went wrong</p>').addClass('alert alert-danger')
  console.log('Error is :', error)
}

module.exports = {
  createListFailure,
  getChecklistsSuccess,
  hideLists,
  deleteListFailure
}
