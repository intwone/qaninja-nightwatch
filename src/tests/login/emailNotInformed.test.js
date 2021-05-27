module.exports = {
  'E-mail não informado': browser => {
    const login = browser.page.login()

    login
      .with('', 'cassio')
      .expectAlert('@alertInfo', 'Opps. Cadê o email?')
  }
}