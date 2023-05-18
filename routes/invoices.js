const { DataTypes } = require("sequelize");
const { models } = require("./user.js");

const invoice = sequelize.define('invoice', {
    id_invoice: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    date: {
        type: DataTypes.DATE,
        not_null: true,
    },
    amount: {
        type: DataTypes.INTEGER,
        not_null: true,
    },
    title: {
        type: DataTypes.STRING(80),
        not_null: true,
    },
    typology: {
        type: DataTypes.STRING(20),
        not_null: true,
    },
    description: {
        type: DataTypes.TEXT,
        not_null: true,
    },
    id_user: {
        type: DataTypes.STRING(320),
        not_null: true,
    },
    id_customer: {
        type: DataTypes.INTEGER,
        not_null: true,
    },
});
invoice.belongTo(models.user, { foreignKey: 'id_user' });
invoice.belongTo(models.customer, { foreignKey: 'id_customer' });
