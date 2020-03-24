const express = require('express');
const axios = require('axios');
const path = require('path');

const proxyServer = express();
proxyServer.use(express.static(path.resolve(__dirname, '..', 'public')));

const reservationServer = 'http://localhost:3002';
const reviewsServer = 'http://localhost:3001';

const redirectRequest = ({ method, originalUrl, params, }, domain) => (
  axios({
    url: `${domain}${originalUrl}`,
    method,
    params,
  })
);

proxyServer.use('/reviewsBundle.js', (req, res) => {
  redirectRequest(req, reviewsServer)
    .then(({ data }) => {
      res.send(data);
    });
});

proxyServer.use('/reservationsBundle.js', (req, res) => {
  redirectRequest(req, reviewsServer)
    .then(({ data }) => {
      res.send(data);
    });
});

proxyServer.use('/api/reviews', (req, res) => {
  redirectRequest(req, reviewsServer)
    .then(({ data }) => {
      res.send(data);
    });
});

proxyServer.use('/api/reservations', (req, res) => {
  redirectRequest(req, reservationServer)
    .then(({ data }) => {
      res.send(data);
    });
});

proxyServer.listen('3000', () => {
  console.log('Listening on port: 3000');
});