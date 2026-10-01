const Student = require("../models/Student");

const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

const getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ error: "Student not found" });
        }
        res.json(student);
    } catch (error) {
        res.status(400).json({ error: "Invalid student ID" });
    }
};

const createStudent = async (req, res) => {
    try {
        const created = await Student.create(req.body);
        res.status(201).json(created);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateStudent = async (req, res) => {
    try {
        const updated = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updated) {
            return res.status(404).json({ error: "Student not found" });
        }
        res.json(updated);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteStudent = async (req, res) => {
    try {
        const deleted = await Student.findByIdAndDelete(req.params.id);
        if (!deleted) {
            return res.status(404).json({ error: "Student not found" });
        }
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: "Invalid student ID" });
    }
};

module.exports = {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent,
};
