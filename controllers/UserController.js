const classimport = require('../models/User');
const User = classimport.User;
const pool = require('../server/db');

module.exports = {
    async create(req, res) {
        console.log(req.body);
        const dbTable = req.body.isStudent === 'true' ? 'student' : 'teacher';
        pool.query(`INSERT INTO ${dbTable} (firstName, lastName, password, email, phoneNumber, studyprogramme_id  ) VALUES
($1, $2, $3, $4, $5, $6) RETURNING *`, [req.body.firstName, req.body.lastName,
        req.body.password, req.body.email, req.body.phoneNumber, req.body.studyProgramme]
        ).then(result => {
            res.redirect('/')
        })
    },
    async post(req, res) {
        const { email, password, isStudent } = req.body;
        const dbTable = isStudent === 'true' ? 'student' : 'teacher';

        pool.query(`SELECT * FROM ${dbTable} WHERE email LIKE $1`, [email])
            .then(result => {
                const user = new User(result.rows[0].id, result.rows[0].firstname, result.rows[0].lastname, result.rows[0].password, result.rows[0].email, result.rows[0].phonenumber, result.rows[0].studyprogramme_id);
                    console.log(result.rows[0]);
                if (user) {
                    if (user.password == password) {
                        req.session.user = {
                            id: user.id, userType: dbTable,
                        }

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


