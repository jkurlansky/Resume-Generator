const { Model, DataTypes } = require("sequelize");
const sequelize  = require("../config/connection");

class Resume extends Model {}

Resume.init(
  {
    resume_Id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    objective: {
        type: DataTypes.STRING,
      },
    workHistory: {
      type: DataTypes.STRING,
    },
    education:{
      type: DataTypes.STRING,
    },
    skills:{
      type: DataTypes.STRING,
      },
    certifications: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
  }
);

module.exports = Resume;

