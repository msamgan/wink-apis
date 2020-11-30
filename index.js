const express = require('express')
const app = express()
const port = 3000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

const blog = require('./controllers/blog')

app.get('/', blog.index)
