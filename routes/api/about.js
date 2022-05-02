const router = require('express').Router()
const { About } = require('../../models');



router.get('/', (req, res) => {
    About.findAll({})
        .then((data) => res.json(data))
        .catch((err) => res.status(500).json(err))
})

module.exports = router