// A document where we set the general tables up
const pool = require('./db');
pool.query(`

    CREATE TABLE Classroom(
        id INT PRIMARY KEY,
        size INT NOT NULL,
        location text NOT NULL);
    
    
    CREATE TABLE StudyProgramme(
        id INT PRIMARY KEY,
        title text NOT NULL);
    
    
    CREATE TABLE Course(
        id INT PRIMARY KEY,
        title text NOT NULL,
        semester INT NOT NULL,
        StudyProgramme_id INT REFERENCES StudyProgramme (id));
    
    
    CREATE TABLE UserType(
        id INT PRIMARY KEY,
        title text NOT NULL);
    
    
    CREATE TABLE Users(
        id INT PRIMARY KEY,
        firstName text NOT NULL,
        lastName text NOT NULL,
        email text NOT NULL,
        phoneNumber INT NOT NULL,
        UserType_id INT REFERENCES UserType (id),
        StudyProgramme_id INT REFERENCES StudyProgramme (id));
    
    
    CREATE TABLE SignUp(
        id INT PRIMARY KEY,
        Users_id INT REFERENCES Users (id));
     
     
    CREATE TABLE Lecture(
        id INT PRIMARY KEY,
        lectureName text NOT NULL,
        date date NOT NULL,
        time time NOT NULL,
        comment text NOT NULL,
        Course_id INT REFERENCES Course (id),
        Classroom_id INT REFERENCES Classroom (id),
        Users_id INT REFERENCES Users (id),
        SignUp_id INT REFERENCES SignUp (id));
        
        
    ALTER TABLE SignUp
        ADD Lecture_id INT REFERENCES Lecture (id);


`).then(result => {
    console.log(error, result);
});

