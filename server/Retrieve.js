//A way to retrieve all the data from the database
//https://bezkoder.com/node-express-sequelize-postgresql/

// const pg = require('pg');

module.exports = {

    client.query('SELECT * FROM studyProgramme').then(res => {

        const fields = res.fields.map(field => field.name);

        console.log(fields);

    }).catch(err => {
        console.log(err.stack);
    }).finally(() => {
        client.end()
    });

}