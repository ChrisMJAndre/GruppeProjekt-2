const pool = require('./db');
pool.query(`

            
            
            
ALTER TABLE SignUp 
ADD CONSTRAINT FK_Lecture_id FOREIGN KEY (id)
REFERENCES Lecture (id)

        
`).then(result => {
    console.log(error, result);
});

/*
Denne skal insert ind i signup
 Lecture_id INT REFERENCES Lecture (id));

 */