const pool = require('../db');
pool.query(`
    /* noget i stil med dette skal vi køre når en student trykker på tilmelde */
IF EXIST ListOfStudents
INSERT den studerende fra student ved hjælp af student id
CREATE TABLE ListOfStudents( 
    id SERIAL,
    student_id INT NOT NULL,
    lecture_id INT NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_student_id FOREIGN KEY (student_id) REFERENCES Student(id)
    CONSTRAINT fk_lecture_id FOREIGN KEY (lecture_id) REFERENCES Lecture(id));

Alter Table lecture add comlumm listOfStudents id VALUE alt det der med contraint foreingn key osv

add to columm listofstudent SELECET from listOfStudents WHERE lecture_id = something
        `).then(result => {
    console.log(error, result);
});