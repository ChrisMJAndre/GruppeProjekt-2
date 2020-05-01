const pool = require('../db');
pool.query(`

    
    /* Insert Lectures into the Lecture Table */
    INSERT INTO Lecture (lectureName, date, time, comment, teacher_id, classroom_id, course_id)
        VALUES 
                ('Programmerings hjælp', '2020/02/13', '19:00', 'comment?', '1', '1', '1'), 
                ('Organisations hjælp', '2020/02/13', '19:00', 'comment?', '1', '3', '2'), 
                ('VØS hjælp', '2020/02/13', '19:00', 'comment?', '1', '1', '4'), 
                ('How to be a laywer', '2020/02/13', '19:00', 'comment?', '1', '2', '3'), 
                ('Erhvervsmatematik hjælp', '2020/02/13', '19:00', 'comment?', '1', '5', '5');
    
    
    
    
    
    
        `).then(result => {
    console.log(error, result);
});