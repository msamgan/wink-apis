const {Model, DataTypes} = require('sequelize')
const conn = require('../connection')
const sequelize = conn.connection.sequelize

class Author extends Model {
}

Author.init({
    name: DataTypes.TEXT,
    slug: DataTypes.TEXT
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'author', // We need to choose the model name
    tableName: 'wink_authors',
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

exports.author = Author