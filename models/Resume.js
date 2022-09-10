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
    resumeTitle: {
      tyle: DataTypes.STRING,
      allowNull: false
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false
      },
    highlightedSkills: {
      type: DataTypes.STRING,
      allowNull: false
    },
    jobTitle1:{
      type: DataTypes.STRING,
      allowNull: false
    },
    companyName1:{
      type: DataTypes.STRING,
      allowNull: false
      },
    jobLocation1: {STRING,
      type: DataTypes.STRING,
      allowNull: false
    },
    jobDescription1: {STRING,
      type: DataTypes.STRING,
      allowNull: false
    },
    startDate1: {STRING,
      type: DataTypes.STRING,
      allowNull: false
    },
    currentlyWorking1: {STRING,
      type: DataTypes.BOOLEAN,
    },
    endDate1: {
      type: DataTypes.STRING,
    },
    jobTitle2: {STRING,
      type: DataTypes.STRING,
    },
    companyName2: {STRING,
      type: DataTypes.STRING,
    },
    jobLocation2: {STRING,
      type: DataTypes.STRING,
    },
    jobDescription2: {STRING,
      type: DataTypes.STRING,
    },
    startDate2: {STRING,
      type: DataTypes.STRING,
      allowNull: false
    },
    currentlyWorking2: {STRING,
      type: DataTypes.BOOLEAN,
    },
    endDate2: {
      type: DataTypes.STRING,
    },
    jobTitle3: {STRING,
      type: DataTypes.STRING,
    },
    companyName3: {STRING,
      type: DataTypes.STRING,
    },
    jobLocation3: {STRING,
      type: DataTypes.STRING,
    },
    jobDescription3: {STRING,
      type: DataTypes.STRING,
    },
    startDate3: {STRING,
      type: DataTypes.STRING,
      allowNull: false
    },
    currentlyWorking3: {STRING,
      type: DataTypes.BOOLEAN,
    },
    endDate3: {
      type: DataTypes.STRING,
    },
    degreeType1: {
      type: DataTypes.STRING,
    },
    schoolName1: {
      type: DataTypes.STRING,
    },
    eStartDate1: {
      type: DataTypes.STRING,
    },
    eEndDate1: {
      type: DataTypes.STRING,
    },
    degreeType2: {
      type: DataTypes.STRING,
    },
    schoolName2: {
      type: DataTypes.STRING,
    },
    eStartDate2: {
      type: DataTypes.STRING,
    },
    eEndDate2: {
      type: DataTypes.STRING,
    },
    certName1: {
      type: DataTypes.STRING,
    },
    certOrg1: {
      type: DataTypes.STRING,
    },
    certDate1: {
      type: DataTypes.STRING,
    },
    certName2: {
      type: DataTypes.STRING,
    },
    certOrg2: {
      type: DataTypes.STRING,
    },
    certDate2: {
      type: DataTypes.STRING,
    },

  },
  {
    sequelize,
  }
);

module.exports = Resume;

