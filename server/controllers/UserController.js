//Import model (class) User
const classimport = require('../models/User');
const User = classimport.User;
//pool required in order to send queries to the database - Chris
const pool = require('../../database/db');

module.exports = {
    //Create method for creating a new student or Teacher - Chris
    async create(req, res) {
        console.log(req.body);
        //dbTable is here an object that changes depending if the radiobutton is checked as a student or teacher - Chris
        //If selected as Teacher, the data is inserted into the Teacher Table, and same goes for Student - Chris
        const dbTable = req.body.isStudent === 'true' ? 'student' : 'teacher';
        pool.query(`INSERT INTO ${dbTable} (firstName, lastName, password, email, phoneNumber, studyprogramme_id  ) VALUES
($1, $2, $3, $4, $5, $6) RETURNING *`, [req.body.firstName, req.body.lastName,
        req.body.password, req.body.email, req.body.phoneNumber, req.body.studyProgramme]
        ).then(result => {
            res.redirect('/')
        })
    },
    async post(req, res) {
        //Post Method for logging in  - Chris
        const { email, password, isStudent } = req.body;
        const dbTable = isStudent === 'true' ? 'student' : 'teacher';
        //Depending on what is checked in the radiobutton "dbtable" changes value  - Chris
        pool.query(`SELECT * FROM ${dbTable} WHERE email LIKE $1`, [email])
            .then(result => {
                const { id, firstname, lastname, password, email, phonenumber, studyprogramme_id } = result.rows[0];
                const user = new User(id, firstname, lastname, password, email, phonenumber, studyprogramme_id);

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


