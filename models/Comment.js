const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {

}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        comment_body: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'comment',
    },
);

module.exports = Comment;