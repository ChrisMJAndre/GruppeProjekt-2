const express = require('express');
const pool = require('./server/db');
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
const bodyParser = require('body-parser');

const flash = require('connect-flash');

app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
}))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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
const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticatedMiddleware');
const authMiddleware = require('./middleware/authMiddleware');

//Her importeres controllers
const UserController = require('./client/controllers/UserController')
const TeacherController = require('./client/controllers/TeacherController')
const loginController = require('./client/controllers/login')
const LectureController = require('./client/controllers/LectureController')


//Styrer hvad man kan se alt efter om man er logget ind eller ej.
// global.loggedIn = null;
// app.use("*", (req, res, next) => {
//     console.log(req.session.user);
//     loggedIn = req.session.userId;
//     next()
// });




app.get('/', (req, res) => {
    res.render('index', {
        isLoggedIn: !!req.session.user,
        userType: req.session.user ? req.session.user.userType : null
    });
})
app.get('/login', (req, res) => {
    res.render('login');
})
app.get('/register', redirectIfAuthenticatedMiddleware, (req, res) => {
    pool.query(`SELECT * FROM studyProgramme`).then(result => {
        const studyProgrammes = result.rows;
        res.render('register', { studyProgrammes });
    }
    )
})
app.get('/student', (req, res) => {
    res.render('student');
})
app.get('/admin', (req, res) => {
    res.render('admin');
})
app.get('/teacher', authMiddleware('teacher'), (req, res) => {
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



app.post('/api/lectures', (req, res) => {
    LectureController.create(req, res)
})

app.post('/auth/register', (req, res) => {
    if (req.body.isStudent == 'true') {
        UserController.create(req, res);
    } else {
        TeacherController.create(req, res);
    }
});
app.get('/auth/login', loginController)

//ikke sikker på at vi kan gøre sådan her eller om der skal laves 2 loginsider, users/login ændres til teachers/login og students/login
app.post('/users/login', UserController.post)
// app.post('/teachers/login', TeacherController.post)
//Det ville jo være fedest med 1 login side, men ellers duplicerer vi bare login ligesom vi gjorde med register

//Skal gerne vise alle forelæsninger fra lecture table
app.post('/lectures', LectureController.post)

//Hvis man forsøger at acces en side der ikke findes
app.use((req, res) =>
    res.render('notfound'));

