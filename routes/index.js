const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index', { title: 'Gaya Blog' });
});

router.get('/portfolio', (req, res, next) => {
    res.render('portfolio', { title: 'Gaya - 포트폴리오' }); 
});

router.get('/develop', (req, res, next) => {
    res.render('develop', { title: 'Gaya - 개발공부' });
});

router.get('/art', (req, res, next) => {
    res.render('art', { title: 'Gaya - 문화예술' });
});

router.get('/account', (req, res, next) => {
    res.render('account', { title: 'Gaya - 재무/회계' });
});

router.get('/language', (req, res, next) => {
    res.render('language', { title: 'Gaya - 외국어공부' });
});

router.get('/blog', (req, res, next) => {
    res.render('blog', { title: 'Gaya - 블로그' });
});

router.get('/about', (req, res, next) => {
    res.render('about', { title: 'Gaya - About' }); 
});

router.get('/:id/page', (req, res, next) => {
    res.render('page', { title: 'Gaya - page' });
});

router.get('*', (req, res, next) => {
    res.send('404 not found');
});

module.exports = router;