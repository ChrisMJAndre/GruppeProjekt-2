//Import some of the necessary npm packages we need in order for the program to run - Chris
const express = require('express');
const pool = require('./server/db');
const http = require('http')
const reload = require('reload')
const path = require('path');
const app = new express();
const ejs = require('ejs');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
}))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//Server is initiated
app.use(express.static('public'));
const server = http.createServer(app);
server.listen(4000, () => {
    console.log('App listening on port 4000');
})
reload(app);


//Import of middleware
const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticatedMiddleware');
const authMiddleware = require('./middleware/authMiddleware');

//Import of controllers
const UserController = require('./controllers/UserController')
const loginController = require('./controllers/login')
const LectureController = require('./controllers/LectureController')

//All of the endpoints
app.get('/', (req, res) => {
    res.render('index', {
        isLoggedIn: !!req.session.user,
        userType: req.session.user ? req.session.user.userType : null
    });
})
app.get('/auth/login', loginController.index)
app.get('/auth/logout', loginController.destroy)
app.post('/users/login', UserController.post)

app.post('/auth/register', (req, res) => {
    UserController.create(req, res);
})
app.get('/register', redirectIfAuthenticatedMiddleware, (req, res) => {
    pool.query(`SELECT * FROM studyprogramme`).then(result => {
        const studyProgrammes = result.rows;
        res.render('register', { studyProgrammes });
    }
    )
})
app.get('/lecture/:id', authMiddleware(['teacher', 'student']), LectureController.show);
app.delete('/lecture/:id', authMiddleware(['teacher']), LectureController.destroy);
app.post('/lecture/', authMiddleware(['student']), LectureController.post);
app.get('/lectures', authMiddleware(['teacher', 'student']), LectureController.index);
app.get('/createLecture', authMiddleware(['teacher']), (req, res) => {
    pool.query(`SELECT * FROM classroom`).then(classroomResult => {
        pool.query(`SELECT * FROM course`).then(courseResult => {
            const classrooms = classroomResult.rows;
            const courses = courseResult.rows;
            res.render('createLecture', { classrooms, courses });

        })
    }
    )
})
app.post('/api/lectures', (req, res) => {
    LectureController.create(req, res)
})





//Not found page, where if the user tries to access a page that does not exist
app.use((req, res) =>
    res.render('notfound'));

