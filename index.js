const express = require('express');
const http = require('http')
const reload = require('reload')
const path = require('path');
const app = new express();
const ejs = require('ejs');
const cookieSession = require('cookie-session');
const bcryptjs = require('bcryptjs');
const bcrypt = require('bcrypt');
const dbConnection = require('./server/db');
const { body, validationResult } = require('express-validator');



app.set('views', __dirname + '/client/views');
app.set('view engine', 'ejs');

//Her startes serveren (indtil videre)
// app.use(express.static('public'));
// const server = http.createServer(app);
// server.listen(4000, () => {
//     console.log('App listening on port 4000');
// })


app.use(express.urlencoded({ extended: false }));
reload(app);
// APPLY COOKIE SESSION MIDDLEWARE
app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
    maxAge: 3600 * 1000 // 1hr
}));

// DECLARING CUSTOM MIDDLEWARE
const ifNotLoggedin = (req, res, next) => {
    if (!req.session.isLoggedIn) {
        return res.render('login-register');
    }
    next();
}

const ifLoggedin = (req, res, next) => {
    if (req.session.isLoggedIn) {
        return res.redirect('/home');
    }
    next();
}
// END OF CUSTOM MIDDLEWARE

// ROOT PAGE
app.get('/', ifNotLoggedin, (req, res, next) => {
    dbConnection.execute("SELECT `name` FROM `Users` WHERE `id`=?", [req.session.userID])
        .then(([rows]) => {
            res.render('home', {
                name: rows[0].name
            });
        });

});// END OF ROOT PAGE


// REGISTER PAGE
app.post('/register', ifLoggedin,
    // post data validation(using express-validator)
    [
        body('user_email', 'Invalid email address!').isEmail().custom((value) => {
            return dbConnection.execute('SELECT `email` FROM `Users` WHERE `email`=?', [value])
                .then(([rows]) => {
                    if (rows.length > 0) {
                        return Promise.reject('This E-mail already in use!');
                    }
                    return true;
                });
        }),
        body('user_name', 'Username is Empty!').trim().not().isEmpty(),
        body('user_pass', 'The password must be of minimum length 6 characters').trim().isLength({ min: 6 }),
    ],// end of post data validation
    (req, res, next) => {

        const validation_result = validationResult(req);
        const { user_name, user_pass, user_email } = req.body;
        // IF validation_result HAS NO ERROR
        if (validation_result.isEmpty()) {
            // password encryption (using bcrypt)
            bcrypt.hash(user_pass, 12).then((hash_pass) => {
                // INSERTING USER INTO DATABASE
                dbConnection.execute("INSERT INTO `Users`(`name`,`email`,`password`) VALUES(?,?,?)", [user_name, user_email, hash_pass])
                    .then(result => {
                        res.send(`your account has been created successfully, Now you can <a href="/">Login</a>`);
                    }).catch(err => {
                        // THROW INSERTING USER ERROR'S
                        if (err) throw err;
                    });
            })
                .catch(err => {
                    // THROW HASING ERROR'S
                    if (err) throw err;
                })
        }
        else {
            // COLLECT ALL THE VALIDATION ERRORS
            let allErrors = validation_result.errors.map((error) => {
                return error.msg;
            });
            // REDERING login-register PAGE WITH VALIDATION ERRORS
            res.render('login-register', {
                register_error: allErrors,
                old_data: req.body
            });
        }
    });// END OF REGISTER PAGE

// LOGIN PAGE
app.post('/', ifLoggedin, [
    body('user_email').custom((value) => {
        return dbConnection.execute('SELECT `email` FROM `Users` WHERE `email`=?', [value])
            .then(([rows]) => {
                if (rows.length == 1) {
                    return true;

                }
                return Promise.reject('Invalid Email Address!');

            });
    }),
    body('user_pass', 'Password is empty!').trim().not().isEmpty(),
], (req, res) => {
    const validation_result = validationResult(req);
    const { user_pass, user_email } = req.body;
    if (validation_result.isEmpty()) {

        dbConnection.execute("SELECT * FROM `Users` WHERE `email`=?", [user_email])
            .then(([rows]) => {
                bcrypt.compare(user_pass, rows[0].password).then(compare_result => {
                    if (compare_result === true) {
                        req.session.isLoggedIn = true;
                        req.session.userID = rows[0].id;

                        res.redirect('/');
                    }
                    else {
                        res.render('login-register', {
                            login_errors: ['Invalid Password!']
                        });
                    }
                })
                    .catch(err => {
                        if (err) throw err;
                    });


            }).catch(err => {
                if (err) throw err;
            });
    }
    else {
        let allErrors = validation_result.errors.map((error) => {
            return error.msg;
        });
        // REDERING login-register PAGE WITH LOGIN VALIDATION ERRORS
        res.render('login-register', {
            login_errors: allErrors
        });
    }
});
// END OF LOGIN PAGE

// LOGOUT
app.get('/logout', (req, res) => {
    //session destroy
    req.session = null;
    res.redirect('/');
});
// END OF LOGOUT

app.use('/', (req, res) => {
    res.status(404).send('<h1>404 Page Not Found!</h1>');
});

app.listen(3000, () => console.log("Server is Running..."));


//Her kan vi importere middleware
const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticatedMiddleware');

//Her importeres controllers
const UserController = require('./client/controllers/UserController')

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
// app.get('/register', redirectIfAuthenticatedMiddleware, UserController.create)
// app.post('/users/register', redirectIfAuthenticatedMiddleware, UserController.store)
// app.get('/login', redirectIfAuthenticatedMiddleware, UserController.index)
// app.post('/users/login', redirectIfAuthenticatedMiddleware, UserController.post)

// app.get('/logout', UserController.destroy)

//Hvis man forsøger at acces en side der ikke findes
app.use((req, res) =>
    res.render('notfound'));


