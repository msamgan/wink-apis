const methods = require('../helpers/methods')
const Tag = require('../models/tag');

exports.index = async (req, res) => {
    res.send(methods.successResponse(
        'list of all the published tags',
        await Tag.all()
    ))
}