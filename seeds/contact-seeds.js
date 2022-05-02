const { Contact } = require('../models')


const contactData = [
    {
        name: 'devTest',
        email: 'test@test.com',
        message: 'testing testing'
    }
]


const seedContact = () => Contact.bulkCreate(contactData);

module.exports = seedContact
