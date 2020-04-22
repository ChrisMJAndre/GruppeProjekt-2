//Igen eksempel fra bogen, så vi kan se hvordan det kan gøres
const pool = require('../../server/db');
//bruger vi ikke nu, men det bør til password
const bcrypt = require('bcryptjs')


module.exports = {
    async create(req, res) {
        pool.query(`INSERT INTO student (firstName, lastName, password, email, phoneNumber, studyprogramme_id  ) VALUES
($1, $2, $3, $4, $5, $6) RETURNING *`, [req.body.firstName, req.body.lastName,
        req.body.password, req.body.email, req.body.phoneNumber, req.body.studyProgramme]
        ).then(result => {
            console.log(result.rows);
            res.redirect('/')
        })
    },
    async post(req, res) {
        const { email, password } = req.body;
        pool.query(`SELECT * FROM student WHERE email LIKE $1`, [email])
            .then(result => {
                const student = result.rows[0]
                console.log(result);
                if (student) {
                    if (student.password == password) {
                        req.session.studentId = student._id
                        res.redirect('/')
                    } else {
                        res.redirect('/auth/login')
                    }
                }
                else {
                    res.redirect('/auth/login')
                }
            })
    }
}


