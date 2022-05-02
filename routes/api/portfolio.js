const router = require('express').Router()
const { Portfolio } = require('../../models')

router.get('/', (req, res) => {
    Portfolio.findAll({})
        .then((data) => res.json(data))
        .catch((err) => res.status(500).json(err))
})


module.exports = router;