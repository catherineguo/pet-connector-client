'use strict'

const createListSuccess = function (data) {
  $('#message').html('').removeClass('alert alert-success').removeClass('alert alert-danger')
  $('#message').html("<p>You've signed up! Now sign in.</p>").addClass('alert alert-success')
  console.log('Data is :', data)
}

const createListFailure = function (error) {
  $('#message').html('').removeClass('alert alert-success').removeClass('alert alert-danger')
  $('#message').html("<p>Uh oh. Something went wrong</p>").addClass('alert alert-danger')
  console.log('Error is :', error)
}

module.exports = {
  createListSuccess,
  createListFailure
}
