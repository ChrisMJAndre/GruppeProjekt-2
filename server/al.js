const pool = require('./db');
pool.query(`
    
    ALTER TABLE SignUp 
ADD CONSTRAINT INT Lecture_id FOREIGN KEY (id) REFERENCES Lecture(id);
    
       
    `).then(result => {
    console.log(error, result);
});
/* SignUp_id INT REFERENCES SignUp (id)

 */