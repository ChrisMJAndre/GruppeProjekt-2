const pool = require('./db');
pool.query(`
    CREATE TABLE Classroom(
        id int NOT NULL,
        size INT NOT NULL,
        location text NOT NULL,
        CONSTRAINT PK_Classroom PRIMARY KEY(id, size, location));
    
    CREATE TABLE StudyProgramme( 
        id int NOT NULL,
        title text NOT NULL,
        CONSTRAINT PK_StudyProgramme PRIMARY KEY(id, title));
    
    CREATE TABLE Course(  
        id int NOT NULL,  
        title text NOT NULL, 
        semester INT NOT NULL, 
        CONSTRAINT PK_Course PRIMARY KEY(id, title, semester, FK_StudyProgramme),
        CONSTRAINT FK_StudyProgramme FOREIGN KEY (id) REFERENCES StudyProgramme(id));
    
    CREATE TABLE User(
        id int NOT NULL,
        firstName text NOT NULL, 
        lastName text NOT NULL, 
        email text NOT NULL, 
        phoneNumber INT NOT NULL, 
        type text NOT NULL,
        CONSTRAINT PK_User PRIMARY KEY(id, firstName, lastName, email, phoneNumber, type, FK_StudyProgramme),
        CONSTRAINT FK_StudyProgramme FOREIGN KEY (id) REFERENCES StudyProgramme(id));
        
    CREATE TABLE Lecture(  
        id int NOT NULL,  
        lectureName text NOT NULL, 
        date date NOT NULL,
        time time NOT NULL,
        comment text NOT NULL,
        listOfStudents char[],
        CONSTRAINT PK_Lecture PRIMARY KEY(id, lectureName, date, time, comment, listOfStudents, FK_Course, FK_Classroom, FK_User),
        CONSTRAINT FK_Course FOREIGN KEY (id) REFERENCES Course(id),
        CONSTRAINT FK_Classroom FOREIGN KEY (id) REFERENCES Classroom(id),
        CONSTRAINT FK_User FOREIGN KEY (id) REFERENCES User(id)
        );
    
        
`).then(result => {
    console.log(error, result);
});
