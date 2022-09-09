const User = require("./User");
const newLocal = "./Resume";
const Resume = require(newLocal);

Resume.belongsTo(User);
User.hasMany(Resume);

module.exports = {User, Resume};