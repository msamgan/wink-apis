const {Model} = require('sequelize')
const conn = require('../connection')
const sequelize = conn.connection.sequelize

class Tag extends Model {
}

Tag.init({}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'tag', // We need to choose the model name
    tableName: 'wink_tags',
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

exports.tag = Tag