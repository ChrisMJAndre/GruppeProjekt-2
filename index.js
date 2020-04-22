const express = require('express');
const http = require('http')
const reload = require('reload')
const path = require('path');
const app = new express();
const ejs = require('ejs');
const cookieSession = require('cookie-session');
const bcryptjs = require('bcryptjs');
// const bcrypt = require('bcrypt');
// const dbConnection = require('./server/db');
// const { body, validationResult } = require('express-validator');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
//Import models 
const { Student, Teacher } = require('./sequelize')
const flash = require('connect-flash');


app.use(bodyParser.json())

app.set('views', __dirname + '/client/views');
app.set('view engine', 'ejs');

//Her startes serveren(indtil videre)
app.use(express.static('public'));
const server = http.createServer(app);
server.listen(4000, () => {
    console.log('App listening on port 4000');
})
reload(app);


//Her kan vi importere middleware
// const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticatedMiddleware');
// const authMiddleware = require('./middleware/authMiddleware');

//Her importeres controllers
const StudentController = require('./client/controllers/StudentController')

//Styrer hvad man kan se alt efter om man er logget ind eller ej.
// global.loggedIn = null;
// app.use("*", (req, res, next) => {
//     loggedIn = req.session.userId;
//     next()
// });


app.get('/', (req, res) => {
    res.render('index');
})
app.get('/login', (req, res) => {
    res.render('login');
})
app.get('/registerStudent', (req, res) => {
    res.render('registerStudent');
})
app.get('/student', (req, res) => {
    res.render('student');
})
app.get('/admin', (req, res) => {
    res.render('admin');
})
app.get('/teacher', (req, res) => {
    res.render('teacher');
})
app.get('/removeStudent', (req, res) => {
    res.render('removeStudent');
})
app.get('/removeLecture', (req, res) => {
    res.render('removeLecture');
})
app.get('/createLecture', (req, res) => {
    res.render('createLecture');
})

app.get('/deleteStudent', (req, res) => {
    res.render('deleteStudent');
})
app.get('/deleteTeacher', (req, res) => {
    res.render('deleteTeacher');
})
app.get('/deleteLecture', (req, res) => {
    res.render('deleteLecture');
})
app.get('/showStudentInformation', (req, res) => {
    res.render('showStudentInformation');
})
app.get('/showTeacherInformation', (req, res) => {
    res.render('showTeacherInformation');
})

//Ikke sikker på om det her fungerer, eller hvordan vi skal gøre det med sql, men idk
// app.get('/register', redirectIfAuthenticatedMiddleware, UserController.create)
// app.post('/users/register', redirectIfAuthenticatedMiddleware, UserController.store)
// app.get('/login', redirectIfAuthenticatedMiddleware, UserController.index)
// app.post('/users/login', redirectIfAuthenticatedMiddleware, UserController.post)

// app.get('/logout', UserController.destroy)


app.post('/api/teachers', (req, res) => {
    Teacher.create(req.body)
        .then(teacher => res.json(teacher))
})
app.get('/api/teachers', (req, res) => {
    Teacher.findAll().then(teacher => res.json(teacher))
})

app.post('/api/students', (req, res) => {
    Student.create(req.body)
        .then(student => res.json(student))
})
app.get('/api/students', (req, res) => {
    Student.findAll().then(students => res.json(students))
})


//Hvis man forsøger at acces en side der ikke findes
app.use((req, res) =>
    res.render('notfound'));


