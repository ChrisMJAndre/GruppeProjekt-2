/createLecture:
session.user.id skal sortere valgmuligheder i course.
id.srudyprogramme_id
Den ved at det er usertype teacher og har id 1. Jeg vil derfor have at den skal vide hvilken teacher det er.
Så kan jeg nemlig kigge på den teachers studyprogramme_id og sige at det skal være course.studyprogramme_id for at de må få vist de courses som valgmulighed.
Noget i stil med det her:

const studyprogrammeId = req.session.user.id.teacher_id.studyprogramme_id
pool.query(`SELECT course.id, course.studyprogramme_id, teacher.id, teacher.studyprogramme_id FROM studyprogramme INNER JOIN teacher on teacher.studyprogramme_id=studyprogramme.id INNER JOIN course on course.studyprogramme_id=studyprogramme.id WHERE studyprogramme.id=${studyprogrammeId}teacher.studyprogramme_id`)
const studyprogramme = result.rows;
studyprogramme.id = studyprogrammeId;

Men createLecture skal vel request studyprogrammeId fra db før den pool.query med insert into hvor den requester body.course, fordi body.course skal kun populates med courses, efter sådan noget her:
if (course.studyprogramme_id === user.studyprogramme_id)
altså kun vise de courses for den studieretning, den loggede ind bruger har.
Når vi logger req.session.user.id svarer det til teacher_id i lecture. Og den har vi før fået til at hænge sammen med oplysninger med teacher i et join, så det burde være muligt

Derudover skal vi sikkert også begrænse dato, så man ikke kan oprette en i datiden

/register
Og skal passwords encryptes?

/lecture:id
Skal man kunne fjerne en student fra sin forelæsning? i så fald skal de joinede students fra list of students populates i et select tag i stedet for en ul, og så skal man når man har valgt en, have en knap, hvor når den submitter, skal der bare være en destroy metode som den fra lectureController, hvor den sletter

var mySelect = document.getElementById("den dropdown med joined students");
var mySelection = mySelect.selectedIndex
const studentId = req.mySelection.student_id
pool.query(`DELETE FROM listOfStudents WHERE student_id=${studentId}`).then(result => {
console.log(result);

            return res.redirect('/lectures')
        }).catch(err => res.send(err))

Den samme student kan tilmelde sig den samme forelæsning flere gange. i lectureCOntrollers post, skal vi lave et if statement eller noget, hvor den kigger om det i listofstudents tabellen findes en row hvor student_id og lecture_id er det samme som det student_id og lecture_id man forsøger at insert

/lectures
Skal man kunne se alle forelæsninger som student og som teacher? Eller skal det deles op efter studyprogramme? Vi kan godt argumentere for at det er bevidst valg så man som teacher kan få inspiration fra andre og som student kan lære noget om andre fag.

Men tænker det skal deles op når man opretter, så jeg ikke kan holde forelæsninger i noget jeg er ukvalificeret til. ellers bliver vores studyprogramme table også irealevant, hvis vi ikke bruger det i programmet.
