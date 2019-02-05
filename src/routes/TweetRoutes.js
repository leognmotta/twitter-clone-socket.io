const express = require('express');

const routes = express.Router();

const tweetController = require('../controllers/TweetController');

routes.get('/tweets', tweetController.getTweets);
routes.post('/tweets', tweetController.postCreateTweet);

module.exports = routes;
