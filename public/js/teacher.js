// Klassen User er blot en overklasse som dens child Teacher inheritter fra - Nik
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
class Teacher extends User {
    constructor (userName, password, email, phoneNumber, firstName, lastName, studyProgram, semester) {
        super(userName, password, email, phoneNumber, firstName, lastName);

        this.studyProgram = studyProgram;
        this.semester = semester;
    }
}

// Log in for Teachers - using Local storage - Chris
// We start by creating an empty array called teacherlist - Chris
console.log(localStorage.getItem("Teacher"));
var teacherList = [];


// Our hardcoded users (teachers). here all of their information is gathered. e.g - this is where the log in function gets the matching username and password - Chris
// When we have a class for our teachers, it will ask us for all of the data points that we defined in the class student and user - Chris
if (localStorage.getItem("Teacher") == null) {


// Here we push a new Teacher to our empty array - Chris
    teacherList.push(new Teacher("Jose","4567","Josefinecolberg@gmail.com","23626206","Josefine","Colberg","Ha(it)","3"));
    teacherList.push(new Teacher("Ca18ab", "Øl4ever", "ca18ab@student.cbs.com", "45668921", "Calle", "Olsen", "HA(it)","5"));
    teacherList.push(new Teacher("Ølgod", "password", "miøl18a@student.cbs.com", "66698724", "Mikkel", "Ølgod", "HA(jur.)", "4"));


// The studentlist is then made into a string using the JSON.stringify command - Chris
    var teacherListString = JSON.stringify(teacherList);


// Here we set out studentListString in local storage so that we can later retrieve it - Chris
    localStorage.setItem('Teacher', teacherListString)
} else {
    teacherList = JSON.parse(localStorage.getItem('Teacher'))
}

//.value betyder at den henter værdien!!!
//Kilde: https://stackoverflow.com/questions/154059/how-to-check-empty-undefined-null-string-in-javascript?fbclid=IwAR2Zr_S8S-Wuo0DXQe3x3HG0SWcfMy7jfzorYNjSSRKKNobHis_J-zthQ7k
//Code for validating time. - Alex
function validateHhMm(inputField) {
    //Henter værdien angivet i feltet "time" eller "tid" - Alex
    var data = inputField.value;

    //Tjekker at feltet har en lovlig værdi - Alex
    // ! betyder is true. Hvis der altså er indtastet date i feltet "tid" så fortsætter den.
    if(!data) {
        return false;
    }

    // Splitter teksten ud i to ved kolon. Hvis der ikke bliver 2 elementer, altså time og minut, er datoen formateret forkert. - Alex
    //val[0] indeholder timen og val[1] indeholder minuttet - Alex
    var val = data.split(':');
    if(val.length != 2) { //Hvis der kommer alt andet end to værdier ud, så er enten ikke et kolon eller mere end et hvilket er forkert. - Alex
        return false;
    }
//inspiration til split: https://www.dotnetperls.com/split-js

    // Tjekker at tallet er positivt og at antallet af timer angivet ikke er mere end 23
    if(Math.sign(val[0]) == -1 || val[0] > 23) { //Hvis math.sign = -1 er det et negativt hvilket ikke er korrekt. - Alex
        return false;
    } //Math.sign et library (et library er en samling af functioner) og en af de functioner er noget der kan opfange om tallene er negative eller positive. (udregner om de positive eller negative). -Alex
//kilde til math.sign: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign

    // Tjekker at tallet er positivt og at antallet af minutter angivet ikke er mere end 59. - Alex
    if(Math.sign(val[1]) == -1 || val[1] > 59) { //Hvis math.sign = -1 er det et negativt hvilket ikke er korrekt. - Alex
        return false;
    }
    //Retunerer tidspunktet, som er blevet indtastet. - Alex
    return data;
}

//Validerer inputs til create lecture. - Alex
function validateCreateLecture() {
    if (!document.getElementById("teacher1").value) {
        alert("Name must be entered!");
        return false;
    }
// Tjekker om der er blevet valgt noget andet end standard-værdien ved dropdown. Alerter at der skal vælges noget andet end standard-værdien. - Alex
    if (document.getElementById("studyProgram").value == "Select study program") {
        alert("Study program must be selected!");
        return false;
    }
    //Alerter at der ikke er blevet valgt noget andet end standard værdien. For at gå videre skal der vælges noget andet end standard-værdien. - Alex
    if (document.getElementById("course").value == "Select course") {
        alert("Course must be selected!");
        return false;
    }
    // Tjekker om der er blevet valgt noget andet end standard-værdien ved select classroom. Alerter at der skal vælges noget andet end standard-værdien. - Alex
    // Virker ikke længere det nye elementID er chooseClassroom, men virker heller ikke hvis det udskiftes.
    // og jeg kan ikke gennemskue din funktion Alex, så gider du forsøge at få den til at virke? - Nik
    if (document.getElementById("chooseClassroom").value == "Select classroom") { //Gennemtjek det her PUNKT
        alert("Classroom must be selected!");
        return false;
    }
// Her tjekkes der om text-feltet er tomt. Hvis ikke så fortsætter den. - Alex
    if (!document.getElementById("lectureName").value) {
        alert("Lecture name must be entered!");
        return false;
    }
    //Tjekkes om der er valgt en dag. Hvis dag ikke valgt, så alerter den, hvis valgt, så fortsætter den. - Alex
    if (document.getElementById("day").value == "Choose day") {
        alert("A day must be chosen!");
        return false;

    }
    //Validerer om tiden for dagen er af korrekt format. - Alex
    if (!validateHhMm(document.getElementById("time"))) {
        alert("Please enter a valid time of the day");
        return false;
    }

    return true;
}

