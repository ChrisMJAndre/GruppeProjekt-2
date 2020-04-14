const pool = require('../db');
pool.query(`



    /* Insert Users into the Users Table, not all users */
    INSERT INTO Users (id, firstName, lastName, passWord, email, phoneNumber, UserType_id, StudyProgramme_id)
            VALUES ('Niklas', 'Lykke-Bondergaard', '1234', 'Nily19ab@student.cbs.dk', '31320232', '1','1');





        `).then(result => {
    console.log(error, result);
});


