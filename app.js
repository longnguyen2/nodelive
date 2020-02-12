const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'js')));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/embed/:channel', (req, res) => {
  res.render('embed-video', {channel: req.params.channel});
});

app.listen(3000, () => console.log('App is listening at port 3000'));
