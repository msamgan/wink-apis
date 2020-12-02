const {Model, DataTypes} = require('sequelize')
const conn = require('../connection')
const Tag = require('./tag');
const Author = require('./author');
const sequelize = conn.connection.sequelize

class Post extends Model {
}

Post.init({
    title: DataTypes.TEXT,
    slug: DataTypes.TEXT,
    excerpt: DataTypes.TEXT,
}, {
    sequelize, // We need to pass the connection instance
    modelName: 'post', // We need to choose the model name
    tableName: 'wink_posts',
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

Post.belongsToMany(Tag.tag, {
    through: 'wink_posts_tags',
    timestamps: false
})

Post.belongsTo(Author.author)

const isPublishedScope = {
    published: 1
}


exports.allPublished = async () => {
    return await Post.findAll({
        where: isPublishedScope,
        include: [{
            model: Author.author
        }, {
            model: Tag.tag
        }]
    })
}

exports.getBySlug = async (slug) => {
    return await Post.findOne({
        where: {
            slug: slug
        },
        include: [{
            model: Author.author
        }, {
            model: Tag.tag
        }]
    })
}

exports.getByTag = async (tagSlug) => {
    return await Post.findAll({
        where: isPublishedScope,
        include: [{
            model: Author.author
        }, {
            model: Tag.tag,
            where: {
                slug: tagSlug
            }
        }]
    })
}

// the defined model is the class itself
//console.log(Post === sequelize.models.Post); // true