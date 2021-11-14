// var name = prompt("Enter your name", "User");
//
// document.getElementById("name").innerHTML = name;



let trans = () => {
    console.log(document.documentElement);
    document.documentElement.classList.add("transition");
    window.setTimeout(() => {
        document.documentElement.classList.remove("transition");
    }, 1000);
};


const fn = getRandomInt(24); //first num

const op = getRandomInt(3); //operator
const sn = getRandomInt(11); //second num
const operators = ["plus", "minus", "times", "divide"];


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function play() {

var lang = document.documentElement.lang;
console.log(lang);

console.log(fn);
    const path = "audio/" + lang + "/" + fn + ".mp3";
    const audio = new Audio(path);
    //
    // const path2 = "audio/" + lang + "/" + operators[op] + ".mp3";
    // const audio2 = new Audio(path2);
    //
    // const path3 = "audio/" + lang + "/" + sn + ".mp3";
    // const audio3 = new Audio(path3);

    audio.play();
    // setTimeout(() => {
    //     audio2.play();
    // }, 1500);
    //
    // setTimeout(() => {
    //     audio3.play();
    // }, 2500);



    // document.getElementById("ans").innerHTML = fn.toString() + operators[op] + sn.toString();

}

function reveal() {
    var count = 0;
    var operatorCheck;

    var a = document.getElementById("firstNum").value;
    // var b = document.getElementById("operator").value;
    // var c = document.getElementById("secondNum").value;
    // var d = document.getElementById("total").value;
    //
    // console.log(b);
    // if (b === "-" && operators[op] === "minus") operatorCheck = "-";
    // else if (b === "+" && operators[op] === "plus") operatorCheck = "+";
    // else if (b === "*" && operators[op] === "times") operatorCheck = "*";
    // else if (b === "/" && operators[op] === "divide") operatorCheck = "/";
    //
    // var total = a.toString()+b.toString()+c.toString();
    // console.log("Total: " + eval(total));
    //
    //
    // total = eval(total);

    if (parseInt(a) === fn) {
        correct("firstNum");

        setTimeout(() => {
          resetInputColorCorrect("firstNum");
            }, 1000);

        count++;

    } else {

        wrong("firstNum");

        setTimeout(() => {
            resetInputColorIncorrect("firstNum");
        }, 750);

    }
    //
    // if (b === operatorCheck) {
    //     correct("operator");
    //
    //     count++;
    //
    // } else {
    //
    //     wrong("operator");
    //
    //     setTimeout(() => {
    //         resetInputColor("operator");
    //     }, 750);
    //
    // }
    //
    // if (parseInt(c) === sn) {
    //     correct("secondNum");
    //
    //     count++;
    //
    // } else {
    //
    //     wrong("secondNum");
    //
    //     setTimeout(() => {
    //         resetInputColor("secondNum");
    //     }, 750);
    //
    // }
    //
    // if (parseInt(d) === total) {
    //     correct("total");
    //
    //     count++;
    //
    //
    //
    // } else {
    //
    //     wrong("total");
    //
    //     setTimeout(() => {
    //         resetInputColor("total");
    //     }, 750);
    //
    // }
    //
    if (count === 1){
        setTimeout(() => {
            window.location.reload(false);
        }, 1000);

    }
}

function correct(id) {
    document.getElementById(id).style.color = "#50C76F";

}

function wrong(id) {
    document.getElementById(id).style.color = "red";

}

function resetInputColorIncorrect(id) {
    document.getElementById(id).style.color = "#FFF";
    document.getElementById(id).value =
        document.getElementById(id).defaultValue = '';

}

function resetInputColorCorrect(id) {
    document.getElementById(id).style.color = "#FFF";
    document.getElementById(id).value =
        document.getElementById(id).defaultValue = '';

        window.location.reload(false);

}
