const express = require('express');
const app = express();
const port = 3000;

const espIp = 'http://192.168.0.104'; // Replace with your ESP IP

app.get('/ON', (req, res) => {
  fetch(`${espIp}/ON`)
    .then(response => response.text())
    .then(data => res.send(data))
    .catch(err => res.status(500).send('Error communicating with ESP'));
});

app.get('/OFF', (req, res) => {
  fetch(`${espIp}/OFF`)
    .then(response => response.text())
    .then(data => res.send(data))
    .catch(err => res.status(500).send('Error communicating with ESP'));
});

app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
});
