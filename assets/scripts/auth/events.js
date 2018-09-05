'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

// Page elements to hide upon initial page load
const landingPageInit = () => {
  $('#sign-up-container').hide()
  $('#navbar').hide()
  $('.dashboard-layout').hide()
}

// Function to show sign up box
const showSignUp = (event) => {
  $('#sign-up-container').show()
  $('#sign-in-container').hide()
  $('#message').html('').removeClass('alert alert-danger')
}

// Function to show sign in box
const showSignIn = (event) => {
  $('#sign-in-container').show()
  $('#sign-up-container').hide()
  $('#message').html('').removeClass('alert alert-danger')
}

const onSignUp = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onClickChangePassword = function (event) {
  $('.password-message').text('')
}

const addHandlers = () => {
  $('#sign-up-link').on('click', showSignUp)
  $('#back-to-signin').on('click', showSignIn)
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('.sign-out').on('click', onSignOut)
  $('.change-password').on('submit', onChangePassword)
  $('.change-password-link').on('click', onClickChangePassword)
}

module.exports = {
  addHandlers,
  landingPageInit
}
