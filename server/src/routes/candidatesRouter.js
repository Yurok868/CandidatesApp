const express = require('express');
const { Candidate } = require('../../db/models');
const { verifyAccessToken } = require('../middlewares/verifyTokens');
const candidatesRouter = express.Router();
candidatesRouter.get('/', async (req, res) => {
  try {
    const candidates = await Candidate.findAll();
    res.json(candidates);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Ошибка получения данных' });
  }
});
candidatesRouter.post('/', async (req, res) => {
  try {
    const { fullName, email, phone, experience, status, resume, photo} = req.body;
    if (!fullName || !email || !phone || !experience || !status || !resume || !photo) {
      res.status(400).send('Ошибка клиента');
    }
    const newCandidate = await Candidate.create({
      fullName,
      email,
      phone,
      experience,
      status,
      resume,
      photo,
    
    });
    res.status(201).json(newCandidate);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Ошибка создания данных' });
  }
});
candidatesRouter.delete('/:candidateId', verifyAccessToken, async (req,res)=>{
    try{
    const { candidateId } = req.params;

    if (!candidateId) {
      return res.status(400).json({ message: 'Требуется параметр ' });
    }

    const deletedCandidate = await Candidate.destroy({ where: { id: candidateId } });

    if (!deletedCandidate ) {
      return res.status(404).json({ message: 'Кандидат не найден' });
    }

    return res.sendStatus(204);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Ошибка удаления данных' });
  }
});  
candidatesRouter.patch('/:candidateId', async (req, res) => {
    try {
      const { candidateId } = req.params;
      const { status } = req.body;
  
      if (!candidateId || !status) {
        return res.status(400).json({ message: 'Требуются параметры' });
      }
  const candidate = await Candidate.findOne({ where: { id: candidateId } });
      const updatedCandidate = await candidate.update({ status }, { where: { id: candidateId } });
  
      if (!updatedCandidate) {
        return res.status(404).json({ message: 'Кандидат не найден' });
      }
  
      return res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Ошибка обновления статуса' });
    }
  });
  module.exports =candidatesRouter
