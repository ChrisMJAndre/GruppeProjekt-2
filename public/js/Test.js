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
