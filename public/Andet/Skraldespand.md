Her skal vi flytte funktioner hen i stedet for at slette dem.
På den måde kan vi bruge dem når vi skal reflektere over vores process.

Her kan vi også skrive vores diskussioner om funktioner og andet, som kan bruges i refleksion i rapporten.

Hvis vi kopierer skal vi skrive referencer og bruge APA-modellen

Slå op i bogen efter begreber når vi skriver kommentarer til vores kode

Objekt orienteret programmering side 426 i bogen


Vi har fjernet course.js, fordi den ikke længere bliver brugt til noget efter vi indførte localstorage:
// Klassenn Course er her opstillet med nogle attributter - Nik
class course {
    constructor(studyProgram, semester) {
        this.studyProgram = studyProgram;
        this.semester = semester;
    }
}
// Her er der hardcodet nogle forskellige courses som skulle have virket i student og teacher i createLecture og joinLecture - Nik
BIS = new course ("HA(it.)", "1");
VØS = new course ("HA(it.)", "1");
ORG = new course("HA(it.)", "1");
PRO = new course("HA(it.)", "1");
REG = new course("HA(it.)", "2");
ITP = new course("HA(it.)", "2");
PRO2 = new course("HA(it.)", "2");
ORG2 = new course("HA(it.)", "2");
console.log(BIS);

Forsøg med at alert at der ikke er flere students, når man har fjernet alle
   var select = document.getElementById("lecturesTeacher1");
    if(select.options.length > 0) {
        alert("No students in this lecture");
    }

