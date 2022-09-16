const User = require("./User");
const Resume = require("./Resume");

User.hasMany(Resume, {
  foreignKey: "user_id",
});

Resume.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Resume };
