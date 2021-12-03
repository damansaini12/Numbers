let trans = () => {
  console.log(document.documentElement);
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1000);
};


const fn = getRandomInt(1000); //first num
const op = getRandomInt(3); //operator
const sn = getRandomInt(11); //second num
var numbersCorrectCount = localStorage.getItem('numbersCorrectCount') || '0'; //numbers the user has gotten correct
const operators = ["plus", "minus", "times", "divide"];


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


const changeLang = (languageCode) => {

  localStorage.setItem('lang', languageCode);

  window.location.reload(false);
  console.console.log(languageCode);

};

function play() {

  var elmnt = document.getElementById("section2");
  elmnt.scrollIntoView();

  var lang = localStorage.getItem('lang') || 'en';
  console.log(lang);
  console.log(fn);

  var path = "";

  if (fn < 10) {
    path = "./audio/" + lang + "/0" + fn + ".mp3";

  } else {
    path = "audio/" + lang + "/" + fn + ".mp3";
  }

  console.log(path);

  const audio = new Audio(path);
  //
  // const path2 = "audio/" + lang + "/" + operators[op] + ".mp3";
  // const audio2 = new Audio(path2);
  //
  // const path3 = "audio/" + lang + "/" + sn + ".mp3";
  // const audio3 = new Audio(path3);

  audio.playbackRate = 0.90;

  window.setTimeout(() => {
    audio.play();
  }, 200);


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
}

function correct(id) {
  document.getElementById(id).style.color = "#50C76F";
  localStorage.setItem('numbersCorrectCount', ++numbersCorrectCount);

  //  document.getElementById("numbersCorrect").innerHTML = localStorage.getItem('numbersCorrectCount');
  console.log(localStorage.getItem('numbersCorrectCount'));
}

function wrong(id) {
  document.getElementById(id).style.color = "red";

}

function resetInputColorIncorrect(id) {
  document.getElementById(id).style.color = '';
  document.getElementById(id).value =
    document.getElementById(id).defaultValue = '';


}


function resetInputColorCorrect(id) {

  // window.location.reload(false);
  $.ajax({
  url: "index.html",
  context: document.body
}).done(function() {
  $( this ).addClass( "done" );
});

}

function showAnswer() // no ';' here
{
  document.getElementById("answer").innerHTML = fn + " = " + numberToWords(fn);
}

var numberToWords = function(num) {
  if (num === 0) return 'Zero'

  let finalString = [];

  [...numberToWordMap.keys()].reverse().map(key => {
    if (num >= key) {
      if (key >= 100) {
        const numberOfTimesKeyFitsNum = Math.floor(num / key);
        const number = memoize[numberOfTimesKeyFitsNum] ? memoize[numberOfTimesKeyFitsNum] : numberToWords(numberOfTimesKeyFitsNum);
        if (!memoize[numberOfTimesKeyFitsNum]) memoize[numberOfTimesKeyFitsNum] = number;

        finalString.push(number + ' ' + numberToWordMap.get(key) + ' ')
      } else {
        finalString.push(numberToWordMap.get(key) + ' ')
      }

      num = num % key;
    }
  });

  finalString = finalString.join('');

  return finalString.slice(0, finalString.length - 1);
};

let memoize = {};

let numberToWordMap = new Map();
numberToWordMap.set(1, 'One')
numberToWordMap.set(2, 'Two')
numberToWordMap.set(3, 'Three')
numberToWordMap.set(4, 'Four')
numberToWordMap.set(5, 'Five')
numberToWordMap.set(6, 'Six')
numberToWordMap.set(7, 'Seven')
numberToWordMap.set(8, 'Eight')
numberToWordMap.set(9, 'Nine')
numberToWordMap.set(10, 'Ten')
numberToWordMap.set(11, 'Eleven')
numberToWordMap.set(12, 'Twelve')
numberToWordMap.set(13, 'Thirteen')
numberToWordMap.set(14, 'Fourteen')
numberToWordMap.set(15, 'Fifteen')
numberToWordMap.set(16, 'Sixteen')
numberToWordMap.set(17, 'Seventeen')
numberToWordMap.set(18, 'Eighteen')
numberToWordMap.set(19, 'Nineteen')
numberToWordMap.set(20, 'Twenty')
numberToWordMap.set(30, 'Thirty')
numberToWordMap.set(40, 'Forty')
numberToWordMap.set(50, 'Fifty')
numberToWordMap.set(60, 'Sixty')
numberToWordMap.set(70, 'Seventy')
numberToWordMap.set(80, 'Eighty')
numberToWordMap.set(90, 'Ninety')
numberToWordMap.set(100, 'Hundred')
numberToWordMap.set(1000, 'Thousand')
numberToWordMap.set(1000000, 'Million')
numberToWordMap.set(1000000000, 'Billion')
