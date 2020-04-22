const pool = require('../../server/db');
const bcrypt = require('bcryptjs')


module.exports = {
    async create(req, res) {
        pool.query(`INSERT INTO lecture (lectureName, date, time, comment, teacher_id, classroom_id, course_id  ) VALUES
($1, $2, $3, $4, $5, $6, $7) RETURNING *`, [req.body.lectureName, req.body.date,
        req.body.time, req.body.comment, req.body.teacher, req.body.classroom, req.body.course]
        ).then(result => {
            console.log(result.rows);
            res.redirect('/')
        })
    },
    async post(req, res) {
        pool.query(`SELECT * FROM lecture`).then(res => {
            const data = res.rows;

            console.log('all data');
            data.forEach(row => {
                console.log(`Id: ${row.id} Lecture name: ${row.lectureName} Date: ${row.date} Time: ${row.time} Comment: ${row.comment} Teacher id: ${row.teacher_id} Classroom id: ${row.classroom_id} Course id: ${row.course_id} `);
            })
        })
    }
}