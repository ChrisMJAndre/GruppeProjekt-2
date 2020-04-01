/*CREATE TABLE Classroom(
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
    StudyProgramme_id INT REFERENCES StudyProgramme (id));

*/
/* this shit does not work
    CREATE TABLE Lecture(
        id SERIAL PRIMARY KEY,
        lectureName text NOT NULL,
        date date NOT NULL,
        time time NOT NULL,
        comment text NOT NULL,
        listOfStudents char[],
        Course_id INT REFERENCES Course (id),
        Classroom_id INT REFERENCES Classroom (id),
        User_id INT REFERENCES User (id)
        );

 */