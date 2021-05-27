module.exports = {
  '@tags': ['smoke'],

  'Login com sucesso': browser => {
    const sidebar = browser.page.sidebar()
    const login = browser.page.login()

    login.with('cassio.work93@gmail.com', 'cassio')

    sidebar.expectLoggedUser('Cassio Oliveira Silva')
  }
}