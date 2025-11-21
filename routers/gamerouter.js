const { whackaTitan, rockPaper, game3Page } = require('../controllers/games')

const router=require('express').Router()

router
  .route('/titan')
  .get(whackaTitan)

router
  .route('/rockPaperScissors')
  .get(rockPaper)
 
router
.route('/ticTacToe')
.get(game3Page)

  module.exports=router