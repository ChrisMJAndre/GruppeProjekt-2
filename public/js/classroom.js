// Klassen Classroom er her opstillet med nogle attributter - Nik
class Classroom {
    constructor(size, location) {
        this.size = size;
        this.location = location;
    }
}

//Den her skal være der før den virker den er fundet her:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
Classroom.prototype.toString = function classroomToString () {
    return "Classroom " + "Size: " + this.size + " Location: " + this.location;
}

// Her er objekter af klassen Classroom, så stringifies. Det vil sige, at de laves om
// fra et object til en string, så de kan bruges i alerten i createLecture funktionen - Nik
room1 = new Classroom("50", "Solbjerg Plads");
room2 = new Classroom("40", "Dalgas Have");
room3 = new Classroom("120", "Solbjerg Plads");
room4 = new Classroom("90", "Kilen");
room5 = new Classroom("50", "Flintholm");
var room1String = JSON.stringify(room1);
var room2String = JSON.stringify(room2);
var room3String = JSON.stringify(room3);
var room4String = JSON.stringify(room4);
var room5String = JSON.stringify(room5);


// Her laver jeg variablen select som vælger fra IDet chooseClassroom, som er en tom
// dropdown altså select HTML tag. Dernæst laver jeg variablen options, som er et array
// Med de stringifiede versioner af room1 osv. Hvis i (integer) er 0 tilføjes en af
// objekterne fra options arrayet. Variablen el laver nye option HTML elementer, hvis value
// Er dem fra opt, som er taget fra options. Altså tilføjes der her options til en
// HTML dropdown/select tag fra et array af vores hardcodede objekter. - Nik http://jsfiddle.net/yYW89/
// Funktionen er i parantes, da den så kalder sig selv med det samme.
(function selectClassroom() {
var select = document.getElementById("chooseClassroom");
var options = ["Classroom 1: " + room1String, "Classroom 2: " + room2String, "Classroom 3: " + room3String, "Classroom 4: " + room4String, "Classroom 5: " + room5String];
for (var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}
})();



