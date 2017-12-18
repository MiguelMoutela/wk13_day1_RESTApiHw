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
  //add the cat to the array
  films.push(newFilm);
  //display the cats
  res.json(films);
})

//update a cat
filmRouter.put('/:id', function(req, res){
  //get the cat from insomnia
  const newFilm = req.body.film;
  //replace the old cat with the new cat
  films[req.params.id] = newFilm;
  //display the cats
  res.json(films);
})

//delete a cat
filmRouter.delete('xs/:id', function(req,res){
  //get the index of the cat to remove
  const indexToRemove = req.params.id;
  //remove cat from array
  films.splice(indexToRemove,1);
  //display the cats
  res.json(films);
})

module.exports = filmRouter;
