const Movie = require('../models/Movie');

exports.getAllMovies = (req, res, next) => {
  Movie.find().then(
    (movies) => {
      const mappedMovies = movies.map((movie) => {
        movie.imageUrl = req.protocol + '://' + req.get('host') + '/images/' + movie.imageUrl;
        return movie;
      });
      res.status(200).json(mappedMovies);
    }
  ).catch(
    () => {
      res.status(500).send(new Error('Erreur base de données'));
    }
  );
};

exports.getOneMovie = (req, res, next) => {
  Movie.findById(req.params.id).then(
    (movie) => {
      if (!movie) {
        return res.status(404).send(new Error('Film introuvable !'));
      }
      movie.imageUrl = req.protocol + '://' + req.get('host') + '/images/' + movie.imageUrl;
    //   pour afficher une image (contenue dans bgUrl par exemple) depuis le backend (attention, juste sur la fiche de détail dans ce cas précis)
      movie.bgUrl = req.protocol + '://' + req.get('host') + '/images/' + movie.bgUrl;
      res.status(200).json(movie);
    }
  ).catch(
    () => {
      res.status(500).send(new Error('Erreur base de données'));
    }
  )
};
