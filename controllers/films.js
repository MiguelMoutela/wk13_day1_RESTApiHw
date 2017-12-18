//since we don't have a database we'll use our front end models at the moment
const Film = require('../client/src/models/film');
const Review = require('../client/src/models/review');
const getFilms = require('../client/src/models/films');
const films = getFilms();
const express = require('express');
const filmRouter = new express.Router();

//index = show all
filmRouter.get('/', function(req,res) {
  res.json(films);
})

//show = show 1 film
filmRouter.get('/:id', function(req,res){
  const selectedFilm = films[req.params.id];
  res.json({ film: selectedFilm});
})

//add film form
filmRouter.post('/', function(req,res){
  //get the film from insomnia
  const newFilm = req.body.film;
  //add the film to the array
  films.push(newFilm);
  //display the films
  res.json(films);
})

//update a film
filmRouter.put('/:id', function(req, res){
  //get the film from insomnia
  const newFilm = req.body.film;
  //replace the old film with the new film
  films[req.params.id] = newFilm;
  //display the films
  res.json(films);
})

//delete a film
filmRouter.delete('/:id', function(req,res){
  //get the index of the film to remove
  const indexToRemove = req.params.id;
  //remove film from array
  films.splice(indexToRemove,1);
  //display the films
  res.json(films);
})

module.exports = filmRouter;
