<<<<<<< HEAD
const Login = require("./Login");
const Resume = require("./Resume");
const JobSeeker = require("./JobSeeker");
=======
const Login = require("../Login");
const Resume = require("../Resume");
const JobSeeker = require("../JobSeeker");
>>>>>>> 10cfd9c0d485d7131cb03689f3574c12ae5e6706

JobSeeker.HasMany(Resume);
Resume.BelongsTo(JobSeeker);
Login.BelongsTo(JobSeeker);
JobSeeker.HasOne(Login);

module.exports =  {JobSeeker, Resume, Login};