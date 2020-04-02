const pool = require('../db');
pool.query(`

    
        /* Insert studyprogrammes into the studyProgramme Table */    
    INSERT INTO studyProgramme (id, title) 
        VALUES 
                ('1', 'Ha(It.)'),
                ('2', 'Ha(Jur.)'), 
                ('3', 'Ha(Mat.)');
    
    
    
    
    
    
        `).then(result => {
    console.log(error, result);
});






/*

const pool = require('../db');
pool.query(`









        `).then(result => {
    console.log(error, result);
});


 */