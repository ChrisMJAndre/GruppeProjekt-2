const pool = require('../db');
pool.query(`

    
    /* Insert Lectures into the Lecture Table */
    INSERT INTO Lecture (lectureName, date, time, comment, Course_id, Classroom_id, Users_id, SignUp_id)
        VALUES 
                ('Programmerings hjælp', '2020/02/13', '19:00', 'comment?', '3', '1', '1', '2'), 
                ('Organisations hjælp', '2020/02/13', '19:00', 'comment?', '4', '3', '2', '3'), 
                ('VØS hjælp', '2020/02/13', '19:00', 'comment?', '1', '1', '4', '1'), 
                ('How to be a laywer', '2020/02/13', '19:00', 'comment?', '6', '2', '3', '4'), 
                ('Erhvervsmatematik hjælp', '2020/02/13', '19:00', 'comment?', '9', '5', '5', '5');
    
    
    
    
    
    
        `).then(result => {
    console.log(error, result);
});