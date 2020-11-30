const {Model} = require('sequelize')
const conn = require('../connection')
const sequelize = conn.connection.sequelize

class Tag extends Model {
}

Tag.init({}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Tag', // We need to choose the model name
    tableName: 'wink_tags',
    timestamps: false,
    underscored: true
});

exports.tag = Tag