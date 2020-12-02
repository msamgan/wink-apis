const blog = require('../controllers/blog')
const tag = require('../controllers/tag')
const page = require('../controllers/page')


module.exports = function(app){
    /**
     * static URLS to be on top..
     */

    app.get('/', blog.index)
    app.get('/tags', tag.index)
    app.get('/pages', page.index)

    app.get('/:slug', blog.post)
    app.get('/tag/:slug', blog.byTag)
    app.get('/page/:slug', page.page)
}