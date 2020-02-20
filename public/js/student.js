// class user, which is the main class where our sub classes gets a few of their attributes from - Chris
class User {
    constructor(userName, password, email, phoneNumber, firstName, lastName) {
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.firstName= firstName;
        this.lastName = lastName;
    }
}


// Sub Class student which extends the user. Meaning: This class gets most of its attributes from the class user, but a few new ones, such as study program and semester - Chris/Josefine
class Student extends User {
    constructor(userName, password, email, phoneNumber, firstName, lastName, studyProgram, semester) {
        super(userName, password, email, phoneNumber, firstName, lastName);

        this.studyProgram = studyProgram;
        this.semester = semester;
    }
}


// Log in for student - using Local storage - Chris
// We start by creating an empty array called studentlist - Chris
var studentList = [];


// Our hardcoded users (students). here all of their information is gathered. e.g - this is where the log in function gets the matching username and password - Chris
// When we have a class for our student, it will ask us for all of the data points that we defined in the class student and user - Chris
// Here we push a new student to our empty array - Chris
if (localStorage.getItem("Student") == null) {
        studentList.push(new Student("ChrisMJandre","Agurk","Christopher@andre.bz",
            "31418551","Christopher","André","HA(it.)","1"));
        studentList.push(new Student("Niller","1234", "nilb107@gmail.com", "31320232","Niklas",
            "L-B", "HA(it.)", "1"));
        studentList.push(new Student("Sven","bord123","Sven@gmail.com","57647239", "Sven",
            "Eriksen","HA(jur.)","4"));
        studentList.push(new Student("Kasper", "stol123", "Kasper@gmail.com", "85923043", "Kasper",
            "Rasmussen", "HA(it.)", "3"));


// The studentlist is then made into a string using the JSON.stringify command - Chris
var studentListString = JSON.stringify(studentList);


// Here we set out studentListString in local storage so that we can later retrieve it - Chris
localStorage.setItem('Student', studentListString);
    } else {
        studentList = JSON.parse(localStorage.getItem('Student'))
    }

//Validation form that makes sure that you cannot join a lecture without selecting a study program, course and a lecture - Chris
function studentValidationForm() {


// 4 variables that help keep track of the content within the dropdown lists and the comment box. Used in the "you have joined a lecture alert" - Chris
    var studyprogram = document.getElementById("category").value;
    var Course = document.getElementById("subcategory").value;
    var lecture = document.getElementById("sub_subcategory").value;
    var comment = document.getElementById("comment").value;


// Variable form_valid is set to true as a standard. When something is not selected the form_valid is set to false - Chris
    var form_valid = true;


// New variable for validation message. It is empty now since we dont know what the user has done wrong yet - Chris
    var validation_message = "";


// This validation form works by first defining a new variable with the content of the dropdown list - Chris
// Here we simply say that if the content of the dropdown list is null or empty (e.g. not selected) the validation form (form_valid) is set to false and a new validation message is added - Chris
// This is done for all 3 of the dropdown lists - Chris
        var studyprogram1 = document.getElementById("category").value;
        if (studyprogram1 == null || studyprogram1 == "") {
            form_valid = false;
            validation_message += "A studyprogram must be selected \n";
        }
        var course1 = document.getElementById("subcategory").value;
        if (course1 == null || course1 == "") {
            form_valid = false;
            validation_message += "A course must be selected \n";
        }
        var lecture1 = document.getElementById("sub_subcategory").value;
        if (lecture1 == null || lecture1 == "") {
            form_valid = false;
            validation_message += "A lecture must be selected \n";
        }


// "If form_valid" triggers if it is true. Form_valid default setting is true therefore it will happen if none of the 3 if statements above are triggered - Chris
// Alert that confirms which lecture you have joined - Chris
        if (form_valid) {
            alert("You have joined a lecture"
                + "\nStudy Program: " + studyprogram
                + "\nCourse: " + Course
                + "\nLecture: " + lecture
                + "\nAdditional comment:" + " " + comment);
        }


// If the form_valid is false it will trigger an alert with the validation message - Chris
        else {
            alert(validation_message);
        }
        return form_valid;
    }

// https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript