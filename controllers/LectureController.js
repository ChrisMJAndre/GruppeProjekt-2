const classimport = require('../models/lecture');
const classimport1 = require('../models/listOfStudents');
const LectureInformation = classimport.LectureInformation;
const ListOfStudentsInformation = classimport1.ListOfStudentsInformation;

const pool = require('../server/db');
const moment = require('moment');


module.exports = {
    async create(req, res) {
        pool.query(`INSERT INTO lecture (lectureName, date, time, comment, teacher_id, classroom_id, course_id  ) VALUES
($1, $2, $3, $4, $5, $6, $7) RETURNING *`, [req.body.lectureName, req.body.date,
        req.body.time, req.body.comment, req.session.user.id, req.body.classroom, req.body.course]
        ).then(result => {
            console.log(result.rows); 
            res.redirect('/')
        })
    },
    async show(req, res) {

        const lectureId = req.params.id;
        pool.query(`SELECT lecture.id, lecture.lecturename, lecture.date, lecture.time, lecture.comment,  lecture.teacher_id, teacher.id, teacher.firstName, teacher.lastName, classroom.location, course.title FROM lecture 
        INNER JOIN teacher ON lecture.teacher_id=teacher.id
        INNER JOIN classroom ON lecture.classroom_id=classroom.id
        INNER JOIN course ON lecture.course_id=course.id
        WHERE lecture.id=${lectureId}
        `).then( result => {
            const LectureInformationShow = new LectureInformation(result.rows[0].id, result.rows[0].lecturename ,result.rows[0].date ,result.rows[0].time ,result.rows[0].comment ,result.rows[0].teacher_id ,
                result.rows[0].firstname ,result.rows[0].lastname ,result.rows[0].location ,result.rows[0].title );
                LectureInformationShow.id = lectureId
            console.log(LectureInformationShow);
            pool.query(`SELECT listOfStudents.id, listOfStudents.student_id, listOfStudents.lecture_id, student.id, student.firstName, student.lastName, lecture_id FROM listOfStudents
        INNER JOIN student ON listOfStudents.student_id = student.id
        WHERE listOfStudents.lecture_id=${lectureId} 
         `).then( result => {
             // Burde laves om til en ny instace af en klasse, hvis man skal arbejde videre med den i fremtiden, men da den kun skal printe result.rows (objekt) ud så giver det ingen mening.
                // new ListOfStudentsInformation(result.rows.id, result.rows.student_id ,result.rows.lecture_id ,result.rows.firstname, result.rows.lastname);
                const ListOfStudentsInformationShow = result.rows;
                console.log(ListOfStudentsInformationShow);
                //console.log(listOfStudents)
                //listOfStudents.lecture_id = lectureId;
                res.render('lecture', { LectureInformationShow, user: req.session.user, ListOfStudentsInformationShow })
            })
        })
    },
    async index(req, res) {
        pool.query(`SELECT * FROM lecture`).then(result => {
            const lectures = result.rows;
            res.render('lectures', { lectures })
        })
    },
    async destroy(req, res) {
        const lectureId = req.params.id;
        const { user } = req.session;

        if (user.userType !== 'teacher') {
            return res.send('No permission')
        }

        pool.query(`DELETE FROM listOfStudents WHERE listOfStudents.lecture_id=${lectureId}`
        ).then( result => {
            console.log(result);

        pool.query(`DELETE FROM lecture WHERE id=${lectureId} AND teacher_id=${user.id}`
        ).then(result => {
            console.log(result);

            return res.redirect('/lectures')
        })
        })
    },
    async post(req, res) {

        const { user } = req.session;
        const { lectureId } = req.body;


        if (user.userType !== 'student') {
            return res.status(400).send('No permission')
        }

        pool.query(`INSERT INTO listOfStudents (student_id, lecture_id) VALUES (${user.id}, ${lectureId})`).then(result => {
            console.log(result);

            return res.redirect('/lectures')
        }).catch(err => res.send(err))


    }
}