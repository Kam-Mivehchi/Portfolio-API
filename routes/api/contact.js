const router = require('express').Router()
const { Contact } = require('../../models')

router.get('/', (req, res) => {
    Contact.findAll({})
        .then((data) => res.json(data))
        .catch((err) => res.status(500).json(err))
})
router.post('/', (req, res) => {
    Contact.create(req.body)
        .then((data) => res.json(data))
        .catch((err) => res.status(500).json(err))
})

module.exports = router
