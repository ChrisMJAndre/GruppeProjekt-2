# Gruppeprojekt-1

Programmeringsprojekt - StudentTeach

https://github.com/Niklas107/Gruppeprojekt-1 
 
1.1 Indledning  

StudentTeach er en platform der er tiltænkt til CBS, men da det er objektorienteret system kan det senere bruges på andre universiteter. Idéen er simpel: studerende skal kunne undervise andre studerende. Dette vil foregå ved, at en studerende, som har været igennem en eksamen i et fag, har muligheden for at undervise en klasse på samme linje i det pågældende fag. Det minder en del om de øvelsestimer vi har på CBS i dag. Forelæsningerne gennem StudentTeach kan dog have en anden tilgang. Der kan i disse forelæsninger være en mere uformel tilgang til undervisningen, da de ikke nødvendigvis skal berøre emnerne i undervisningsplanen. Der kan således være mere tid til spørgsmål, eller mere fokus på svære emner, som ikke blev gennemgået grundigt eller tydeligt nok til en almindelig forelæsning. Alle studerende der tilmelder sig som lærere har selv været igennem den proces, som de nuværende studerende går igennem. Som ny student er der mange nye oplevelser og fag. Dette resulterer ofte i, at mange føler, at de ikke helt kan følge med i undervisningen. Mange studerende i dag vil opleve problemer i forhold til hvordan de bedst udbygger deres faglige viden, og hvilke læringsteknikker, der virker for dem, i løbet af deres år på universitet. Problemerne opstår både i form af manglende viden på området, fordi det er nyt, samt overgangen fra at være elev til at være studerende, hvor ens eget ansvar for egen læring er markant højere end tidligere. Nogle vil derfor føle, at de ikke helt kan følge med. Dette baner derfor vej for vores problemformulering - at lave en platform som både skal være med til at styrke nye elevers overgang til studiet, samt at højne fagligheden, ved at udbyde muligheden for ekstra undervisning.  

Metode - Denne opgave er bygget op således, at det programmeringsmæssige faglige niveau er regressivt gennem opgaven. Det vil sige at de første afsnit af denne rapport vil fokusere på en række visuelle illustrationer af vores platforms opbygning. Her vil der indgå bestemte krav til programspecifikationer og et klassediagram. Fremtidige versioner vil blive beskrevet mere detaljeret, og inkludere use-cases, flow-charts, samt beskrivelser. De senere afsnit af rapporten vil indeholde udvalgte eksempler af koden, som er essentielt for forståelsen af platformen.  

1.2 Problemformulering  

Som afslutning på dette fag, programmering og udvikling af små systemer samt databaser, har vi valgt at beskæftige os med et administrativt system, hvor studerende kan hjælpe andre studerende. På baggrund af projektoplægget har vi opstillet følgende problemformulering: Universitet er en stor forandring for mange, læring er mere selvstændig end nye studerende hidtil har oplevet. Vi har valgt at udvikle et system, der gør det muligt for studerende at hjælpe andre studerende, ved at formidle den viden og kendskab de har fået i deres tid på universitetet. Dette kan hjælpe de studerende, der ikke helt kan følge med i undervisningen, og føler at de er bagud fagligt. Systemet kræver at de studerende, som tilmelder sig som lærere har taget de samme kurser, som de yngre studerende søger hjælp til. Nærmere bestemt har vi i sinde at udvikle et system, der gør det muligt at samle og redigere i de dertilhørende data. Formålet med vores platform er at imødekomme en række af kravspecifikationer:  

1.3 Liste med krav  

Aktører 
Elev - Studerende 

Lærere - Studerende 

Admin - Platform 

Elev 

Skal kunne oprette bruger og logge ind.  

Skal kunne se oversigt over alle tilgængelige forelæsninger tilgængelig for deres studieretning.  

Skal kunne specificeres pr. Semester, dvs. alle de fag man har hvert semester. 

Skal kunne tilmelde sig en forelæsning.  

Skal kunne se tidspunkt og lokation for de tilbudte forelæsninger.  

Lærere 

Skal kunne oprette bruger og logge ind. 

Skal kunne oprette og slette forelæsninger.   

Skal kunne tilføje tidspunkt og lokationer for forelæsninger. 

Skal kunne logge på og se oversigt over alle de fag man underviser i. 

Skal kunne specificeres pr. semester.  

Skal kunne kontakte elever over mail eller telefon – se information om eleverne.  

Skal kunne tilføje og fjerne deltagere fra holdet. 

Admin– platform  

