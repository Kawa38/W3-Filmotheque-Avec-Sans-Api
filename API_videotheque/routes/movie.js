const express = require('express');
const router = express.Router();

const movieCtrl = require('../controllers/movie');

router.get('/', movieCtrl.getAllMovies);
router.get('/:id', movieCtrl.getOneMovie);


module.exports = router;