// A document where we set the general tables up
const pool = require('../db');
pool.query(`

    CREATE TABLE Classroom(
        id SERIAL,
        size INT NOT NULL,
        location text NOT NULL,
        PRIMARY KEY (id));
    
    
    CREATE TABLE StudyProgramme(
        id SERIAL,
        title text NOT NULL,
        PRIMARY KEY (id));
    
    
    CREATE TABLE Course(
        id SERIAL,
        title text NOT NULL,
        semester INT NOT NULL,
        studyprogramme_id INT NOT NULL,
        PRIMARY KEY (id),
        CONSTRAINT fk_studyprogramme_id FOREIGN KEY (studyprogramme_id) REFERENCES Studyprogramme(id));
    
    
    
    CREATE TABLE Student(
        id SERIAL,
        firstName text NOT NULL,
        lastName text NOT NULL,
        passWord text NOT NULL,
        email text NOT NULL,
        phoneNumber INT NOT NULL,
        studyprogramme_id INT NOT NULL,
        PRIMARY KEY (id), 
        CONSTRAINT fk_studyprogramme_id FOREIGN KEY (studyprogramme_id) REFERENCES Studyprogramme(id));
    
    
    
    CREATE TABLE Teacher(
        id SERIAL,
        firstName text NOT NULL,
        lastName text NOT NULL,
        passWord text NOT NULL,
        email text NOT NULL,
        phoneNumber INT NOT NULL,
        studyprogramme_id INT NOT NULL,
        PRIMARY KEY (id),
        CONSTRAINT fk_studyprogramme_id FOREIGN KEY (studyprogramme_id) REFERENCES Studyprogramme(id));
    
    
        
        CREATE TABLE Lecture(
            id SERIAL,
            lectureName text NOT NULL,
            date date NOT NULL,
            time time NOT NULL,
            comment text NOT NULL, 
            teacher_id INT NOT NULL, 
            classroom_id INT NOT NULL, 
            course_id INT NOT NULL,
            PRIMARY KEY (id),
            CONSTRAINT fk_teacher_id FOREIGN KEY (teacher_id) REFERENCES Teacher(id),
            CONSTRAINT fk_classroom_id FOREIGN KEY (classroom_id) REFERENCES Classroom(id),
            CONSTRAINT fk_course_id FOREIGN KEY (course_id) REFERENCES Course(id));

        CREATE TABLE listOfStudents( 
            id SERIAL,
            student_id INT,
            lecture_id INT, 
            PRIMARY KEY (id),
            CONSTRAINT fk_student_id FOREIGN KEY (student_id) REFERENCES Student(id), 
            CONSTRAINT fk_lecture_id FOREIGN KEY (lecture_id) REFERENCES Lecture(id));


   
       
        


`).then(result => {
    console.log(error, result);
});

/*
select * from listofstudents ls inner join lecture l where l.id==ls.lecture_id

 */