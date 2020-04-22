//Igen eksempel fra bogen, så vi kan se hvordan det kan gøres

const Student = require('../models/Student')
const bcryptjs = require('bcryptjs')
const path = require('path')

module.exports = {
    async index(req, res) {
        res.render('login')
    },
    async store(req, res) {
        Student.create(req.body, (error, student) => {
            if (error) {
                // const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
                // req.flash('validationErrors', validationErrors)
                // req.flash('data', req.body)
                req.session.validationErrors = validationErrors
                return res.redirect('/registerStudent')
            }
            res.redirect('/')
        })
    },
    async create(req, res) {
        var email = ""
        var password = ""
        const data = req.flash('data')[0];
        if (typeof data != "undefined") {
            email = data.email
            password = data.password
        }
        res.render('register', {
            errors: req.flash('validationErrors'),
            email: email,
            password: password
        })
    },
    async post(req, res) {
        const { email, password } = req.body;

        User.findOne({ email: email }, (error, user) => {
            if (user) {
                bcryptjs.compare(password, user.password, (error, same) => {
                    if (same) {
                        req.session.userId = user._id
                        res.redirect('/')
                    }
                    else {
                        res.redirect('/login')
                    }
                })
            }
            else {
                res.redirect('/login')
            }
        })
    },
    async destroy(req, res) {
        req.session.destroy(() => {
            res.redirect('/')
        })
    }
}