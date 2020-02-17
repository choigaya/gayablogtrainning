const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'html')));

app.get('/', (req, res) =>  {
    res.sendFile(path.join(__dirname, 'html', 'index.html')); 
});

app.get('/portfolio', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'portfolio.html'));
});

app.get('/develop', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'develop.html'));
});

app.get('/art', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'art.html'));
});

app.get('/accounting', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'accounting.html'));
});

app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'blog.html'));
});

app.get('/blogpage', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'blogPage.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'about.html'));
});

app.listen(7700, () => {
   console.log("Server success!");
});



