module.exports = (sequelize, type) => {
    return sequelize.define('lecture', {
            id: {

            }

        })
<!-- Dropdown lists -->
<p>Study program</p>
<select id="studyProgram">
    <option selected disabled>Select study program</option>
<option value="HA(it.)">HA(it.)</option>
    <option value="HA(jur.)">HA(jur.)</option>
    <option value="HA(fil.)">HA(fil.)</option>
    <option value="HA(mat.)">HA(mat.)</option>
    <option value="HA(pro.)">HA pro.</option>
<option value="HA(kom.)">HA(kom.)</option>
    <option value="HA(psyk.)">HA(psyk.)</option>
    </select>
    <br />

    <p>Course</p>
    <select id="course">
    <option selected disabled>Select course</option>
<option value="BIS"
    >Introduction to Informations Systems and Informations Systems
Development</option
>
<option value="VØS">Virksomhedens økonomiske styring 1</option>
<option value="PRO"
    >Programmering og udvikling af små systemer samt databaser</option
>
<option value="ORG"
    >Indføring i organisationers opbygning og funktion</option
>
</select>
<br />

<p>Classroom</p>
<select id="chooseClassroom">
    <option>Select classroom</option>
</select>
