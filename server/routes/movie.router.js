const express = require('express');
const { actionChannel } = require('redux-saga/effects');
const router = express.Router();
const pool = require('../modules/pool')


// router.post('/',  (req, res) => {
//   let newMovie = req.body;
//   console.log(`Adding movie`, newMovie);

//   let queryText = `INSERT INTO "movies" ("title", "poster", description)
//                    VALUES ($1, $2, $3);`;
//   pool.query(queryText, [newMovie.title, newMovie.poster, newMovie.description])
//     .then(result => {
//       res.sendStatus(201);
//     })
//     .catch(error => {
//       console.log(`Error adding new book`, error);
//       res.sendStatus(500);
//     });
// });

router.get('/', (req, res) => {
  const queryText = `SELECT title, poster, id FROM "movies"
  ;`;
  console.log('Querying DB...');

  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing query', err);
      res.sendStatus(500);
    });
});

router.get('/:title', (req, res) => {
  const title = req.params.title
  const queryText = `SELECT "movies".title, "movies".description, "genres".name FROM "movies"
  LEFT JOIN "movies_genres" 
  ON "movies".id = "movies_genres".movies_id
  LEFT JOIN "genres" ON "movies_genres".genres_id = "genres".id
  
  
                    WHERE title ILIKE $1;`;
  console.log('in get detailsQuerying DB...');
  console.log(title);

  pool.query(queryText, [title])
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing query', err);
      res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
  console.log('movie.router.js (LINE:63) req.body:', req.body);
  // RETURNING "id" will give us back the id of the created movie
  const insertMovieQuery = `
  INSERT INTO "movies" ("title", "poster", "description")
  VALUES ($1, $2, $3)
  RETURNING "id";`

  // FIRST QUERY MAKES MOVIE
  pool.query(insertMovieQuery, [req.body.title, req.body.poster, req.body.description])
    .then(result => {
      // console.log('New Movie Id:', result.rows[0].id); //ID IS HERE!
      console.log('New Movie Id:', result.rows[0]); //ID IS HERE!

      const createdMovieId = result.rows[0].id
      // const createdMovieId = result.rows[0].movies_id;
      // console.log('The createdMovieId:', createdMovieId);
      

      // Depending on how you make your junction table, this insert COULD change.
      const insertMovieGenreQuery = `
      INSERT INTO "movies_genres" ("movies_id", "genres_id")
      VALUES  ($1, $2);
      `
      // SECOND QUERY MAKES GENRE FOR THAT NEW MOVIE
      // pool.query(insertMovieGenreQuery, [createdMovieId, req.body.genre_id]).then(result => {
      console.log(`LINE80: createMovieId: ${createdMovieId}; req.body.genre: ${req.body.genre}`);
        
      pool.query(insertMovieGenreQuery, [createdMovieId, req.body.genre]).then(result => {

        //Now that both are done, send back success!
        res.sendStatus(201);
      }).catch(err => {
        // catch for second query
        console.log(err);
        res.sendStatus(500)
      })

      // Catch for first query
    }).catch(err => {
      console.log(err);
      res.sendStatus(500)
    })
})

module.exports = router;