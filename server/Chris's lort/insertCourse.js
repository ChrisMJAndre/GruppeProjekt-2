const pool = require('../db');
pool.query(`

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
    
    
    
    
    
    
    
        `).then(result => {
    console.log(error, result);
});