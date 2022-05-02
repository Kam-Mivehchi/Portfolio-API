const router = require('express').Router();

const aboutRoute = require('./about');
const portfolioRoute = require('./portfolio');
const contactRoute = require('./contact')
const skillsRoute = require('./skills.js')

router.use('/about', aboutRoute);
router.use('/portfolio', portfolioRoute);
router.use('/contact', contactRoute);
router.use('/skills', skillsRoute);
router.use('/', (req, res) => {
    res.send({
        "WELCOME": "My Name is Kamyar Mivehchi",
        "I'm": " a Full Stack Web Developer with a B.S. in Chemistry",
        "learn_more": "Go to the Following routes to learn more about me and my skills",
        "About_Me": "/api/about",
        "Porfolio_Projects": "/api/portfolio",
        "Skills": "/api/skills",
    })
})

module.exports = router