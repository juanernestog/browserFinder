const express = require('express');
const app = express();
app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.send(`<h1>Hola ${req.headers['user-agent']}!</h1>`);
  console.log(req.header['user-agent']);
});

app.listen(3000, () => console.log('Listening on port 3000!'));
