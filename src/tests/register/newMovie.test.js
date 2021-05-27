const path = require('path')
const pg = require('../../../lib/database')

let movieData = {}

module.exports = {
  before: browser => {
    const login = browser.page.login()
    login.with('cassio.work93@gmail.com', 'cassio')

    movieData = {
      title: 'Resident Evil',
      status: 'Disponível',
      year: 2002,
      releaseDate: '01/05/2002',
      cast: ['Milla Jovavich', 'Ali Larter', 'Ian Glen', 'Shawn Roberts'],
      cover: 'resident-evil-2002.jpg',
      plot: 'A missão do esquadrão e da Alice é desligar a Rainha Vermelha e coletar dados o incidente.'
    }

    pg.deleteByTitle(movieData.title)
  },

  'quando eu faço o cadastro do filme': browser => {
    const movie = browser.page.movie()
    const pathFile = path.resolve(__dirname, '..', '..', 'assets', `${movieData.cover}`)

    movie
      .gotoRegisterMovie()
      .setValue('@titleInput', movieData.title)
      .selectStatus(movieData.status)
      .setValue('@yearInput', movieData.year)
      .setValue('@releaseDateInput', movieData.releaseDate)
      .insertCast(movieData.cast)
      .setValue('@plotTextArea', movieData.plot)
      .expectedUploadedFile(pathFile, 'src', 'blob')
      .click('@registerButton')
  },

  'então eu devo ver o filme cadastrado': browser => {
    const movie = browser.page.movie()

    movie.expectRegisteredTitleMovie(movieData.title)
  }
}

