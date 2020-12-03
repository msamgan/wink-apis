const Blog = require('../controllers/blog')

const tags = require('./custom/tags')
const pages = require('./custom/pages')

module.exports = function (app) {
    /**
     * static URLS to be on top..
     */
    app.get('/', Blog.index)
    app.get('/:slug', Blog.post)

    app.use('/tag', tags)
    app.use('/page', pages)
}