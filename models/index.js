const User = require("./User");
const Resume = require("./Resume");

Resume.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Resume };
