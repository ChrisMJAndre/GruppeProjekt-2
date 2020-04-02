const pool = require('../db');
pool.query(`


/* Insert classrooms into the Classroom Table */
INSERT INTO Classroom (id, size, location)
VALUES
('200', '50', 'Solbjerg Plads'),
    ('201', '40', 'Flintholm'),
    ('202', '60', 'Dalgas Have'),
    ('203', '90', 'Porcelænshaven'),
    ('200', '50', 'Kilen'); 
    
    
    
`).then(result => {
    console.log(error, result);
});