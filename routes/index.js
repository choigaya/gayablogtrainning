const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('header');
});

router.get('/portfolio', (req, res, next) => {
    res.render('header');
});

router.get('/develop', (req, res, next) => {
    res.send('develop');
});

router.get('/art', (req, res, next) => {
    res.send('art');
});

router.get('/accounting', (req, res, next) => {
    res.send('accounting');
});

router.get('/language', (req, res, next) => {
    res.send('language');
});

router.get('/page', (req, res, next) => {
    res.send('page');
});

router.get('/about', (req, res, next) => {
    res.send('about');
});

router.get('/blog', (req, res, next) => {
   res.send('blog');
});

module.exports = router;