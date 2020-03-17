const { Pool } = require('pg');
const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'test',
    database: 'test',
    password: 'test',
});

pool.query('SELECT NOW()').then(result => {
    console.log(result.rows)
    pool.end()
});