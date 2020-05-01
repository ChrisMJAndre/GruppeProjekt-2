// Here we insert all of the data (the hardcoded data)

const pool = require('../db');
pool.query(`
 
    /* Insert classrooms into the Classroom Table */
    INSERT INTO Classroom (size, location)
        VALUES
                ('50', 'Solbjerg Plads'),
                ('40', 'Flintholm'),
                ('60', 'Dalgas Have'),
                ('90', 'Porcelænshaven'),
                ('50', 'Kilen'); 
    
    /* Insert studyprogrammes into the studyProgramme Table */    
    INSERT INTO studyProgramme (title) 
        VALUES 
                ('Ha(It.)'),
                ('Ha(Jur.)'), 
                ('Ha(Mat.)');
    
    /* Insert courses into the Course Table */
    INSERT INTO Course (title, semester, studyProgramme_id)
        VALUES 
                ('VØS', '1','1'),
                ('Organisation', '1','1'),
                ('Programmering', '1','1'),
                ('VØS2', '2','1'),
                ('IT-Projektledelse', '2','1'),
                ('Aftaleret', '1','2'),
                ('Markedsret', '2','2'),
                ('Forvaltningsret', '2','2'),
                ('Erhvervsøkonomi', '1','3'),    
                ('Numerisk analyse', '1','3'),
                ('Videnskabteori', '2','3'); 

    /* Insert Student into the Student Table, not all Student */
    INSERT INTO Student (firstName, lastName, passWord, email, phoneNumber, StudyProgramme_id)
            VALUES 
                    ('Niklas', 'Lykke-Bondergaard', '1234', 'Nily19ab@student.cbs.dk', '31320232', '1'),
                    ('Josefine', 'Colberg', '2468', 'Joje19ae@student.cbs.dk', '26236206', '1'),
                    ('Kasper', 'ThatGuy', '1357', 'Kath19ay@student.cbs.dk','45455267','2'),
                    ('Jens', 'Jensen', '9876', 'Jeje19ab@student.cbs.dk', '45678901', '2'),
                    ('Hans', 'Hansen', '4534', 'Haha19ae@student.cbs.dk', '12345678', '3'),
                    ('Mathias', 'Mathiasen', '9843', 'Mama19at@student.cbs.dk', '95953535', '3');
            
    /* Insert teacher into the Teacher Table, not all teacher */
    INSERT INTO Teacher (firstName, lastName, passWord, email, phoneNumber, StudyProgramme_id)
            VALUES 
                    ('Christopher M.J.', 'André', '5678', 'Chan19af@student.cbs.dk', '31418551', '1'),
                    ('Alexander', 'Al-Gamour', '1234', 'Alal19ab@student.cbs.dk', '12345678', '1'),
                    ('Helene', 'Hansen', '4567', 'Hehe15ay@student.cbs.dk', '65436543', '2'),
                    ('Anders', 'Andersen', '3456', 'Anan17ab@student.cbs.dk', '34563456', '2'), 
                    ('Simon', 'Jensen', '1278', 'Sije18au@student.cbs.dk', '23235656', '3'),
                    ('Andreas', 'Rasmussen', '8765', 'Anra17ap@student.cbs.dk', '42424501', '3');
                    
   /* Insert Lectures into the Lecture Table */
    INSERT INTO Lecture (lectureName, date, time, comment, teacher_id, classroom_id, course_id)
        VALUES 
                ('Programmerings hjælp', '2020/02/13', '19:00', 'comment?', '1', '1', '1'), 
                ('Organisations hjælp', '2020/02/13', '19:00', 'comment?', '2', '3', '2'), 
                ('VØS hjælp', '2020/02/13', '19:00', 'comment?', '1', '1', '4'), 
                ('How to be a laywer', '2020/02/13', '19:00', 'comment?', '3', '2', '3'), 
                ('Erhvervsmatematik hjælp', '2020/02/13', '19:00', 'comment?', '4', '5', '5');
    


    `).then(result => {
    console.log(error, result);
});
/* HOW TO INSERT MF
INSERT INTO table(column1, column2, …)
VALUES
   (value1, value2, …);
INSERT INTO studyProgramme(id, title)
    VALUES ('1', 'HA(it.)')

    INSERT INTO UserType (id, title)
        VALUES ('1', 'Teacher');

    INSERT INTO StudyProgramme (id, title)
        VALUES ('2', 'HA(jur.)');


    INSERT INTO Users (id, firstName, lastName, email, phoneNumber, UserType_id, StudyProgramme_id)
        VALUES ('302', 'Christopher M.J:','Andre','Christopher@andre.bz', '31418551', '1', '1');

DELETE FROM Users
WHERE id = 302;

DELETE FROM UserType
WHERE id = 1

DELETE FROM studyProgramme
WHERE id = 1;

 */