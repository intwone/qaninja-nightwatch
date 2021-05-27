import { Pool } from 'pg'

const connectiontring = 'postgresql://postgres:qaninja@pgdb:5432/zombieplus'
const pool = new Pool({
  connectionString: connectiontring
})

export default {
  insertMovie: async movieData => {
    const query = `
      INSERT INTO movies(
        title, 
        status, 
        year, 
        release_date, 
        "cast", 
        overview,
        cover,
        created_at,
        updated_at)
      VALUES (
        '${movieData.title}',
        '${movieData.status}',
        '${movieData.year}',
        '${movieData.releaseDate}',
        '{${movieData.cast}}',
        '${movieData.plot}',
        '${movieData.cover},)',
        current_timestamp,
        current_timestamp)`

    await pool.query(query)
  },

  deleteByTitle: async title => {
    const query = `DELETE FROM movies WHERE title = '${title}'`

    await pool.query(query)
  }
}