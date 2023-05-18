const { DataTypes } = require("sequelize");
const { models } = require("./role.js");

const user = sequelize.define("user", {
    id_user: {
        type: DataTypes.STRING(320),
        not_null: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(50),
        not_null: true,
    },
    surname: {
        type: DataTypes.STRING(50),
        not_null: true,
    },
    email: {
        type: DataTypes.STRING(50),
        not_null: true,
    },
    photo: {
        type: DataTypes.TEXT,
        not_null: true,
    },
    id_role: {
        type: DataTypes.INTEGER,
        not_null: true,

    },
});
user.belongsTo(models.role, { foreignKey: 'id_role' });

