const express = require('express')
const router = express.Router()

const Tag = require('../../controllers/tag')
const Blog = require('../../controllers/blog')

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    //console.log('Time: ', Date.now())
    next()
})

router.get('/listing', Tag.index)
router.get('/:slug', Blog.byTag)

module.exports = router