const Model = require("../modals/jobSchema");

const postJob = async (req, res, next) => {
  const data = new Model({
    title: req.body.title,
    subTitle: req.body.subTitle,
    role: req.body.role,
    experience: req.body.experience,
    level: req.body.level,
    location: req.body.location,
    jobStat: req.body.jobStat,
    jobDays: req.body.jobDays,
    companyName: req.body.companyName,
    date: req.body.date,
    applicants: req.body.applicants,
    salary: req.body.salary,
    overview: req.body.overview,
    jobDesc: req.body.jobDesc,
    logo: req.body.logo,
  });
  try {
    const result = await data.save();
    res.status(201).json({ message: "Data saved", createdData: result });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
// const addToFav = async (req, res, next) => {
//   //find the fav and make it true
//   try {
//     //find the fav from model and make it true
//     const jId = req.params.id;
//     console.log(jId);
//     Model.findById(jId).then((job) => {
//       if (!job) {
//         return res.status(404).json({ message: "Job not found" });
//       }
//       job.fav = true;
//       job.save();
//       res.status(200).json({ message: "Job added to fav" });
//     });
//   } catch (err) {
//     res.status(500).json({ error: err });
//   }
// };
// const removeFromFav = async (req, res, next) => {
//   //find the fav and make it false
//   try {
//     //find the fav from model and make it false
//     const jId = req.params.id;
//     console.log(jId);
//     Model.findById(jId).then((job) => {
//       if (!job) {
//         return res.status(404).json({ message: "Job not found" });
//       }
//       job.fav = false;
//       job.save();
//       res.status(200).json({ message: "Job removed from fav" });
//     });
//   } catch (err) {
//     res.status(500).json({ error: err });
//   }
// };

const getJobs = (req, res, next) => {
  Model.find()
    .then((data) => {
      //console.log(data);
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Internal Server Error" });
    });
};

const deleteJob = async (req, res, next) => {
  try {
    const jId = req.params.id;
    console.log(jId);

    Model.findById(jId).then((job) => {
      if (!job) {
        return res.status(404).json({ message: "Job not found" });
      }
      Model.findByIdAndRemove(jId)
        .then(() => {
          res.status(200).json({ message: "Job deleted" });
        })
        .catch((err) => {
          res.status(500).json({ error: err });
        });
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  postJob,
  getJobs,
  deleteJob,
  // addToFav,
  // removeFromFav,
};
