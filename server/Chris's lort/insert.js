// Here we insert all of the data (the hardcoded data)

const pool = require('../db');
pool.query(`
 
        
        
    /* Insert studyprogrammes into the studyProgramme Table */    
    INSERT INTO studyProgramme (id, title) 
        VALUES 
                ('1', 'Ha(It.)'),
                ('2', 'Ha(Jur.)'), 
                ('3', 'Ha(Mat.)');


  
        
    
    /* Insert courses into the Course Table */
    INSERT INTO Course (id, title, semester, studyProgramme_id)
        VALUES 
                ('100', 'VØS', '1','1'),
                ('101', 'Organisation', '1','1'),
                ('102', 'Programmering', '1','1'),
                ('103', 'VØS2', '2','1'),
                ('104', 'IT-Projektledelse', '2','1'),
                ('105', 'Aftaleret', '1','2'),
                ('106', 'Markedsret', '2','2'),
                ('107', 'Forvaltningsret', '2','2'),
                ('108', 'Erhvervsøkonomi', '1','3'),    
                ('109', 'Numerisk analyse', '1','3'),
                ('110', 'Videnskabteori', '2','3');        
        
    /* Insert Lectures into the Lecture Table */
    INSERT INTO Lecture (id, lectureName, date, time, comment, Course_id, Classroom_id, Users_id, SignUp_id)
        VALUES 
                ('600', 'Programmerings hjælp', '2020/02/13', '19:00', 'comment?', '102', '200', '300', '1'), 
                ('601', 'Organisations hjælp', '2020/02/13', '19:00', 'comment?', '103', '202', '301', '2'), 
                ('602', 'VØS hjælp', '2020/02/13', '19:00', 'comment?', '100', '200', '303', '0'), 
                ('603', 'How to be a laywer', '2020/02/13', '19:00', 'comment?', '105', '201', '302', '3'), 
                ('604', 'Erhvervsmatematik hjælp', '2020/02/13', '19:00', 'comment?', '108', '204', '304', '4');                                                                
    
    
    
    
        
    /* Insert signup into the SignUp Table, no hardcoded data, here the table should gather the data on its own */
    /* TABLE Signup */
    
    
    
    
    
    
    
        
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