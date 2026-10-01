const express = require("express");
const auth = require("../middleware/auth");
const requireRole = require("../middleware/requireRole");
const {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent,
} = require("../controllers/studentController");

const router = express.Router();

router.get("/", getAllStudents);
router.get("/:id", getStudentById);
router.post("/", auth, createStudent);
router.patch("/:id", auth, updateStudent);
router.delete("/:id", auth, deleteStudent);
router.delete("/:id", auth, requireRole("admin"), deleteStudent);

module.exports = router;
