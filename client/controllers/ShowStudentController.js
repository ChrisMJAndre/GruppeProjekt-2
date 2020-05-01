const pool = require('../../server/db');


module.exports =  (req, res) => {


    const lectureId = req.params.id;
    pool.query(`SELECT listOfStudents.id, listOfStudents.student_id, listOfStudents.lecture_id, student.id, student.firstName, student.lastName, lecture_id FROM listOfStudents
        INNER JOIN student ON listOfStudents.student_id = student.id
        WHERE listOfStudents.lecture_id=${lectureId} AND listOfStudents.id=${listOfStudentsId}
         `).then( result => {

        const listOfStudents = result.rows[0];
        const listOfStudentsId = listOfStudents.id;
        listOfStudents.lecture_id = lectureId;
        res.render('joinedStudents', {listOfStudents} )
    })
    }
