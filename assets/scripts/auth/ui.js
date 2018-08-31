'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = function (error) {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signUpFailure ran. Error is :', error)
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

const signOutFailure = function (error) {
  $('#message').text('Error on sign out')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signOutFailure ran. Error is :', error)
}

const changePasswordSuccess = function () {
  $('#message').text('Changed password successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('changePasswordSuccess ran and nothing was returned!')
}

const changePasswordFailure = function (error) {
  $('#message').text('Error on change password')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('changePasswordFailure ran. Error is :', error)
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
