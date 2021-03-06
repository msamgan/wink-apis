const methods = require('../helpers/methods')
const Post = require('../models/posts');

exports.index = async (req, res) => {
    res.send(methods.successResponse(
        'list of all the published posts',
        await Post.allPublished()
    ))
}

exports.post = async (req, res) => {
    let post = await Post.getBySlug(req.params.slug)

    if (!post) {
        res.status(404).send(methods.notFountResponse);
    }

    res.send(methods.successResponse(
        'Post details',
        post
    ))
}

exports.byTag = async (req, res) => {
    res.send(methods.successResponse(
        'list of all the published posts by tag',
        await Post.getByTag(req.params.slug)
    ))
}