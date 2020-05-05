class ListOfStudents {
    constructor(id, student_id, lecture_id) {
        this.id = id;
        this.student_id = student_id;
        this.lecture_id = lecture_id;

    }
}

class ListOfStudentsInformation extends ListOfStudents {
    constructor(id, student_id, lecture_id, firstname, lastname){
        super(id, student_id, lecture_id);
        this.firstname = firstname;
        this.lastname = lastname;

    }
}



module.exports = {
    ListOfStudents: ListOfStudents,
    ListOfStudentsInformation: ListOfStudentsInformation
};