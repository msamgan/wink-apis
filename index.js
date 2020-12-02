require('dotenv').config();

const express = require('express')
const app = express()
const port = process.env.PORT

console.log(`Node environment: ${process.env.NODE_ENV}`);
app.listen(port, () => {
    console.log(`Example app listening at port http://localhost:${port}`)
})

const blog = require('./controllers/blog')
const tag = require('./controllers/tag')
const page = require('./controllers/page')

/**
 * static URLS to be on top..
 */

app.get('/', blog.index)
app.get('/tags', tag.index)
app.get('/pages', page.index)

app.get('/:slug', blog.post)
app.get('/tag/:slug', blog.byTag)
app.get('/page/:slug', page.page)