Hvis jeg kunne lave én knap i stedet for tre forskellige af den samme knap:
} else if (x == "2" || "3" || "4") {
        document.getElementById("removeButton").style.display = "block"; 
Så skal man også bruge querySelector når det er mere end et id:
function removeStudent() {
    var x = document.querySelectorAll('#studentsIn2, #studentsIn3, #studentsIn4');
    
    
Den her fjernes fra teache.js, og i stedet indsættes den funktion jeg lavede lokalt d. 05-11:
/* Her er funktionen der kan fjerne en student fra en forelæsning. Én forelæsning har ingen tilmeldte students, så der kan ingen fjernes fra.
Andre har students, så man får vi listen over de students der er tilmeldt og kan fjerne en. Indtil videre fjerner det dem dog fra listen der er fælles for alle forelæsninger. - Nik */
function studentRemove() {
    var lectureStudent = document.getElementById("lectureRemoveStudent").value;
    if(lectureStudent == "Consumer surplus og producer surplus") {
        document.getElementById("studentListFunction").style.display = "none";
        alert("No students in this lecture");
    } else if (lectureStudent == "Lineær programmering") {
        document.getElementById("studentListFunction").style.display = "";
        console.log("Please select student to remove");
    } else if (lectureStudent == "Programmering - Guide til objekter"){
        document.getElementById("chris").style.display = "none";
        console.log("Only one student in this lecture");
    } else if (lectureStudent == "If statements og loops") {
        document.getElementById("studentListFunction").style.display = "";
        console.log("Please select student to remove");
    }
}
//Skal have ændret, så når man fjerne nogen fra en lecture, så bliver de ikke fjernet fra de andre lectures - Nik

/* Denne funktion hører til dropdown listen over tilmeldte students, og skal kun vises, hvis der er nogen der er tilmeldt.
Måske skal den gentages for hver forelæsning, så man ikke fjerner fra samme liste - Nik  */
function removeStudent() {
    var x = document.getElementById("studentList");
    x.remove(x.selectedIndex);
}

/** function showLecture() {
    console.log("Show localStorage");
    console.log(localStorage);
}
*/

// Her er der hardcodet nogle classrooms som bruges i createLecture funktionen - Nik
//Det ville nok være smartere at push dem til et array
//Prøvede at lave det med array, men så blev de vist i en linje i dropdown
//Så det blev på den grimme måde i stedet med 5 hårde eksempler - Nik
/* Det her bliver ikke brugt længere - Nik
var classroomList = [];

classroomList.push(new Classroom("50", "Solbjerg Plads"));
classroomList.push(new Classroom("40", "Dalgas Have"));
classroomList.push(new Classroom("120", "Solbjerg Plads"));
classroomList.push(new Classroom("90", "Kilen"));
classroomList.push(new Classroom("50", "FLintholm"));
var classroomListString = JSON.stringify([classroomList]);
 */
 
 /* Disse kommenteres ud da jeg forsøger at gøre ligesom med de andre harcodede eksempler vi har. - Nik
 room1 = new Classroom("50", "Solbjerg Plads");
 room2 = new Classroom("40", "Dalgas Have");
 room3 = new Classroom("120", "Solbjerg Plads");
 room4 = new Classroom("90", "Kilen");
 room5 = new Classroom("50", "Flintholm");
 Det her skal opdateres, men skulle gerne gøre de hardcodede classrooms til strings, så de kan være med i alerten når man opretter en forelæsning.
 Hvis det kommer til at virke, skal det indgå i createLecture funktionen i stedet for at console.log dem - Nik
 var test1 = JSON.stringify(room1); */
 
 // Denne funktion console.logger det valgte classroom, så når man opretter en forelæsning, kan man se informationerne om det valgte classroom - Nik
 /* Bliver ikke længere brugt da jeg fandt en smartere måde - Nik
 function getSelectClassroom() {
     var selectedClassroom = document.getElementById("Classroom").value;
     if (selectedClassroom === "room1") {
         console.log(room1);
     } else if (selectedClassroom === "room2") {
         console.log(room2);
     } else if (selectedClassroom === "room3") {
         console.log(room3);
     } else if (selectedClassroom === "room4") {
         console.log(room4);
     } else if (selectedClassroom === "room5") {
         console.log(room5);
     }
 }
 
 
1.2 Problemformulering – Dette skal nok væk (Colle) enig Niklas 
Universitetet er en stor ændring for mange af os. Studerende kommer med forskellige uddannelser fra gymnasiet (hhx, stx). Dette betyder at alle ikke har den samme viden, når de begynder på universitet. Dette resulterer ofte i, at mange føler, at de ikke helt kan følge med i undervisningen. Det er derfor vigtigt at der findes alternativer, så de kan bedst ydbygge deres faglige viden og finde ud af hvilke læringsteknikker, der virker for dem, i løbet af deres kommende år på universitet. Problemerne opstår i både form af mangel af viden på området, fordi det kan enten være helt nyt eller noget man syntes er meget abstrakt. Overgangen fra at være gymnasieelev til at være studerende på universitet kan også være svær, da ens ansvar for ens egen læring er markant højere end før. Dette har banet en vej for vores løsning – en platform som både skal være med at styrke elevens overgang til studiet, men også højne deres faglige viden, ved at udbyde muligheden for ekstra undervisning. 


6.1 Planlægning af vores process (MÅSKE EKSTRA?) - Gider vi sku ikke lave kh niller 
Bla bla  
  */

//Fra min kodeforklaring. Laver om selectClassroom i stedet - Nik
selectStudentsInLectures - I mangel på bedre løsninger har vi lavet 3 knapper og tre select tags i html for at få funktionen til at virke. Meningen er, man skal kunne se de tilmeldte elever på ens egne oprettede forelæsninger, og dernæst fjerne dem. Vi stødte dog ind i problemer med at de blev fjernet fra alle forelæsninger. SÅ der bliver her brugt CSS til at skjule knapperne og dropdownlisterne indtil de skal bruges. De er alle skrevet ind i et CSS dokument med display: none; og hvis man vælger en forelæsning, blokeres deres status som “usynlig” i CSS dokumentet og den pågældende knap og liste over elever vises. Når en anden forelæsning vælges, pushes den forrige knap og liste ind i et array der igen skjuler dem? Det skal siges at vi her fik hjælp til CSS delen, da vi følte, at funktion var vigtig at have for en teacher, så vi ville hellere have en dårlig løsning, der senere kan optimeres, end at fjerne den del af programmet. 
