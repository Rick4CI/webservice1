const { DataTypes } = require("sequelize");

const invoice = sequelize.define('invoice', {
    id_customer: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: DataTypes.TEXT,
        not_null: true,
    },
    first_name: {
        type: DataTypes.STRING(30),
        not_null: true,
    },
    surname: {
        type: DataTypes.STRING(30),
        not_null: true,
    },
    gender: {
        type: DataTypes.CHAR(1),
        not_null: true,
    },
    telephone: {
        type: DataTypes.STRING(15),
        not_null: true,
    },
    address: {
        type: DataTypes.STRING(100),
        not_null: true,
    },
    age: {
        type: DataTypes.INTEGER,
        not_null: true,
    },
});