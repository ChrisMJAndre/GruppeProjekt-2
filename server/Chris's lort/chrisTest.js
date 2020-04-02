
const pool = require('../db');
pool.query(`

     /* Insert usertypes into the UserType Table */
    INSERT INTO UserType (id, title)
        VALUES
                ('1', 'Teacher'),
                ('2', 'Student'),
                ('3', 'Admin');
     
        
    /* Insert studyprogrammes into the studyProgramme Table */    
    INSERT INTO studyProgramme (id, title) 
        VALUES 
                ('1', 'Ha(It.)'),
                ('2', 'Ha(Jur.)'), 
                ('3', 'Ha(Mat.)');


    /* Insert classrooms into the Classroom Table */
    INSERT INTO Classroom (id, size, location) 
        VALUES 
                ('200', '50', 'Solbjerg Plads'),
                ('201', '40', 'Flintholm'), 
                ('202', '60', 'Dalgas Have'),
                ('203', '90', 'Porcelænshaven'),
                ('204', '50', 'Kilen');   
        
    
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


        `).then(result => {
    console.log(error, result);
});