const {Model} = require('sequelize')
const conn = require('../connection')
const sequelize = conn.connection.sequelize

class Post extends Model {
}

Post.init({}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Post', // We need to choose the model name
    tableName: 'wink_posts',
    timestamps: false
});

exports.get = async () => {
    return await Post.findAll({
        attributes: ['id', 'title', 'slug', 'excerpt', 'featured_image', 'publish_date'],
        where: {
            published: 1
        }
    })
}

// the defined model is the class itself
//console.log(Post === sequelize.models.Post); // true