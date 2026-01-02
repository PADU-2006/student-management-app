const express = require('express');
const router = express.Router();

let students = [
    { id: 1, name: "arun", dept: "CS", age: 20 },
    { id: 2, name: "bala", dept: "EC", age: 21 }
];

// READ - Get all students
router.get('/', (req, res) => {
    res.json(students);
});

// CREATE - Add new student
router.post('/', (req, res) => {
    const { id, name, dept, age } = req.body;

    
    if (!id || !name || !dept || !age) {
        return res.status(400).json({ message: "Please provide all student details" });
    }

    const newStudent = { id, name, dept, age };
    students.push(newStudent);

    res.status(201).json({
        message: "Student added successfully",
        students: students 
    });
});
// CREATE - Add multiple students
router.post('/bulk', (req, res) => {
    const newStudents = req.body;
     if (Array.isArray(newStudents)) {
          students.push(...newStudents);
     } 
     else {
        students.push(...newStudents);
     }
     res.status(201).json({
        message: "Students added successfully",
        students: students
        });
});
//UPDATE student name by ID
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updateName = req.body.name;

    students = students.map(student =>
        student.id === id
            ? { ...student, name: updateName }
            : student
    );

    res.json({
        message: "Student updated successfully",
        students
    });
});
//UPDATE multiple student
router.put('/', (req, res) => {
    const updates = req.body;

    updates.forEach(update => {
        students = students.map(student =>
            student.id === update.id
            ? { ...student, name: update.name }
            : student

        );
    });

    res.json({
        message: "Student updated successfully",
        students
    });
});


module.exports = router;