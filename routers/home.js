const { homePage, game } = require('../controllers/home')

const router = require('express').Router()

router
  .route('/')
  .get(homePage)

router
  .route('/game')
  .get(game)
module.exports = router