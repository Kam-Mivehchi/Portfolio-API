const router = require('express').Router()

const { Skills } = require('../../models')


router.get('/', (req, res) => {
    Skills.findAll({})
        .then((data) => res.json(data))
        .catch((err) => res.status(500).json(err))
})


module.exports = router