
const directorData = require('../../directorData');
const movieData = require('../../movieData');

const directors = directorData.directors
const movies = movieData.movies

const createDirectors = (knex, director) => {
  return knex('directors').insert({
    name: director.name,
    country: director.country,
    age: director.age
  }, id);
}

const createMovie = (knex, movie) => {
  return knex('directors').where('name', movie.director).first()
  .then(director => {
    return knex('movies').insert({
      name: movie.name,
      releaseDate: movie.releaseDate,
      director: movie.director,
      directorId: director.id
    })
  })
}

exports.seed = function(knex) {
  return knex('movies').del()
  .then(() => knex('directors').del())
  .then(() => {
    const directorProms = [];
    directors.forEach(director => {
      directorProms.push(createDirectors(knex, director))
    })
    return Promise.all(directorProms)
  })
  .then(() => {
    const movieProms = [];
    movies.forEach(movie => {
      movieProms.push(createMovie(knex, movie))
    })
    return Promise.all(movieProms)
  })
  .catch(err => console.log(`Error seeding data: ${err}`))
}