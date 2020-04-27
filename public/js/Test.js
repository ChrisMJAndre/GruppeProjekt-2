

function deleteLecture(lectureId) {
    fetch("/lecture/" + lectureId, {
        method: "DELETE",
    })
        .then(() => {
            window.location.replace("/lectures");
        })
        .catch((err) => {
            console.log(err);
        });
}

// function joinLecture(lectureId) {
//     console.log(lectureId);

//     fetch("/lecture/", {
//         method: "POST",
//         body: JSON.stringify({ lectureId: lectureId }),

//     })
//         .then(() => {
//             // window.location.replace("/lectures");
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// }