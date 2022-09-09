const User = require("./User");
const Resume = require("./Resume");

Resume.belongsTo(User);
User.hasMany(Resume);

module.exports =  {User, Resume};