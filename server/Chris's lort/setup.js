// A document where we set the general tables up
const pool = require('../db');
pool.query(`

    CREATE TABLE Classroom(
        id SERIAL PRIMARY KEY,
        size INT NOT NULL,
        location text NOT NULL);
    
    
    CREATE TABLE StudyProgramme(
        id SERIAL PRIMARY KEY,
        title text NOT NULL);
    
    
    CREATE TABLE Course(
        id SERIAL PRIMARY KEY,
        title text NOT NULL,
        semester INT NOT NULL,
        StudyProgramme_id SERIAL REFERENCES StudyProgramme (id));
    
    
    CREATE TABLE UserType(
        id SERIAL PRIMARY KEY,
        title text NOT NULL);
    
    
    CREATE TABLE Users(
        id SERIAL PRIMARY KEY AUTO INCREMENT,
        firstName text NOT NULL,
        lastName text NOT NULL,
        passWord text NOT NULL,
        email text NOT NULL,
        phoneNumber INT NOT NULL,
        UserType_id SERIAL REFERENCES UserType (id),
        StudyProgramme_id SERIAL REFERENCES StudyProgramme (id));
    
    
    CREATE TABLE SignUp(
        id SERIAL PRIMARY KEY,
        Users_id SERIAL REFERENCES Users (id));
     
     
    CREATE TABLE Lecture(
        id SERIAL PRIMARY KEY AUTO INCREMENT,
        lectureName text NOT NULL,
        date date NOT NULL,
        time time NOT NULL,
        comment text NOT NULL,
        Course_id SERIAL REFERENCES Course (id),
        Classroom_id SERIAL REFERENCES Classroom (id),
        Users_id SERIAL REFERENCES Users (id),
        SignUp_id SERIAL REFERENCES SignUp (id));
        
        
    ALTER TABLE SignUp
        ADD Lecture_id SERIAL REFERENCES Lecture (id);


`).then(result => {
    console.log(error, result);
});

/*

 */