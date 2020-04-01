const pool = require('./db');
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
    
    CREATE TABLE User(
        id SERIAL PRIMARY KEY,
        firstName text NOT NULL, 
        lastName text NOT NULL, 
        email text NOT NULL, 
        phoneNumber INT NOT NULL, 
        type text NOT NULL,
        StudyProgramme_id SERIAL REFERENCES StudyProgramme (id));
        
    CREATE TABLE Lecture(  
        id SERIAL PRIMARY KEY,  
        lectureName text NOT NULL, 
        date date NOT NULL,
        time time NOT NULL,
        comment text NOT NULL,
        listOfStudents char[],
        Course_id SERIAL REFERENCES Course (id),
        Classroom_id SERIAL REFERENCES Classroom (id),
        User_id SERIAL REFERENCES User (id)
        );
    
        
`).then(result => {
    console.log(error, result);
});
