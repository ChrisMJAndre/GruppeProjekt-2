const pool = require('../../database/db')
class ListOfStudents {
    constructor(id, student_id, lecture_id) {
        this.id = id;
        this.student_id = student_id;
        this.lecture_id = lecture_id;

    }
}

class ListOfStudentsInformation {
    constructor(listOfStudents) {
        this.listOfStudents = listOfStudents;
    }
    getStudentList() {
        let students = new Set();
        for (const student of this.listOfStudents) {
            students.add(student.firstname + ' ' + student.lastname)
        }
        return Array.from(students);
    }
}



module.exports = {
    ListOfStudents,
    ListOfStudentsInformation
};