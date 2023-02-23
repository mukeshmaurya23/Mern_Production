const express = require("express");
const router = express.Router();
const {
  deleteTestimonial,
  getTestimonial,
  postTestimonial,
} = require("../controllers/Testimonial");
router.post("/", postTestimonial);
router.get("/", getTestimonial);
router.delete("/:id", deleteTestimonial);

module.exports = router;
