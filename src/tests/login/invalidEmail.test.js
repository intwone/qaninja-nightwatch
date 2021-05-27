module.exports = {
  'E-mail inválido': (browser) => {
    const login = browser.page.login()

    login
      .with('invalid_email@gmai.com', 'cassio')
      .expectAlert('@alertDanger', 'Usuário e/ou senha inválidos')
  }
}