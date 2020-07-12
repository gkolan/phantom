const express = require('express');
const path = require('path');
const http = require('http');
const exphbs = require('express-handlebars');

const welcomeRouter = require('./api/routers/welcome/welcome.controller');

const app = express();

// Logger
const logger = require('tracer').colorConsole({
  preprocess: (data) => {
    data.title = data.title.toUpperCase();
  },
});

// Public Files
app.use(express.static(path.join(__dirname, '/assets')));

// Template Engine
app.set('views', path.join(__dirname, '/views'));
app.engine(
  '.hbs',
  exphbs({
    extname: '.hbs',
    helpers: {
      json: (context) => {
        return JSON.stringify(context);
      },
    },
  })
);
app.set('view engine', '.hbs');

// Routers
app.use(['/'], welcomeRouter);

// Server Details
const port = process.env.port || 3000;

const server = http.createServer(app);

server.listen(port, () => {
  logger.info(`App listening on port: ${server.address().port}`);
});
