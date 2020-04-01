const pool = require('./db');
pool.query(`
    CREATE TABLE Classroom(
        id int,
        size INT NOT NULL,
        location text NOT NULL,
        PRIMARY KEY(id));
    
    CREATE TABLE StudyProgramme( 
        id int,
        title text NOT NULL,
        PRIMARY KEY(id));
    
    CREATE TABLE Course(  
        id int,  
        title text NOT NULL, 
        semester INT NOT NULL, 
        PRIMARY KEY(id),
        FOREIGN KEY (id) REFERENCES StudyProgramme(id));
    
    CREATE TABLE User(
        id int,
        firstName text NOT NULL, 
        lastName text NOT NULL, 
        email text NOT NULL, 
        phoneNumber INT NOT NULL, 
        type text NOT NULL,
        PRIMARY KEY(id),
        FOREIGN KEY (id) REFERENCES StudyProgramme(id));
        
    CREATE TABLE Lecture(  
        id int,  
        lectureName text NOT NULL, 
        date date NOT NULL,
        time time NOT NULL,
        comment text NOT NULL,
        listOfStudents char[],
        PRIMARY KEY(id),
        FOREIGN KEY (id) REFERENCES Course(id));
        FOREIGN KEY (id) REFERENCES Classroom(id));
        FOREIGN KEY (id) REFERENCES User(id));
        );
    
        
`).then(result => {
    console.log(error, result);
});
