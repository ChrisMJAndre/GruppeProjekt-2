const pool = require('../db');
pool.query(`

    
        /* Insert studyprogrammes into the studyProgramme Table */    
    INSERT INTO studyProgramme (title) 
        VALUES 
                ('Ha(It.)'),
                ('Ha(Jur.)'), 
                ('Ha(Mat.)');
    
    
    
    
    
    
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