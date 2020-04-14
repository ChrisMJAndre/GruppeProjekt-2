const pool = require('../db');
pool.query(`


/* Insert classrooms into the Classroom Table */
INSERT INTO Classroom (size, location)
VALUES
('50', 'Solbjerg Plads'),
    ('40', 'Flintholm'),
    (60', 'Dalgas Have'),
    ('90', 'Porcelænshaven'),
    ('50', 'Kilen'); 
    
    
    
`).then(result => {
    console.log(error, result);
});