const pool = require('../db');
pool.query(`
/* Insert usertypes into the UserType Table */
INSERT INTO UserType (id, title)
VALUES
('1', 'Teacher'),
    ('2', 'Student'),
    ('3', 'Admin');
    
    
    `).then(result => {
    console.log(error, result);
});