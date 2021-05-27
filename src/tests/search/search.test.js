const pg = require('../../../lib/database')

let movieData = {}

module.exports = {
  before: browser => {
    const login = browser.page.login()
    login.with('cassio.work93@gmail.com', 'cassio')

    movieData = {
      title: 'Meu Namorado é um Zumbi',
      status: 'Em breve',
      year: 2015,
      releaseDate: '10/01/2015',
      cast: ['Nicholas Hoult', 'Teresa Palmer', 'Analeign Tipton', 'Rob Corddry'],
      cover: 'meu-namo-zumbi.jpg',
      plot: 'Em um mundo pós apocalíptico, um zumbi se apaixona por uma humana.'
    }

    pg.deleteByTitle(movieData.title)
    pg.insertMovie(movieData)
  },

  'dado que eu pesquiso um filme': browser => {
    const movie = browser.page.movie()

    movie
      .setValue('@searchInput', movieData.title)
      .click('@searchButton')
  },
 
  'então devo ver o filme na lista': browser => {
    const movie = browser.page.movie()

    movie
      .waitForElementVisible('@registeredMovie', 3000)
      .expect.elements('@registeredMovie').count.to.equal(1)
    
    movie.assert.containsText('@registeredMovie', movieData.title)
  }
}