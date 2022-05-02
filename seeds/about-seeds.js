const { About } = require('../models')


const aboutData = [
    {
        name: 'Kamyar Mivehchi',
        title: 'Full Stack Web Developer',
        about: `Full-Stack Software Engineer with a passion for developing responsive web-applications and learning new technologies.  Demonstrated experiencebuilding object-oriented web applications with JavaScript, HTML, CSS, Node.js, MS SQL Server and Web API’s. Proven ability to adapt priorities in a rapidly evolving environment. Motivated learner with a desire to collaborate with experienced professionals. Recent graduate of Full Stack Web development boot camp from UC Irvine with a B.S in Chemistry.`,
        top_skills: 'JavaScript (ES6+), React.js, Express.js, Node.js, SQL, git'
    }
]


const seedAbout = () => About.bulkCreate(aboutData);

module.exports = seedAbout


