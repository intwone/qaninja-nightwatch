const registerMovieActions = {
  gotoRegisterMovie: function () {
    return this  
      .click('@addButton')
      .waitForElementVisible('@movieForm', 3000)
  },

  selectStatus: function (status) {
    return this
      .click('@statusSelectDropdown')
      .useXpath()
      .waitForElementVisible(`//li//span[contains(text(), "${status}")]`, 3000)
      .click(`//li//span[contains(text(), "${status}")]`)
      .useCss()
  },

  insertCast: function (cast) {
    const browser = this

    cast.forEach(actor => {
      return browser
        .setValue('@castInput', actor)
        .api.keys(browser.api.Keys.ENTER)
    })

    return browser
  },

  expectedUploadedFile: function (path, attribute, string) {
    return this
      .setValue('@uploadFileInput', path)
      .assert.attributeContains('@fileUploaded', attribute, string)
  },

  expectRegisteredTitleMovie: function (title) {
    return this
      .waitForElementPresent('@listRegisteredMovie', 3000)
      .assert.containsText('@listRegisteredMovie', title)
  }
}

module.exports = {
  commands: [registerMovieActions],

  elements: {
    addButton: '.movie-add',
    searchInput: 'input[placeholder^=Pesquisar]',
    searchButton: '#search-movie',
    movieForm: '#movie-form',
    titleInput: 'input[name=title]',
    statusSelectDropdown: 'input[placeholder=Status]',
    yearInput: 'input[name=year]',
    releaseDateInput: 'input[name=release_date]',
    castInput: '.cast',
    plotTextArea: 'textarea[name=overview]',
    uploadFileInput: '#upcover',
    fileUploaded: '.picture-src',
    registerButton: '#create-movie',
    listRegisteredMovie: 'table tbody',
    registeredMovie: 'table tbody tr',
    movieUnregisteredAlert: '.card-body span'
  }
}