Skal kunne oprette sig, og logge ind som administrator. 

Skal kunne se overblik over alle fag der bliver undervist og antal elever på hvert fag.  

Skal kunne administrere alle brugere (lærere og elever) på platformen. 

Skal kunne modtage feedback fra både lærere og elever.  

Fremtid – tilbyde flere fag, fx Eksamensforberedelse, Valgfag, minikurser.  

Når de studerende benytter vores platform, har de muligheden for at oprette en bruger og derefter få muligheden for at vælge at oprette sig som enten lærer eller elev. Ved korrekt log-in vil de blive sendt videre til vores startside. På vores startside vil det igen være muligt at se de forskellige fag vi tilbyder, hjælp og generelle informationer på vores platform StudentTeach. De brugere, der opretter sig som elev, vil også blive præsenteret for en betalingsside hvor de kan betale for forelæsningerne. Dette gør det også attraktivt for lærerne.  

1.4  Klassediagram  

 

User 

Vores system deles op i en masterclass og to sidestående classes. Masterclassens første user er en såkaldt abstrakt klasse. Det vil sige, at der ikke findes nogen, der blot er brugere, men i stedet enten teacher, student eller admin. Det ses ved, at user står i skråskrift, men kunne i stedet være indrammet således <<User>>, med samme effekt. User er blot en overklasse, som underklasserne inheriter eller arver attributter og metoder/funktioner fra. Det vil sige at teacher, student og admin er child classes af user, og alle kan logge ind på deres bruger for eksempel. For at forbinde en parent og en child class bruges der ideelt set en anden pil, hvor hovedet ikke er udfyldt, som viser hvor en klasse arver noget fra. Altså skulle pilene her vende omvendt, men det bliver rettet inden næste version. 

Teacher  

Teacher arver attributter fra user-masterclassen, men har én unik attribut. Programmet skal nemlig kende deres studieretning, for at vide indenfor hvilke fag de kan oprette forelæsninger. Under metoderne er funktionerne for at oprette, opdatere og slette forelæsninger. De skal kunne få information om students og classrom og kunne tilføje og fjerne students fra de oprettede forelæsninger. 

Student  

Student arver ligeledes en del attributter fra overklassen user. Programmet skal dog kende deres studieretning, fag og semester for at kunne forbinde dem med de relevante forelæsninger. Vi er endnu ikke sikre på hvorvidt systemet skal indeholde betaling for forelæsninger eller det skal være gratis. Hvis vi dog vælger at implementere det, skal systemet også have kreditkort informationer fra eleverne. Derudover skal der være funktioner der tilmelder dem til hold, og samler deres informationer i et array, så det bliver nemt for teacher at finde de relevante informationer.  

Order  

Student har en underklasse kaldet order. Deres forhold kaldes composition, og skal forstås på den måde at order ikke kan eksistere, hvis ikke der er en student. Til at vise det, bruges den lukkede diamant pil. Her skal der være et ordre id, forelæsnings id og navn og så skal der kunne udregnes en pris for en eller flere forelæsninger inden man kan færdiggøre sin ordre. 

Courses 

Courses er forbundet med student, da de er associated. Courses eller fag er kun interessant for student, fordi det er til deres fag der laves forelæsninger. Teacher trækker informationer fra student klassen med informationStudent() funktionen. De er altså ikke afhængige af hinanden og er derfor blot forbundet med en linje. 

Admin  

Admin er vores styring over systemet. Admin skal kunne fjerne og tilføje students og teachers og trække information om courses og classrooms for at danne sig et overblik over alle forelæsninger der bliver holdt. 

Classroom  

Sidst har vi classroom som er en klasse over alle de lokaler der kan afholdes forelæsninger i. Man skal vide hvor mange der er plads til i lokalet (size), man skal vide lokationen, og så til klassen laves funktion avalability, for at se om rummet er ledigt i et givent tidsrum. Det kan teacher tjekke inden de opretter en forelæsning. 

Vi er endnu ikke sikre på hvorvidt forelæsningerne skal være gratis eller om lærerne skal have mulighed for at opkræve et beløb pr. Person. Det skal dog være en ordre underklasse, for at admin, kan holde styr på hvor mange der har tilmeldt sig de forskellige hold. Vi beholder dog funktionen calcPrice() under order indtil videre. 

 
https://studentcbs-my.sharepoint.com/:w:/g/personal/chan19af_student_cbs_dk/EZJSkbOtUbdLsjJd0HAIm7IBoC2Vn0GMM9PYMOesb-Pzfw?rtime=gUi9GalF10g
