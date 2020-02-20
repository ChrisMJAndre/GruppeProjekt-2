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


// Sub Class Admin which extends the user. Meaning: This class gets most of its attributes from the class user - Chris/Josefine
class Admin extends User {
    constructor(userName, password, email, phoneNumber, firstName, lastName) {
        super(userName, password, email, phoneNumber, firstName, lastName);
    }
}


//Her kommer tre ens funktioner, som blot fjerner en fra den liste man vælger fra - Nik
function deleteStudent() {
    var x = document.getElementById("allStudents");
    x.remove(x.selectedIndex);
}

function deleteTeacher() {
    var x = document.getElementById("allTeachers");
    x.remove(x.selectedIndex);
}

function deleteLecture() {
    var x = document.getElementById("allLectures");
    x.remove(x.selectedIndex);
}

// Since studentlist is not defined in this js document, i had to define a new variable "Studentinformation". We can fetch the data of our students from the local storage, with the key student - Chris
function showStudentInformation() {
     var studentinformation = JSON.parse(localStorage.getItem("Student"));
        alert("Student Information:"
            + "\n name: "  + studentinformation[0].firstName + " " + studentinformation[0].lastName + "\n email: " + studentinformation[0].email
            + "\n name: "  + studentinformation[1].firstName + " " + studentinformation[1].lastName + "\n email: " + studentinformation[1].email
            + "\n name: "  + studentinformation[2].firstName + " " + studentinformation[2].lastName + "\n email: " + studentinformation[2].email
            + "\n name: "  + studentinformation[3].firstName + " " + studentinformation[3].lastName + "\n email: " + studentinformation[3].email
        )
}


// Same concept applies here as for the showStudentInformation function - Chris
function showTeacherinformation() {
    var teacherInformation = JSON.parse(localStorage.getItem("Teacher"));
        alert ("Teacher Information:"
        + "\n name: " + teacherInformation[0].firstName + " " + teacherInformation[0].lastName + "\n email: " + teacherInformation[0].email
        + "\n name: " + teacherInformation[1].firstName + " " + teacherInformation[1].lastName + "\n email: " + teacherInformation[1].email
        + "\n name: " + teacherInformation[2].firstName + " " + teacherInformation[2].lastName + "\n email: " + teacherInformation[2].email
    )
}


// Log in for student - using Local storage - Chris
// We start by creating an empty array called adminlist - Chris
var adminlist = [];


// Our hardcoded users (Admin). here all of their information is gathered. e.g - this is where the log in function gets the matching username and password.
// When we have a class for our admin, it will ask us for all of the data points that we defined in the class student and user - Chris
// Here we push a new admin to our empty array - Chris
if (localStorage.getItem("Admin") == null) {
    adminlist.push(new Admin("Admin","123","Admin@gmail.com","12345678","Admin","Admin"));


// The studentlist is then made into a string using the JSON.stringify command - Chris
    var adminListString = JSON.stringify(adminlist);


// Here we set out studentListString in local storage so that we can later retrieve it - Chris
    localStorage.setItem('Admin', adminListString);
} else {
    adminlist = JSON.parse(localStorage.getItem('Admin'))
}


