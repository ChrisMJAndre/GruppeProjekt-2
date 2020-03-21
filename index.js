const express = require('express');
const http = require('http')
const reload = require('reload')
const path = require('path');
const app = new express();
const ejs = require('ejs');
app.set('views', __dirname + '/client/views');
app.set('view engine', 'ejs');

//Ved ikke om vi skal bruge de her libraries
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('connect-flash');
const bodyParser = require('body-parser')

//Sådan man connectede til mongo, men tror også vi skal bruge bodyparser?
// mongoose.connect('mongodb+srv://Niklas107:zakko7573@cluster0-pb3ya.mongodb.net/Sunday', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.log(err));;
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))

//For at bruge session (kunne vise noget alt efter om man er logget ind eller ej)
app.use(session({ secret: 'keyboard cat' }))
app.use(flash());

//Her startes serveren (indtil videre)
app.use(express.static('public'));
const server = http.createServer(app);
server.listen(4000, () => {
    console.log('App listening on port 4000');
})
reload(app);

//Her kan vi importere middleware
const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticatedMiddleware');

//Her importeres controllers
const UserController = require('./client/controllers/UserController')

//Styrer hvad man kan se alt efter om man er logget ind eller ej.
global.loggedIn = null;
app.use("*", (req, res, next) => {
    loggedIn = req.session.userId;
    next()
});

app.get('/', (req, res) => {
    res.render('index');
})
app.get('/login', (req, res) => {
    res.render('login');
})
app.get('/register', (req, res) => {
    res.render('register');
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
app.get('/register', redirectIfAuthenticatedMiddleware, UserController.create)
app.post('/users/register', redirectIfAuthenticatedMiddleware, UserController.store)
app.get('/login', redirectIfAuthenticatedMiddleware, UserController.index)
app.post('/users/login', redirectIfAuthenticatedMiddleware, UserController.post)

app.get('/logout', UserController.destroy)

//Hvis man forsøger at acces en side der ikke findes
app.use((req, res) =>
    res.render('notfound'));
