import config from './config';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
// import fs from 'fs';

import express from 'express';
const server = express();

server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}))

server.set('view engine', 'ejs');

import serverRender from './serverRender';

server.get('/', (req, res) => {
  serverRender()
    .then(content => {
      res.render('index', {
        content
      });
    })
    .catch(console.error);
});

server.use('/api', apiRouter);
server.use(express.static('public'));

// server.get('/about.html', (req, res) => {
//   fs.readFile('./about.html', (err, data) => {
//     res.send(data.toString());
//   });
// });

server.listen(config.port, config.host, () => {
  console.info('Express listening on port ', config.port);
});


// import config, { nodeEnv, logStars } from './config';
//
// logStars('Function');

// import https from 'https';
//
// https.get('https://www.lynda.com', res => {
//   console.log('Response status code: ', res.statusCode);
//
//   res.on('data', chunk => {
//     console.log(chunk.toString());
//   });
// });

// import http from 'http';
//
// const server = http.createServer((req, res) => {
//   res.write('Hello HTTP\n');
//   setTimeout(() => {
//     res.write('I can stream!\n');
//     res.end();
//   }, 3000);
// });
//
// server.listen(8080);
