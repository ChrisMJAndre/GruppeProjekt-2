//Here we import our models from the model directory - Chris
const classimport = require('../models/lecture');
const classimport1 = require('../models/listOfStudents');
const LectureInformation = classimport.LectureInformation;
const ListOfStudentsInformation = classimport1.ListOfStudentsInformation;

//pool required in order to send queries to the database - Chris
const pool = require('../../database/db');

//Export all the methodes so that they can be used in index.js - Chris
module.exports = {
    //async important so that the program only runs the specific method we call in index.js - Chris 
    //Create method that inserts all the data collected from the body into the Lecture table - Chris
    async create(req, res) {
        pool.query(`INSERT INTO lecture (lectureName, date, time, comment, teacher_id, classroom_id, course_id  ) VALUES
($1, $2, $3, $4, $5, $6, $7) RETURNING *`, [req.body.lectureName, req.body.date,
        req.body.time, req.body.comment, req.session.user.id, req.body.classroom, req.body.course]
        ).then(result => {
            res.redirect('/')
            //After successfully inserting the new data into the Lecture table, redirect the user back to the main page - Chris
        })
    },
    //Show method for showing information about the lecture - Chris
    async show(req, res) {
        //Requests the lectureId on the current lecture (example: "http://localhost:4000/lecture/1") - lectureId = 1 - Chris
        const lectureId = req.params.id;
        //Select statement so that we can join the tables - Chris
        //The Teacher Table is joined with the Lecture table, in order to get the information about the teacher, which will be displayed (see lecture.ejs) - Chris
        //Same reasoning with classroom and course table - Chris
        pool.query(`SELECT lecture.id, lecture.lecturename, lecture.date, lecture.time, lecture.comment,  lecture.teacher_id, teacher.id, teacher.firstName, teacher.lastName, classroom.location, course.title FROM lecture 
        INNER JOIN teacher ON lecture.teacher_id=teacher.id
        INNER JOIN classroom ON lecture.classroom_id=classroom.id
        INNER JOIN course ON lecture.course_id=course.id
        WHERE lecture.id=${lectureId}
        `).then(result => {
            const { id, lecturename, date, time, comment, teacher_id, firstname, lastname, location, title } = result.rows[0];
            //New instance of the model (class) LectureInformation is created to structure the data retrieved from the database - Chris
            const LectureInformationShow = new LectureInformation(id, lecturename, date, time, comment, teacher_id,
                firstname, lastname, location, title);
            LectureInformationShow.id = lectureId
            //Select statement so that we can join the tables - Chris
            //Student Table is joined with the listOfStudents Table in order to retrieve information about the student, which will be displayed (see lecture.ejs) - Chris
            pool.query(`SELECT listOfStudents.id, listOfStudents.student_id, listOfStudents.lecture_id, student.id, student.firstName, student.lastName, lecture_id FROM listOfStudents
        INNER JOIN student ON listOfStudents.student_id = student.id
        WHERE listOfStudents.lecture_id=${lectureId} 
         `).then(result => {
                //Right now this object created below, stores the information retrieved about the student and ListofStudents table - Chris
                const listOfStudents = new ListOfStudentsInformation(result.rows);
                const students = listOfStudents.getStudentList();
                //Render the lecture page, with the objects listed below - Chris
                res.render('lecture', { LectureInformationShow, user: req.session.user, students })
            })
        })
    },
    //Index method for rendering the Lectures page with all the current lectures in the database - Chris
    async index(req, res) {
        //Select statement to retrieve all the lectures created - Chris
        pool.query(`SELECT * FROM lecture`).then(result => {
            const lectures = result.rows;
            //Renders the page lectures containing all of the lectures (object - lectures) - Chris
            res.render('lectures', { lectures })
        })
    },
    //Destroy method in order to delete a lecture - Chris
    async destroy(req, res) {
        //Requests lectureId and User from the current page and session - Chris
        const lectureId = req.params.id;
        const { user } = req.session;
        //Permission is only granted if you are logged in as a teacher - Chris
        if (user.userType !== 'teacher') {
            return res.send('No permission')
        }
        //Since there is a relation between the listOfStudents Table and Lecture Table, we first have to delete the students in the listOfStudents Table before deleting the Lecture - Chris
        pool.query(`DELETE FROM listOfStudents WHERE listOfStudents.lecture_id=${lectureId}`
        ).then(result => {

            pool.query(`DELETE FROM lecture WHERE id=${lectureId} AND teacher_id=${user.id}`
            ).then(result => {

                return res.redirect('/lectures')
            })
        })
    },
    //Post method for inserting students into listOfStudents Table - Chris
    async post(req, res) {

        const { user } = req.session;
        const { lectureId } = req.body;
        //Permission only granted if you are logged in as a student
        if (user.userType !== 'student') {
            return res.status(400).send('No permission')
        }
        //Insert statement that takes the values of the logged in student from the session and current page (lectureId) - Chris
        pool.query(`INSERT INTO listOfStudents (student_id, lecture_id) VALUES (${user.id}, ${lectureId})`).then(result => {
            console.log(result);

            return res.redirect('/lectures')
        }).catch(err => res.send(err))


    }
}