/* Her oprettes en forelæsning som har andre variable end dem i localstorage, fordi funktionen ikke længere fungerede efter local storage.
Vi kunne heller ikke få forelæsning op i local storage, så har i stedet valgt at gøre det sådan her - Nik */
function createLecture() {
    // Performs validation. -Alex
// Her trykker man på knappen create lecture og så starter valideringen som ses ovenfor. Så kører den igennem step by step som ses ovenfor. -Alex
    if (!validateCreateLecture()) {
        return;
    }
    var teacher1 = document.getElementById("teacher1").value;
    var studyProgram1 = document.getElementById("studyProgram").value;
    var course1 = document.getElementById("course").value;
    var classRoom1 = document.getElementById("chooseClassroom").value;
    var lectureName1 = document.getElementById("lectureName").value;
    var day1 = document.getElementById("day").value;
    var time1 = document.getElementById("time").value;
    var comment1 = document.getElementById("comment").value;
// Her alertes den forelæsning man opretter med informationerne om de hardcodede classrooms fra det andet js dokument - Nik
    alert("Your lecture has been created"
        + "\nTeacher: " + teacher1
        + "\nStudy program: " + studyProgram1
        + "\nCourse: " + course1
        + "\nClassroom: " + classRoom1
        + "\nLecture name: " + lectureName1
        + "\nDay: " + day1
        + "\nTime of lecture: " + time1
        + "\nAdditional comment: " + comment1);
}
// Denne funktion fjerne en lecture fra dropdown menuen med allerede oprettede forelæsninger - Nik
function removeLecture() {
    var x = document.getElementById("teacherLecture");
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


/* Her fik jeg hjælp af min til block og none delen
Men lad mig forklare. previousHidden er et array, hvor vi senere pusher elementer ind der skal være hidden - Nik */
var previousHidden = [];
function selectStudentsInLectures() {
    // Her laves en variabel prev der gør at de ting der står i arrayet previousHidden er hidden ligesom i css dokumentet - Nik
    for (var prev of previousHidden) {
        prev.style.display = "none";
    }
    // Her søger vi efter den value man vælger i første dropdown - Nik
    var x = document.getElementById("lecturesTeacher1").value;
    // Hvis x er 1 alerter den at der ingen student er for denne forelæsning, da der ikke er nogen tilmeldt her - Nik
    if (x == "1") {
        alert("No students in this lecture");
        /* Ved de næste tre values blockerer den deres hidden tilstand mens det er den value der er valgt i første dropdown liste
        Derefter pushes de ind i arrayet så de er hidden igen når man vælger en anden value i første dropdown - Nik */
    }else if (x == "2") {
        var x = document.getElementById("studentsIn2");
        x.style.display = "block";
        previousHidden.push(x);
        var y = document.getElementById("removeButton2");
        y.style.display = "block";
        previousHidden.push(y);
    }else if (x == "3") {
        var x = document.getElementById("studentsIn3");
        x.style.display = "block";
        previousHidden.push(x);
        var y = document.getElementById("removeButton3");
        y.style.display = "block";
        previousHidden.push(y);
    }else if (x == "4") {
        var x = document.getElementById("studentsIn4");
        x.style.display = "block";
        previousHidden.push(x);
        var y = document.getElementById("removeButton4");
        y.style.display = "block";
        previousHidden.push(y);
    }else {
        alert("Select a lecture to show its students");
    }
}

/* De følgende funktion hører til dropdown listen over tilmeldte students. Jeg ville gerne kunne gøre det med en knap, der bruger det id der svarer til den dropdownlist man er i. - Nik  */
function removeStudent2() {
    var x = document.getElementById("studentsIn2");
    x.remove(x.selectedIndex);
}
function removeStudent3() {
    var x = document.getElementById("studentsIn3");
    x.remove(x.selectedIndex);
}
function removeStudent4() {
    var x = document.getElementById("studentsIn4");
    x.remove(x.selectedIndex);
}


