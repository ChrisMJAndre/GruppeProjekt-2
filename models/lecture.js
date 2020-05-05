const moment = require('moment');

class Lecture {
    constructor(id, lecturename, date, time, comment) {
        this.id = id;
        this.lecturename = lecturename;
        this.date = moment(LectureInformation.date).format('YYYY-MM-DD');
        this.time = time;
        this.comment = comment;
    }
}



class LectureInformation extends Lecture {
    constructor(id, lecturename, date, time, comment, teacher_id, firstname, lastname, location, title){
        super(id, lecturename, date, time, comment);
        this.teacher_id = teacher_id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.location = location;
        this.title = title;
    }

}



module.exports = {
    Lecture: Lecture,
    LectureInformation: LectureInformation
};