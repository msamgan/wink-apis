const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connection')

class Tag extends Model {
}

Tag.init({
    name: DataTypes.TEXT,
    slug: DataTypes.TEXT
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'tag', // We need to choose the model name
    tableName: 'wink_tags',
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

exports.tag = Tag

exports.all = async () => {
    return await Tag.findAll({
        order: [
            ['name', 'ASC']
        ],
    })
}


