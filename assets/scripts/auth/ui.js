'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').html('').removeClass('alert alert-success').removeClass('alert alert-danger')
  $('#message').html("<p>You've signed up! Now sign in.</p>").addClass('alert alert-success')
  $('#sign-up input').val('')
  $('#sign-in input').val('')
  $('#sign-up-container').hide()
  $('#sign-in-container').show()
  $('#sign-in-container a').hide()
}

const signUpFailure = function () {
  $('#message').html('').removeClass('alert alert-success').removeClass('alert alert-danger')
  if ($('#password').val() !== $('#confirm-password').val()) {
    $('#message').html("<p>Sorry, your passwords don't match.</p>").addClass('alert alert-danger')
    $('#password').val('')
    $('#confirm-password').val('')
  } else {
    $('#message').html('<p>Sorry, something went wrong. Please try again.</p>').addClass('alert alert-danger')
    $('#sign-up input').val('')
  }
}

const signInSuccess = function (data) {
  $('#sign-in input').val('')
  $('#message').html('').removeClass('alert alert-success').removeClass('alert alert-danger')
  $('.landing-page').hide()
  $('#navbar').show()
  store.user = data.user
}

const signInFailure = function () {
  $('#message').html('').removeClass('alert alert-success').removeClass('alert alert-danger')
  $('#message').html('<p>Oops, try again.</p>').addClass('alert alert-danger')
  $('#sign-in input').val('')
}

const signOutSuccess = function () {
  $('#message').html('').removeClass('alert alert-success').removeClass('alert alert-danger')
  $('#message').html('<p>Successfully signed out.</p>').addClass('alert alert-success')
  $('.landing-page').show()
  $('#navbar').hide()
  store.user = null
}

const signOutFailure = function () {
  $('#message').html('').removeClass('alert alert-success').removeClass('alert alert-danger')
  $('#message').html('<p>Sign out failed.</p>').addClass('alert alert-danger')
}

const changePasswordSuccess = function () {
  $('.password-message').text('Changed password successfully')
  $('.change-password input').val('')
}

const changePasswordFailure = function () {
  $('.password-message').text('Error on change password')
  $('.change-password input').val('')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
