const pool = require('../../server/db');

module.exports = {
    create(req, res) {
        pool.query(`INSERT INTO teacher (firstName, lastName, password, email, phoneNumber, studyprogramme_id  ) VALUES
($1, $2, $3, $4, $5, $6) RETURNING *`, [req.body.firstName, req.body.lastName,
        req.body.password, req.body.email, req.body.phoneNumber, req.body.studyProgramme]
        ).then(result => {
            res.redirect('/')
        })
    },
    async post(req, res) {
        const { email, password } = req.body;
        pool.query(`SELECT * FROM teacher WHERE email LIKE $1`, [email])
            .then(result => {
                const teacher = result.rows[0]
                console.log(req.session);
                if (teacher) {
                    if (teacher.password == password) {
                        req.session.studentId = teacher._id
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
