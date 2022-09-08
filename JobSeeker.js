const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../config/connection");

class JobSeeker extends Model {}

JobSeeker.init(
  {
    jseeker_Id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    resume_Id: {
        type: DataTypes.INTEGER,
        references: {
           model: Resume,
           key: 'resume_Id'
        }
      },
    userName: {
      type: DataTypes.STRING,
      references: {
         model: Login,
         key: 'userName'
      }
    },
    firstName: {
       type: DataTypes.STRING,
    },
    lastName: {
        type: DataTypes.STRING,
      },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    phone: { 
      type: DatatTypes.STRING,
    },
    address: {
      type: DatatTypes.STRING,
    },
    website: {
      type: DataTypes.STRING,
      },
    image: {STRING,
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
  }
);

module.exports = JobSeeker;

