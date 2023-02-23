// const express = require("express");
// const router = express.Router();
// const { User } = require("../modals/user");

// router.get("/", async (req, res, next) => {
//   try {
//     const user = await User.findById(req.user._id);
//     if (user.role !== "admin") {
//       return res.status(401).send({ message: "Unauthorized" });
//     }
//     next();
//   } catch (error) {
//     res.status(500).send({ message: "Error in fetching user" });
//   }
// });
const express = require("express");
const router = express.Router();
const { User } = require("../modals/user");
router.get("/", (req, res, next) => {
  try {
    const user = User.findById(req.user._id);
    if (user.role !== "admin") {
      return res.status(401).send({ message: "Unauthorized" });
    }
    next();
  } catch (error) {
    res.status(500).send({ message: "Error in fetching user" });
  }
});

module.exports = router;
