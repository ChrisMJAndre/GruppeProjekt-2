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


        CREATE TABLE Users(
                id INT PRIMARY KEY,
                firstName text NOT NULL, 
                lastName text NOT NULL, 
                email text NOT NULL, 
                phoneNumber INT NOT NULL,
                type text NOT NULL,
                StudyProgramme_id INT REFERENCES StudyProgramme (id));
            
        CREATE TABLE Lecture(
            id INT PRIMARY KEY,
            lectureName text NOT NULL,
            date date NOT NULL,
            time time NOT NULL,
            comment text NOT NULL,
            listOfStudents char[],
            Course_id INT REFERENCES Course (id),
            Classroom_id INT REFERENCES Classroom (id),
            Users_id INT REFERENCES Users (id)
            );
            
        CREATE TABLE SignUp(
            id INT PRIMARY KEY, 
            Users_id INT REFERENCES Users (id),
            date date NOT NULL,
            event INT NOT NULL 

      
        

        
`).then(result => {
    console.log(error, result);
});

/*


 */