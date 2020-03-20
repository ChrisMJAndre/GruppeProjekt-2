const express = require('express');
const path = require('path');
const app = new express();
const ejs = require('ejs');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    index.ejs'))
    res.render('index');
})
app.get('/login', (req, res) => {
    //   about.ejs'))
    res.render('login');
})
app.get('/student', (req, res) => {
    //  contact.ejs'))
    res.render('student');
})
app.get('/admin', (req, res) => {
    // post.ejs'))
    res.render('admin');
})
app.get('/teacher', (req, res) => {
    //   post.ejs'))
    res.render('teacher');
})
app.get('/removeStudent', (req, res) => {
    // post.ejs'))
    res.render('removeStudent');
})
app.get('/removeLecture', (req, res) => {
    //post.ejs'))
    res.render('removeLecture');
})
app.get('/createLecture', (req, res) => {
    //post.ejs'))
    res.render('createLecture');
})
app.use(express.static('public'));
//app.use(express.static(path.join(__dirname + '/public')));
//app.use(express.static(__dirname + '../public'));
app.listen(4000, () => {
    console.log('App listening on port 4000');
})


//Forsøg på Github Desktop