const Tweet = require('../models/Tweet');

exports.getTweets = async (req, res, next) => {
  try {
    const tweets = await Tweet.find({}).sort('-createdAt');

    return res.status(200).json(tweets);
  } catch {
    const error = {
      status: 404,
      message: 'Unable to find tweets.'
    };
    next(error);
  }
};

exports.postCreateTweet = async (req, res, next) => {
  try {
    const tweet = await Tweet.create(req.body);

    req.io.emit('tweet', tweet);

    return res.status(201).json(tweet);
  } catch {
    const error = {
      status: 400,
      message: 'Unable to create tweet.'
    };
    next(error);
  }
};
