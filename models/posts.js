const {Model, DataTypes} = require('sequelize')
const conn = require('../connection')
const Tag = require('./tag');
const sequelize = conn.connection.sequelize

class Post extends Model {
}

Post.init({
    title: DataTypes.TEXT,
    slug: DataTypes.TEXT,
    excerpt: DataTypes.TEXT,
}, {
    sequelize, // We need to pass the connection instance
    modelName: 'Post', // We need to choose the model name
    tableName: 'wink_posts',
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

Post.belongsToMany(Tag.tag, {
    through: 'wink_posts_tags',
    timestamps: false
})

exports.get = async () => {
    return await Post.findAll({
        where: {
            published: 1
        },
        include: {
            model: Tag.tag
        }
    })
}

// the defined model is the class itself
//console.log(Post === sequelize.models.Post); // true