const express = require('express');
const app = express();
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);


app.use(express.json());
app.set('port', process.env.PORT || 3000);


app.listen(app.get('port'), () => {
  console.log(`App is listening on port ${app.get('port')}`);
});

app.get('/', (request, response)=> {
  response.send('Please enter a valid route');
});

app.get('/api/v1/directors', (request, response) => {
  database('directors').select()
  .then(directors => {
    response.status(200).json(directors);
  })
  .catch(err => {
    response.status(500).json(err)
  })
})

app.get('api/v1/directors:id', (response, request) => {
  database('director').where('id', request.params.id).select()
  .then(director => {
    if(director.length) {
      response.status(200).json(director)
    } else {
      response.status(404).json({
        error: 'Cannot find that director'
      })
    }
  })
  .catch(err => {
    response.status(500).json(err)
  })
})

app.get('/api/v1/movies', (request, response) => {
  database('movies').select()
  .then(movies => {
    response.status(200).json(movies)
  })
  .catch(err => {
    resopnse.status(500).json(err)
  })
})

app.get('api/v1/movies:id', (response, request) => {
  database('movies').where('id', request.params.id).select()
  .then(movie => {
    if(movie.length) {
      response.status(200).json(movie)
    } else {
      response.status(404).json({
        error: 'Cannot find that movie'
      })
    }
  })
  .catch(err => {
    response.status(500).json(err)
  })
})


