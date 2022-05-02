const { Skills } = require('../models')

const skillData = [
    {
        skill: "JavaScript",
        category: "front"
    },


    {
        skill: "HTML",
        category: "front"
    },

    {
        skill: "Progressive Web Development",
        category: "front"
    },
    {
        skill: "Cascading Style Sheets(CSS)",
        category: "front"
    },
    {
        skill: "Adobe Illustrator",
        category: "front"
    },
    {
        skill: "SQL",
        category: "back"
    },
    {
        skill: "MongoDB",
        category: "back"
    },
    {
        skill: "Sequelize",
        category: "back"
    },
    {
        skill: "Mongoose",
        category: "back"
    },
    {
        skill: "Express.js",
        category: "back"
    },
    {
        skill: "Object Oriented Programming",
        category: "back"
    },
    {
        skill: "Node.js",
        category: "back"
    },

]

const seedSkills = () => Skills.bulkCreate(skillData)

module.exports = seedSkills
