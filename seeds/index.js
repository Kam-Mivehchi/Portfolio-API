const seedAbout = require('./about-seeds');
const seedPortfolio = require('./portfolio-seeds')
const seedContact = require('./contact-seeds')
const seedSkills = require('./skill-seeds')
const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedAbout();
    console.log('\n----- About SEEDED -----\n');
    await seedPortfolio();
    console.log('\n----- Portfolio SEEDED -----\n');
    await seedContact();
    console.log('\n----- Contact SEEDED -----\n');
    await seedSkills();
    console.log('\n----- Skills SEEDED -----\n');
    process.exit(0);
};

seedAll();
