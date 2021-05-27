module.exports = {
  'Senha não informada': browser => {
    const login = browser.page.login()

    login
      .with('john_doe@test.com', '')
      .expectAlert('@alertInfo', 'Opps. Cadê a senha?')
  }
}