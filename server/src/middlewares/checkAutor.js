const { Comment } = require('../../db/models');
async function checkAutor(req, res, next) {
  const { id } = req.params;
  const userId = res.locals.user.id;
  const targetComment = await Comment.findByPk(id);
 
  if (targetComment && targetComment?.userId === userId) return next();
  return res.sendStatus(403);
}
module.exports = checkAutor;
