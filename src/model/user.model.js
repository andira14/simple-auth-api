const { DataTypes, Sequelize } = require("sequelize");
const DbUtil = require("../util/db.util");

module.exports = DbUtil.getInstance().define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'users',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});