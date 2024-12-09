const { DataTypes } = require("sequelize");
const sequelize = require("db");

const Home = sequelize.define(
  "Home",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    home_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "HomeTypes",
        key: "id",
      },
      onDelete: "CASCADE",
    },
    residents: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
    },
    geo_location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    timezone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Activa",
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "homes",
    timestamps: true,
  }
);

module.exports = Home;
