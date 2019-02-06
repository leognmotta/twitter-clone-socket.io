const Tweet = require('../models/Tweet');

exports.getTweets = async (req, res, next) => {
  const tweets = await Tweet.find({}).sort('-createdAt');

  return res.status(200).json(tweets);
};

exports.postCreateTweet = async (req, res, next) => {
  const tweet = await Tweet.create(req.body);

  req.io.emit('tweet', tweet);

  return res.status(201).json(tweet);
};
