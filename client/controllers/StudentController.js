//Igen eksempel fra bogen, så vi kan se hvordan det kan gøres
const pool = require('../../server/db');
const Student = require('../models/Student')
const bcryptjs = require('bcryptjs')
const path = require('path')

module.exports = {
    create(req,res){
        pool.query(`INSERT INTO student (firstName, lastName, password, email, phoneNumber, studyprogramme_id  ) VALUES
($1, $2, $3, $4, $5, $6) RETURNING *`, [req.body.firstName, req.body.lastName,
            req.body.password, req.body.email,req.body.phoneNumber, req.body.studyProgramme]
        ).then(result => {
            console.log(result.rows);
            res.redirect('/')
        })
    }
}
