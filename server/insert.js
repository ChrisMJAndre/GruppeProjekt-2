// Here we insert all of the data (the hardcoded data)

const pool = require('./db');
pool.query(`





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