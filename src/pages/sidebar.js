const userActions = {
  expectLoggedUser: function (username) {
    return this
      .waitForElementVisible('@userInfo', 3000)
      .assert.containsText('@userInfo', username)
  }
}

module.exports = {
  commands: [userActions],

  elements: {
    userInfo: '.user .info span'
  }
}