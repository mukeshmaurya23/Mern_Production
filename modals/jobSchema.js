const mongoose = require("mongoose");
const jobSchema = new mongoose.Schema({
  title: String,
  subTitle: String,
  role: String,
  experience: String,
  level: String,
  location: String,
  jobStat: String,
  jobDays: String,
  companyName: String,
  fav: Boolean,

  //count days from the date of posting
  date: String,
  //count no of applicants
  applicants: Number,
  salary: String,
  //count no of views
  views: Number,
  //count no of shares
  shares: Number,
  overview: String,

  jobDesc: [
    {
      description: String,
    },
  ],
  logo: String,
});
const JobModal = mongoose.model("JobModal", jobSchema, "Jobs");
module.exports = JobModal;
