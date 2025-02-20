const checkAutor = require('../middlewares/checkAutor');
const {Comment} = require('../models/Comment');
const {verifyAccessToken} =require('../middlewares/verifyTokens')
const commentsRouter = require('express').Router();
commentsRouter.post('/', verifyAccessToken, checkAutor,async (req,res)=>{
    try{
        const {text,userId,candidateId} =req.body;
        if(!text || !userId || !candidateId){
          return  res.status(400).json({ message: 'Требуются параметры: текст, userId и candidateId' });
        }
        const newComment = await Comment.create({text,userId,candidateId})
        return res.status(201).json(newComment)
        }catch(err){
            console.log(err);
            res.status(500).json({error:'Ошибка создания данных'})
        }

    
})

commentsRouter.delete('/:commentId',verifyAccessToken,checkAutor,async(req,res) =>{
    try{ 
        const { commentId } = req.params;

        if (!commentId) {
            return res.status(400).json({ message: 'Требуется параметр' });
        }

        const deletedComment = await Comment.destroy({ where: { id: commentId } });

        if (!deletedComment) {
            return res.status(404).json({ message: 'Комментарий не найден' });
        }

        return res.sendStatus(204);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Ошибка удаления данных' });
    }
});
     
.patch(verifyAccessToken,checkAutor,async(req,res)=>{
    try{ 
        const{commentId} = req.params;
        const {text} = req.body;
        if(!commentId || !text){
            return res.status(400).json({message:'Требуются параметры'})

        }
        const updataComment = await Comment.update({text},{where:{id:commentId}})
        if(!updataComment){
            return res.status(404).json({message:'Комментарий не найден'})
        }
        return res.sendStatus(200)

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Ошибка обновления данных'})
    }
})
module.exports = commentsRouter;