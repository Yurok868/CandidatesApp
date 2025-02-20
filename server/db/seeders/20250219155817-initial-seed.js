const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'nicki',
          email: '1@1',
          password: await bcrypt.hash('123', 10),
          role: 'superAdmin',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'dusha',
          email: '2@2',
          password: await bcrypt.hash('123', 10),
          role: 'hr',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );

    await queryInterface.bulkInsert('Vacancies', [
      {
        name: 'Software Engineer',
        description: 'Looking for a skilled software engineer',
      },
      { name: 'Data Analyst', description: 'We need an expert in data analysis' },
    ]);
    await queryInterface.bulkInsert('Candidates', [
      {
        fullName: 'John Doe',
        email: 'johndoe@example.com',
        phone: '123456789',
        experience: 5,
        resume: 'path/to/resume.pdf',
        status: 'new',
       
      },
      {
        fullName: 'Jane Smith',
        email: 'janesmith@example.com',
        phone: '987654321',
        experience: 3,
        resume: 'path/to/resume2.pdf',
        status: 'invited',
       
      },
    ]);
    await queryInterface.bulkInsert('Comments', [
      { userId: 1, text: 'Strong candidate, good for interview' },
      { userId: 2, text: 'Needs more experience in SQL' },
    ]);

    // pdf вставить правильный путь
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
