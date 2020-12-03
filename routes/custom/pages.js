const express = require('express')
const router = express.Router()

const Page = require('../../controllers/page')

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    //console.log('Time: ', Date.now())
    next()
})

router.get('/listing', Page.index)
router.get('/:slug', Page.page)

module.exports = router