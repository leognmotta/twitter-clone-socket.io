const Tweet = require('../models/Tweet');

exports.putAddLike = async (req, res, next) => {
  const tweet = await Tweet.findById(req.params.id);

  tweet.set({ likes: tweet.likes + 1 });

  await tweet.save();

  req.io.emit('like', tweet);

  return res.status(200).json(tweet);
};
