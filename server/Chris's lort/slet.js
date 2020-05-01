const pool = require('../db');
pool.query(`

       
DROP SCHEMA public CASCADE;
CREATE SCHEMA public;


`).then(result => {
    console.log(error, result);
});
