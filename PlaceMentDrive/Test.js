var date = new Date();


document.getElementById("current_date").innerHTML = date.toDateString();

var count = 0;
function addWater() {
    count++;
    document.getElementById("drink_water_progress").innerHTML = `${count} glasses`;

}
var studyTime = 0;

function addStudyTime() {
    studyTime += Number(15);
    document.getElementById("study_time_progess").innerHTML = `${studyTime} minutes`;
}

var excerciseCount = 0;

function addWorkOut() {

    excerciseCount++
    document.getElementById("excercise_progress").innerHTML = `${excerciseCount} workout`
}

function resetToday() {
    count = 0;
    studyTime = 0;
    excerciseCount = 0;
    document.getElementById("excercise_progress").innerHTML = count;
    document.getElementById("drink_water_progress").innerHTML = studyTime;
    document.getElementById("study_time_progess").innerHTML = excerciseCount;

}

var start = 0;

function rangeButton() {
    if (start == 0) {
        start++;
        var innerDiv = document.getElementById("inner_circle");
        innerDiv.style.transform = "translate(100%, 0vw)";
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
    else {

        start=0;
        var innerDiv = document.getElementById("inner_circle");
        innerDiv.style.transform = "translate(0vw, 0vw)";
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
}