const pool = require('../db');
pool.query(`

    
    /* Insert Lectures into the Lecture Table */
    INSERT INTO Lecture (id, lectureName, date, time, comment, Course_id, Classroom_id, Users_id, SignUp_id)
        VALUES 
                ('600', 'Programmerings hjælp', '2020/02/13', '19:00', 'comment?', '102', '200', '300', '1'), 
                ('601', 'Organisations hjælp', '2020/02/13', '19:00', 'comment?', '103', '202', '301', '2'), 
                ('602', 'VØS hjælp', '2020/02/13', '19:00', 'comment?', '100', '200', '303', '0'), 
                ('603', 'How to be a laywer', '2020/02/13', '19:00', 'comment?', '105', '201', '302', '3'), 
                ('604', 'Erhvervsmatematik hjælp', '2020/02/13', '19:00', 'comment?', '108', '204', '304', '4');
    
    
    
    
    
    
        `).then(result => {
    console.log(error, result);
});