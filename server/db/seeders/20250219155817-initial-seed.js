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
        id: 1,
        fullName: 'Иван Иванов',
        email: 'ivan.ivanov@example.com',
        phone: '+7 (999) 123-45-67',
        experience: 5,
        status: 'invited',
        resume: 'JavaScript',
        photo:
          'https://avatars.mds.yandex.net/i?id=6fb8fb16bf3b006a3d88df5571e0338f5363a27f-5268626-images-thumbs&n=13',
      },
      {
        id: 2,
        fullName: 'Мария Петрова',
        email: 'maria.petrova@example.com',
        phone: '+7 (999) 987-65-43',
        experience: 3,
        status: 'techinterview',
        resume: 'Управление проектами',
        photo:
          'https://avatars.mds.yandex.net/i?id=6fb8fb16bf3b006a3d88df5571e0338f5363a27f-5268626-images-thumbs&n=13',
      },
      {
        id: 3,
        fullName: 'Алексей Смирнов',
        email: 'alexey.smirnov@example.com',
        phone: '+7 (999) 555-55-55',
        experience: 4,
        status: 'invited',
        photo:
          'https://avatars.mds.yandex.net/i?id=6fb8fb16bf3b006a3d88df5571e0338f5363a27f-5268626-images-thumbs&n=13',
      },
      {
        id: 4,
        fullName: 'Светлана Кузнецова',
        email: 'svetlana.kuznetsova@example.com',
        phone: '+7 (999) 321-45-67',
        experience: 5,
        status: 'worked',
        resume: 'SQL',
        photo:
          'https://avatars.mds.yandex.net/i?id=6fb8fb16bf3b006a3d88df5571e0338f5363a27f-5268626-images-thumbs&n=13',
      },
      {
        id: 5,
        fullName: 'Дмитрий Федоров',
        email: 'dmitry.fedorov@example.com',
        phone: '+7 (999) 654-32-10',
        experience: 3,
        status: 'techinterview',
        resume: 'Linux',
        photo:
          'https://avatars.mds.yandex.net/i?id=6fb8fb16bf3b006a3d88df5571e0338f5363a27f-5268626-images-thumbs&n=13',
      },
      {
        id: 6,
        fullName: 'Анна Сергеева',
        email: 'anna.sergeeva@example.com',
        phone: '+7 (999) 111-22-33',
        experience: 4,
        status: 'worked',
        resume: 'SEO',
        photo:
          'https://avatars.mds.yandex.net/i?id=6fb8fb16bf3b006a3d88df5571e0338f5363a27f-5268626-images-thumbs&n=13',
      },
      {
        id: 7,
        fullName: 'Ольга Васильева',
        email: 'olga.vasilieva@example.com',
        phone: '+7 (999) 222-33-44',
        experience: 6,
        status: 'worked',
        resume: 'Копирайтинг',
        photo:
          'https://avatars.mds.yandex.net/i?id=6fb8fb16bf3b006a3d88df5571e0338f5363a27f-5268626-images-thumbs&n=13',
      },
      {
        id: 8,
        fullName: 'Николай Сидоров',
        email: 'nikolai.sidorov@example.com',
        phone: '+7 (999) 333-44-55',
        experience: 4,
        status: 'invited',
        resume: 'Копирайтинг',
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
