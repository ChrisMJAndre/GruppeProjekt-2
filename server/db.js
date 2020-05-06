//Connection to the Database is established here  - Chris


const { Pool, Client } = require('pg');
const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    database: 'StudentTeach',
    password: 'studentTeach123',
});
module.exports = pool;




//SKAL DETTE VÆRE HER?  - Chris
pool.query('SELECT NOW()').then(result => {
    console.log(result.rows)
});



