const pool = require('./db');
pool.query(`
    CREATE TABLE Classroom(
        Classroomid int,
        size INT NOT NULL,
        location text NOT NULL,
        PRIMARY KEY(Classroomid));
    
    CREATE TABLE StudyProgramme( 
        StudyProgrammeid int,
        title text NOT NULL,
        PRIMARY KEY(StudyProgrammeid));
    
    CREATE TABLE Course(  
        Courseid int,  
        title text NOT NULL, 
        semester INT NOT NULL, 
        PRIMARY KEY(Courseid),
        FOREIGN KEY (StudyProgrammeid) REFERENCES StudyProgramme(StudyProgrammeid));
    
    CREATE TABLE User(
        Userid int,
        firstName text NOT NULL, 
        lastName text NOT NULL, 
        email text NOT NULL, 
        phoneNumber INT NOT NULL, 
        type text NOT NULL,
        PRIMARY KEY(Userid),
        FOREIGN KEY (StudyProgrammeid) REFERENCES StudyProgramme(StudyProgrammeid));
        
    CREATE TABLE Lecture(  
        Lectureid int,  
        lectureName text NOT NULL, 
        date date NOT NULL,
        time time NOT NULL,
        comment text NOT NULL,
        listOfStudents char[],
        PRIMARY KEY(Lectureid),
        FOREIGN KEY (Courseid) REFERENCES Course(Courseid));
        FOREIGN KEY (Classroomid) REFERENCES Classroom(Classroomid));
        FOREIGN KEY (Userid) REFERENCES User(Userid));
        );
    
        
`).then(result => {
    console.log(error, result);
});
