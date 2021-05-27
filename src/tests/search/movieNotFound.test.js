module.exports = {
  '@tags': ['smoke', 'movieNotFound'],

  before: browser => {
    const login = browser.page.login()

    login.with('cassio.work93@gmail.com', 'cassio')
  },

  'quando eu pesquiso por um filme não cadastrado': browser => {
    const movie = browser.page.movie()

    movie
      .setValue('@searchInput', 'movie_unregistered')
      .click('@searchButton')
  },

  'então devo ver a mensagem de alerta': browser => {
    const movie = browser.page.movie()
    const expectedMessage = 'Puxa! não encontramos nada aqui :('

    movie
      .waitForElementVisible('@movieUnregisteredAlert', 3000)
      .assert.containsText('@movieUnregisteredAlert', expectedMessage)
  },
}