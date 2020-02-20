//Different variables needed in our registration form retrieved from out Registration HTML document - Alex
// Den her funktion bliver ikke brugt? - Nik
/*
function Register() {
    this.userName = document.getElementById("userName").value;
    this.name = document.getElementById("name").value;
    this.email = document.getElementById("email").value;
    this.phone = document.getElementById("phone").value;
    this.comment = document.getElementById("comment").value;
    this.password = document.getElementById("password").value;
}
*/

//Store input from registration to localStorage - Josefine
// Hvorfor er det fullName her, men firstName og lastName i student, admin og teacher?? - Nik
function storeLogin() {
    localStorage.setItem("userName", userName.value);
    localStorage.setItem("name", fullName.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("phone", phone.value);
    localStorage.setItem("comment", comment.value);
    localStorage.setItem("password",password.value);
    // Hvorfor skal vi console.log det her? - Nik
    console.log(fullName.value);
}


// Validation form that makes sure that all the information is gathered in the form - Chris
// This validation form also makes sure that the user cannot enter something incorrectly. e.g. - A letter in a phone number og an email with a @ - Chris
    function validateContactInformation() {


// Variable form_valid is set to true as a standard. When something is not selected the form_valid is set to false - Chris
        var form_valid = true;


// New variable for validation message. It is empty now since we dont know what the user has done wrong yet - Chris
        var validation_message = "";


// Validation for User name - Chris
        if (userName.value == null || userName.value == ""){
            validation_message += "Username must be filled in! \n";
            form_valid = false; }


// Validation for Full Name - Chris
        if (fullName.value == null || fullName.value == ""){
                validation_message += "Full name must be filled in! \n";
                form_valid = false; }


// Validation for Email - we learned this is Business and Information Systems
// Makes sure there is a @ in the email - Chris
        var atpos = email.value.indexOf("@");
        var dotpos = email.value.lastIndexOf(".");
        if (atpos<1||dotpos < atpos + 2 || dotpos + 2 > email.length){
            validation_message += "Please enter a valid email \n";
            form_valid = false;}


// Validation for phone numbers, makes sure that the phone number cannot consist of letters - Chris
        if (isNaN(phone.value)){
            validation_message += "Phone numbers can only consist of numbers! \n";
            form_valid = false;}
        else if (phone.value == null || phone.value == "") {
            validation_message += "Please enter a phone number \n";
            form_valid = false ;}


// Validation for password, makes sure that the password cannot be null or empty - Chris
        if (password.value == null || password.value == ""){
            validation_message += "Password must be filled in! \n";
            form_valid = false; }


// "If form_valid" triggers if it is true. Form_valid default setting is true therefore it will happen if none of the if statements above are triggered - Chris
// Alert that confirms the information you have entered in the form - Chris
        if (form_valid) {
            alert("You have been registered"

                + "\nUsername: " + userName.value
                + "\nName: " + fullName.value
                + "\nEmail: " + email.value
                + "\nPhone: " + phone.value
                + "\nPassword: " + "****"
                + "\nAdditional comment: " + comment.value);
        }
        else {


// If the form_valid is false it will trigger an alert with the validation message - Chris
            alert(validation_message);
            }
        return (form_valid);
    }
