'use strict'

const showChecklistsTemplate = require('../templates/checklist-display.handlebars')

const failure = function () {
  $('#message').html('').removeClass('alert alert-success').removeClass('alert alert-danger')
  $('#message').html('<p>Uh oh. Something went wrong</p>').addClass('alert alert-danger').show('fast').delay(1000).hide('slow')
  $('.new-checklist-modal input').val('')
  $('.update-checklist-modal input').val('')
  $('.new-checklist-modal textarea').val('')
  $('.update-checklist-modal textarea').val('')
}

const getChecklistsSuccess = (data) => {
  const showChecklistsHtml = showChecklistsTemplate({ checklists: data.checklists })
  if (data.checklists.length > 0) {
    $('.checklists-display').html(showChecklistsHtml)
  } else {
    $('.checklists-display').html('<p>You have no checklists. Create a new one now!</p>')
  }
  $('.new-checklist-modal input').val('')
  $('.update-checklist-modal input').val('')
  $('.new-checklist-modal textarea').val('')
  $('.update-checklist-modal textarea').val('')
}

const showChecklistSuccess = (data) => {
  const currentChecklist = data.checklist
  $('#title').val(currentChecklist.title)
  $('#start_date').val(currentChecklist.start_date)
  $('#end_date').val(currentChecklist.end_date)
  $('#pet_name').val(currentChecklist.pet_name)
  $('#instructions').val(currentChecklist.instructions)
}

module.exports = {
  getChecklistsSuccess,
  failure,
  showChecklistSuccess
}
