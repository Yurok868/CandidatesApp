const express = require('express');
const { Candidate } = require('../../db/models');
const { verifyAccessToken } = require('../middlewares/verifyTokens');
const candidatesRouter = express.Router();
candidatesRouter.get('/', verifyAccessToken, async (req, res) => {
  try {
    const candidates = await Candidate.findAll();
    res.json(candidates);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Ошибка получения данных' });
  }
});
candidatesRouter.post('/', verifyAccessToken, async (req, res) => {
  try {
    const { fullName, email, phone, experience, status, resume } = req.body;
    if (!fullName || !email || !phone || !experience || !status || !resume) {
      res.status(400).send('Ошибка клиента');
    }
    const newCandidate = await Candidate.create({
      fullName,
      email,
      phone,
      experience,
      status,
      resume,

      userId: res.locals.user.id,
    });
    res.status(201).json(newCandidate);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Ошибка создания данных' });
  }
});
