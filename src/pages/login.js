const loginActions = {
  with: function (email, password) {
    return this
      .navigate()
      .waitForElementVisible('@form', 3000)
      .setValue('@emailInput', email)
      .setValue('@passwordInput', password)
      .click('@loginButton')
  },

  expectAlert: function (type, message) {
    return this
      .waitForElementVisible(type, 3000)
      .assert.containsText(type, message)
  }
}

module.exports = {
  url: '/login',

  commands: [loginActions],

  elements: {
    form: '.card-login',
    emailInput: 'input[name=email]',
    passwordInput: 'input[name=password]',
    loginButton: '.login-button',
    alertDanger: '.alert-danger',
    alertInfo: '.alert-info'
  }
}