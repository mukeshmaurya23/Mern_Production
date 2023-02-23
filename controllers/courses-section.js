const fs = require("fs");
const pdfparse = require("pdf-parse");

const analyzeResume = async (req, res) => {
  //console.log(req.file);
  const file = req.file;
  // console.log(file.path);
  const pdffile = fs.readFileSync(file.path);
  //check if the file is pdf or not and then parse it to get the data

  pdfparse(pdffile).then(function (data) {
    //console.log(data.numpages);
    // console.log(data.info);

    // console.log(data.text.toLowerCase());

    //find out the skills from the resume
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
      "Git",
      "GitHub",

      "Linux",
    ].map((skill) => skill.toLowerCase());

    const course = [
      {
        title: "Master the HTML5 and Bootstrap 4",
        name: "Html",
        link: "https://www.w3schools.com/html/",
        description:
          "HTML is the standard markup language for creating Web pages.",
        image: "https://www.w3schools.com/html/html5.gif",
      },
      {
        title: "Master the CSS3",
        name: "css",
        link: "https://www.w3schools.com/css/",
        description:
          "CSS is a language that describes the style of an HTML document.",
        image: "https://www.w3schools.com/css/css3.gif",
      },
      {
        title: "Java Advanced DSA+Alogrithms",
        name: "Java",
        link: "https://www.w3schools.com/js/",
        description:
          "JavaScript is the programming language of HTML and the Web.",
        image: "https://www.w3schools.com/js/js_logo.gif",
      },
      {
        title: "Android - The Complete Guide (incl Hooks, React Router, Redux)",
        name: "Android",
        link: "https://reactjs.org/",
        description:
          "React is a JavaScript library for building user interfaces.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
      },
      {
        title: "The Complete Node.js Developer Course (3rd Edition)",
        name: "node",
        link: "https://nodejs.org/en/",
        description:
          "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png",
      },
      {
        title: "The Complete 2020 Web Development Bootcamp",
        name: "linux",
        link: "https://www.linux.org/",
        description:
          "   Linux is a family of open source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds. Linux is typically packaged in a Linux distribution.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png",
      },
      {
        title: "Master Git and GitHub: Beginner to Expert",
        name: "git",
        link: "https://git-scm.com/",
        description:
          "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1200px-Git-logo.svg.png",
      },
    ].map((course) => {
      course.name = course.name.toLowerCase();
      return course;
    });

    //based on skills suggest courses to the user
    const suggestedCourses = [];
    skills.forEach((skill) => {
      if (data.text.toLowerCase().includes(skill)) {
        //console.log(skill);
        course.forEach((course) => {
          if (course.name.toLowerCase() === skill) {
            console.log(skill);
            suggestedCourses.push(course);
          }
        });
      }
    });
    //if resume skills more than 3 then give rating to the user

    console.log(suggestedCourses);
    res.send(suggestedCourses);
  });

  fs.unlink(file.path, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
};

module.exports = {
  analyzeResume,
};
