const { Pool, Client } = require('pg');
const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    database: 'StudentTeach',
    password: 'studentTeach123',
});
module.exports = pool;

pool.query('SELECT NOW()').then(result => {
    console.log(result.rows)
    pool.end()
});
