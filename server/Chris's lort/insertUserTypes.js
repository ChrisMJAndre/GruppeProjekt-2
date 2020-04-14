const pool = require('../db');
pool.query(`
/* Insert usertypes into the UserType Table */
INSERT INTO UserType (id, title)
VALUES
('Teacher'),
    ('Student'),
    ('Admin');
    
    
    `).then(result => {
    console.log(error, result);
});