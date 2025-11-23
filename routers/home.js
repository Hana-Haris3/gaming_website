const { homePage, game, about } = require('../controllers/home')

const router = require('express').Router()

router
  .route('/')
  .get(homePage)

router
  .route('/game')
  .get(game)

router
  .route('/about')
  .get(about)
module.exports = router