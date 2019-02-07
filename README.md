# Twitter backend clone with socket.io

**Note: the frontend app for this api can be found on the link below:**

[twitter-clone-react](https://github.com/leomotta121/twitter-clone-react)
[twitter-clone-react-native](https://github.com/leomotta121/twitter-clone-react-native)

## Instructions:

In the project directory, you can run:

`npm install`

It should install all dependencies, now run:

`npm run dev`

It will start the server on the .env.PORT or port 8080

**Note: Do not forget to add the .env file on the root project:**

Notice on `bin/dev` file:

```
require('dotenv/config')
require('../src/app.js')
```

For more information about dotenv click [here](https://www.npmjs.com/package/dotenv)

environment variables:

`PORT, DB_USER, DB_PASSWORD, DB_NAME`

**This project uses Mongodb Atlas URI**
