const {Model, DataTypes} = require('sequelize')
const conn = require('../connection')
const sequelize = conn.connection.sequelize

class Page extends Model {
}

Page.init({
    title: DataTypes.TEXT,
    slug: DataTypes.TEXT
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'page', // We need to choose the model name
    tableName: 'wink_pages',
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

exports.Page = Page


exports.all = async () => {
    return await Page.findAll()
}

exports.getBySlug = async (slug) => {
    return await Page.findOne({
        where: {
            slug: slug
        },
        attributes: ['id', 'slug', 'title', 'body', 'meta', 'created_at', 'updated_at']
    })
}


