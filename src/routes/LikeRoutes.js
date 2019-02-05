const express = require('express');

const routes = express.Router();

const likeController = require('../controllers/LikeController');

routes.put('/likes/:id', likeController.putAddLike);

module.exports = routes;
