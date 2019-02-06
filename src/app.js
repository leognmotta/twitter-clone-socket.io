const http = require('http');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const tweetRoutes = require('./routes/TweetRoutes');
const likeRoutes = require('./routes/LikeRoutes');

const app = express();

const server = http.Server(app);
const io = require('socket.io')(server);

app.use((req, res, next) => {
  req.io = io;

  return next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use(tweetRoutes);
app.use(likeRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.status || 500;
  const message = error.message;
  res.status(status).json({ message: message, status: status });
});

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${
      process.env.DB_PASSWORD
    }@cluster0-sud5s.mongodb.net/${process.env.DB_NAME}`,
    { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true }
  )
  .then(result => {
    server.listen(process.env.PORT || 8080, () => {
      console.log(`App listening on port ${process.env.PORT || 8080}`);
    });
  })
  .catch(error => {
    console.log(error);
  });
