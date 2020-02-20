// Here we have created a log in function using local storage - Chris
// The goal of this function is allow the users to log in as either a student, teacher or admin - Chris
// To start of we create a variable for a button, since we could not get it to work otherwise, that is why there is a login.onclick = function
// It is a workaround instead of just creating a function and calling the function on the button - Chris
// we also create 3 variables, existingStudent, existingTeacher and existingAdmin. These 3 variables store the information that we create in the correlating js documents - Chris
// these 3 variables store the login information of our users. The username and the password - Chris
var login = document.getElementById('login');
var existingStudent = JSON.parse(localStorage.getItem('Student'));
var existingTeacher = JSON.parse(localStorage.getItem("Teacher"));
var existingAdmin = JSON.parse(localStorage.getItem("Admin"));
login.onclick = function login() {


// Here we create 2 more variables to check if the username and the password actually matches the username and password in our local storage - Chris
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;


// Here we created a for loop that checks the correlating username and password in the local storage and checks if it matches - Chris
// If it is a match you are then granted access to the respective page for students, teachers and admin - Chris
// The important distinction in the 3 loops is that we check for different user, student, teacher and admin, and you are then redirected to the correct page - Chris
    for (let i = 0; i < existingStudent.length; i++) {
        if (user == existingStudent[i].userName && pass == existingStudent[i].password) {
            alert("You are logged in as a student");
// Linking to the student page - Chris
            document.location.href = "Student.html"
            return true;
        }
    }


    for (let h = 0; h < existingTeacher.length; h++) {
        if (user == existingTeacher[h].userName && pass == existingTeacher[h].password) {
            alert("You are logged in as a teacher");
// Linking to the teacher page - Chris
            document.location.href = "teacher.html";
            return true;
        }
    }


    for (let g = 0; g < existingAdmin.length; g++) {
        if (user == existingAdmin[g].userName && pass == existingAdmin[g].password) {
            alert("You are logged in as an admin");
// Linking to the Admin page. For some reason it would not allow me to link straight to the html page as with student and teacher, but this works as well - Chris
            document.location.href = "../Text files/admin.html";
            return true;
        }
    }


// I also created an alert in case the username and the password does not match, e.g. the username and password is not yet registered in the program - Chris
    alert("Incorrect username or password");
}