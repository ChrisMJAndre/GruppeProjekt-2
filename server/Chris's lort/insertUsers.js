const pool = require('../db');
pool.query(`



    /* Insert Student into the Student Table, not all Student */
    INSERT INTO Student (firstName, lastName, passWord, email, phoneNumber, StudyProgramme_id)
            VALUES ('Niklas', 'Lykke-Bondergaard', '1234', 'Nily19ab@student.cbs.dk', '31320232', '1');
    
    
    
    
    /* Insert teacher into the Teacher Table, not all teacher */
    INSERT INTO Teacher (firstName, lastName, passWord, email, phoneNumber, StudyProgramme_id)
            VALUES ('Christopher M.J.', 'André', '5678', 'Chan19af@student.cbs.dk', '31418551', '2');




        `).then(result => {
    console.log(error, result);
});


