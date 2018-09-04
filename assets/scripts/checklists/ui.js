'use strict'

const showChecklistsTemplate = require('../templates/checklist-display.handlebars')

const failure = function () {
  $('#message').html('').removeClass('alert alert-success').removeClass('alert alert-danger')
  $('#message').html('<p>Uh oh. Something went wrong</p>').addClass('alert alert-danger')
  $('.new-checklist-modal input').val('')
  $('.update-checklist-modal input').val('')
  $('.new-checklist-modal textarea').val('')
  $('.update-checklist-modal textarea').val('')
}

const getChecklistsSuccess = (data) => {
  const showChecklistsHtml = showChecklistsTemplate({ checklists: data.checklists })
  $('.checklists-display').html(showChecklistsHtml)
  $('.new-checklist-modal input').val('')
  $('.update-checklist-modal input').val('')
  $('.new-checklist-modal textarea').val('')
  $('.update-checklist-modal textarea').val('')
}

const hideLists = () => {
  $('.checklists-display').empty()
}

module.exports = {
  getChecklistsSuccess,
  hideLists,
  failure
}
