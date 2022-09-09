const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../config/connection");

class Resume extends Model {}

Resume.init(
  {
    resume_Id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    jseeker_Id: {
      type: DataTypes.INTEGER,
      references: {
         model: Jobseeker,
         key: 'jseeker_Id',
       },
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
      type: DatatTypes.STRING,
    },
    skills:{
      type: DataTypes.STRING,
      },
    certifications: {STRING,
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
  }
);

module.exports = Resume;

