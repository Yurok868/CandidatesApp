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
        fullName: 'John Bates',
        email: 'johnbates@example.com',
        phone: '123456789',
        experience: 5,
        resume: 'https://i.pinimg.com/736x/63/57/49/635749e283f6fa869163500c02e0d68b.jpg',
        status: 'invited',
        photo:
          'https://i.pinimg.com/originals/0f/15/08/0f1508eebb6961733a607892725d7e04.jpg',
      },
      {
        fullName: 'Michael Levinson',
        email: 'michael@example.com',
        phone: '987654321',
        experience: 3,
        resume:
          'https://cdn-blog.novoresume.com/articles/software-engineer-resume/software-engineer-resume-sample.png',
        status: 'invited',
        photo:
          'https://avatars.mds.yandex.net/i?id=6fb8fb16bf3b006a3d88df5571e0338f5363a27f-5268626-images-thumbs&n=13',
      },

      {
        fullName: 'Alexa Ray',
        email: 'alexa@example.com',
        phone: '123456789',
        experience: 6,
        resume:
          'https://www.resumego.net/wp-content/uploads/Wordpress-Developer-Resume.png',
        status: 'invited',
        photo:
          'https://avatars.mds.yandex.net/i?id=6fb8fb16bf3b006a3d88df5571e0338f5363a27f-5268626-images-thumbs&n=13',
      },
      {
        fullName: 'Alan Doe',
        email: 'alan@example.com',
        phone: '9870154321',
        experience: 4,
        resume: 'https://xuluwarrior.github.io/jsonresume-theme-orbit/resume.jpg',
        status: 'techinterview',
        photo:
          'https://avatars.mds.yandex.net/i?id=6fb8fb16bf3b006a3d88df5571e0338f5363a27f-5268626-images-thumbs&n=13',
      },
      {
        fullName: 'Dwight Kavanagh ',
        email: 'dwight@example.com',
        phone: '9870154321',
        experience: 4,
        resume:
          'https://i.pinimg.com/originals/d5/d2/d7/d5d2d761b23813b8296c8d94ea61840c.jpg',
        status: 'techinterview',
        photo:
          'https://avatars.mds.yandex.net/i?id=6fb8fb16bf3b006a3d88df5571e0338f5363a27f-5268626-images-thumbs&n=13',
      },
      {
        fullName: 'Justin Nathan ',
        email: 'justin@example.com',
        phone: '9870154321',
        experience: 3,
        resume:
          'https://resumekraft.com/wp-content/uploads/2023/09/Net-Developer-Resume-Example.jpg',
        status: 'techinterview',
        photo:
          'https://avatars.mds.yandex.net/i?id=6fb8fb16bf3b006a3d88df5571e0338f5363a27f-5268626-images-thumbs&n=13',
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
