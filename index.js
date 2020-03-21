const express = require('express');
const http = require('http')
const reload = require('reload')
const path = require('path');
const app = new express();
const ejs = require('ejs');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
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


app.use(express.static('public'));
const server = http.createServer(app);
server.listen(4000, () => {
    console.log('App listening on port 4000');
})
reload(app);
