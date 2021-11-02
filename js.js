const fn = getRandomInt(11); //first num
const op = ""; //operator
const sn = 2; //second num

console.log(fn);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function play() {
    const path = "audio/eng-us/" + fn + ".mp3";
    const audio = new Audio(path);
    audio.play();

}

function reveal() {

    var a = document.getElementById("firstNum").value;

    if (parseInt(a) === fn) {
        correct("firstNum");

    } else {

        wrong("firstNum");

        setTimeout(() => {
            resetInputColor("firstNum");
            }, 2000);

    }
}

function correct(id){
    document.getElementById(id).style.background = "#50C76F";
    document.getElementById("revealBtn").innerHTML = "next";

}

function wrong(id){
    document.getElementById(id).style.color = "red";

}
function resetInputColor(id){
    document.getElementById(id).style.color = "#037889";
    document.getElementById(id).value =
        document.getElementById(id).defaultValue = '';

}




let navExpand = document.querySelector(".nav__expand");
let nav = document.querySelector(".nav");
let navListItem = document.querySelectorAll(".nav__listitem");

navExpand.addEventListener("click", () => {
    nav.classList.toggle("nav-closed");
});

navListItem.forEach((link) => link.addEventListener("click", listActive));

function listActive() {
    navListItem.forEach((link) => link.classList.remove("nav__listitem-active"));
    this.classList.add("nav__listitem-active");
}
