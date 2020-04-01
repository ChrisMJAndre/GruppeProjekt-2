const pool = require('./db');
pool.query(`
    CREATE TABLE Classroom(
        id SERIAL NOT NULL,
        size INT NOT NULL,
        location text NOT NULL,
        PRIMARY KEY(id));
    
    CREATE TABLE StudyProgramme( 
        id SERIAL NOT NULL,
        title text NOT NULL,
        PRIMARY KEY(id));
    
    CREATE TABLE Course(  
        id SERIAL NOT NULL,  
        title text NOT NULL, 
        semester INT NOT NULL, 
        PRIMARY KEY(id),
        CONSTRAINT FOREIGN KEY (id) REFERENCES StudyProgramme(id));
    
    CREATE TABLE User(
        id SERIAL NOT NULL,
        firstName text NOT NULL, 
        lastName text NOT NULL, 
        email text NOT NULL, 
        phoneNumber INT NOT NULL, 
        type text NOT NULL,
        PRIMARY KEY(id),
        CONSTRAINT FOREIGN KEY (id) REFERENCES StudyProgramme(id));
        
    CREATE TABLE Lecture(  
        id SERIAL NOT NULL,  
        lectureName text NOT NULL, 
        date date NOT NULL,
        time time NOT NULL,
        comment text NOT NULL,
        listOfStudents char[],
        PRIMARY KEY(id),
        CONSTRAINT FOREIGN KEY (id) REFERENCES Course(id),
        CONSTRAINT FOREIGN KEY (id) REFERENCES Classroom(id),
        CONSTRAINT FOREIGN KEY (id) REFERENCES User(id)
        );
    
        
`).then(result => {
    console.log(error, result);
});
