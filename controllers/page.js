const methods = require('../helpers/methods')
const Page = require('../models/page');

exports.index = async (req, res) => {
    res.send(methods.successResponse(
        'list of all the published pages',
        await Page.all()
    ))
}

exports.page = async (req, res) => {
    let page = await Page.getBySlug(req.params.slug)

    if (!page) {
        res.status(404).send(methods.notFountResponse);
    }

    res.send(methods.successResponse(
        'Page details',
        page
    ))
}