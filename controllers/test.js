const skillsInResume = [
  "html",
  "css",
  "javascript",
  "react",
  "node",
  "express",
  "mongodb",
  "java",
  "c++",
  "c",
  "sql",
  "mysql",
  "go",
  "r",
  "git",
  "github",
];

const courseArray = [
  "Git Tutorial for Beginners",
  "Java Complete Course | Placement Series",
  "C++ Complete Course",
  "Docker Crash Course Tutorial",
  "Namaste 🙏 JavaScript",
  "React Js Tutorial For Beginners",
  "Python for Beginners (Full Course) | #100DaysOfCode",
  "Python Django Tutorials",
  "Spring Boot Quick Start",
];
const nonMatchingCourses = courseArray.filter((course) => {
  const courseSkills = course.split(" ");
  return !courseSkills.some((skill) =>
    skillsInResume.includes(skill.toLowerCase())
  );
});

console.log(nonMatchingCourses);
