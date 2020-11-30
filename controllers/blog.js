const methods = require('../helpers/methods')
const Post = require('../models/posts');

exports.index = async (req, res) => {
    res.send(methods.successResponse(
        'list of all the published posts',
        await Post.get()
    ))
}