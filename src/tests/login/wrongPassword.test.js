module.exports = {
  'Senha incorreta': browser => {
    const login = browser.page.login()

    login
      .with('cassio.work93@gmail.com', 'wrong_password')
      .expectAlert('@alertDanger', 'Usuário e/ou senha inválidos')
  }
}