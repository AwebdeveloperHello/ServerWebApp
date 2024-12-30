const express = require('express');
const path = require('path');
const data = require('./data/info');
const app = express();
const port = 3000;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); 


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', data); 
});

app.use((req, res) => {
    res.status(404).render('404'); 
  });

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});