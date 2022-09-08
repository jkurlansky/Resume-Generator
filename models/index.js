const Login = require("../Login");
const Resume = require("../Resume");
const JobSeeker = require("../JobSeeker");

JobSeeker.HasMany(Resume);
Resume.BelongsTo(JobSeeker);
Login.BelongsTo(JobSeeker);
JobSeeker.HasOne(Login);

module.exports =  {JobSeeker, Resume, Login};