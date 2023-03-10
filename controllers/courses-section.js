const fs = require("fs");
const pdfparse = require("pdf-parse");
const Model = require("../modals/courses");
const analyzeResume = async (req, res) => {
  //console.log(req.file);
  const file = req.file;
  // console.log(file.path);
  const pdffile = fs.readFileSync(file.path);
  //check if the file is pdf or not and then parse it to get the data

  pdfparse(pdffile).then(async function (data) {
    const skills = [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node",
      "Express",
      "MongoDB",
      "Python",
      "Django",
      "java",
      "C++",
      "C",
      "C#",
      "PHP",
      "SQL",
      "MySQL",
      "PostgreSQL",
      "Ruby",
      "Ruby on Rails",
      "Swift",
      "Kotlin",
      "Go",
      "R",
      "Git",
      "GitHub",
      "Linux",
      "AWS",
      "Azure",
      "GCP",
      "Docker",
      "Kubernetes",
      "Data Science",
      "Machine Learning",
      "Python",
    ].map((skill) => skill.toLowerCase());

    const suggestedCourses = [];
    const resumeText = data.text.toLowerCase();
    skills.forEach((skill) => {
      if (resumeText.includes(skill)) {
        suggestedCourses.push(skill);
        console.log("skills", skill);
      }
    });
    //suggestedCourse=[my resume skills]
    console.log("suggested courses", suggestedCourses);
    //suggest the course that are not related to the skills
    const courses = await Model.find({});
    const coursesArray = courses.map((course) => course.title);
    console.log(coursesArray);
    //courseArray=[all courses]

    //suggest the course that is not part of suggestedCourse array and is part of courseArray

    const nonMatchingCourses = coursesArray.filter((course) => {
      const courseSkills = course.split(" ");
      return !courseSkills.some((skill) =>
        suggestedCourses.includes(skill.toLowerCase())
      );
    });

    // const rating = suggestedCourses.length > 5 ? 5 : suggestedCourses.length;
    res.send(
      nonMatchingCourses.map((course) => {
        return {
          title: course,

          id: courses.find((c) => c.title === course)._id,
        };
      })
    );

    fs.unlink(file.path, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
  });
};

module.exports = {
  analyzeResume,
};
