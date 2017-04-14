# nodejs-api-boilerplate

This is a Job platform example API in Node.js.

Written in ES6, using [Express.js](http://expressjs.com/) and [Sequelize.js](http://docs.sequelizejs.com/).

## Development

Run the server with `npm run dev`

This will copy contents in src, create dist folder and serve the application.

## Build

Run `npm run build`

## Environment Variables

This boilerplate uses a [dotenv](https://github.com/motdotla/dotenv) which will load a `.env` file that you should create inside src. The file should look like this:
```
PORT=8000
NODE_ENV=development
DATABASE_URL=postgres://postgres:postgres@localhost:5432/database
```
