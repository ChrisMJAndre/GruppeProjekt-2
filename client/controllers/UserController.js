//Igen eksempel fra bogen, så vi kan se hvordan det kan gøres

const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const path = require('path')

module.exports = {
    async index(req, res) {
        res.render('login')
    },
    async store(req, res) {
        User.create(req.body, (error, user) => {
            if (error) {
                const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
                req.flash('validationErrors', validationErrors)
                req.flash('data', req.body)
                // req.session.validationErrors = validationErrors
                return res.redirect('/register')
            }
            res.redirect('/')
        })
    },
    async create(req, res) {
        var username = ""
        var password = ""
        const data = req.flash('data')[0];
        if (typeof data != "undefined") {
            username = data.username
            password = data.password
        }
        res.render('register', {
            errors: req.flash('validationErrors'),
            username: username,
            password: password
        })
    },
    async post(req, res) {
        const { username, password } = req.body;

        User.findOne({ username: username }, (error, user) => {
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