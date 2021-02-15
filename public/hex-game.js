var btn = document.querySelector(".btn");
var score = document.querySelector(".score");
var x = document.querySelector(".x");
var input = document.querySelector(".given");
var givenTitle = document.querySelector(".givenTitle");
var emoji = document.querySelector(".emoji");
var p1 = document.querySelector(".p1");
var p2 = document.querySelector(".p2");
var p3 = document.querySelector(".p3");
var p4 = document.querySelector(".p4");
var p5 = document.querySelector(".p5");
var p6 = document.querySelector(".p6");

var random = Math.floor(Math.random() * 10);
console.log(random);

btn.addEventListener("click", hex);
function hex() {
  var guessesLeft = 3;

  //   1-----------------------1--------------------------1---------------------------1

  p1.addEventListener("click", one1);
  function one1() {
    if (random == 1 || random == 6) {
      // p1.innerHTML = "Congatulations";
      p1.innerText = String.fromCodePoint(0x1f603, 0x1f60d);
      score.style.color = "green";
      p1.disabled = true;
      p2.disabled = true;
      p3.disabled = true;
      p4.disabled = true;
      p5.disabled = true;
      p6.disabled = true;
    }
    if (random != 1 && random != 6) {
      p1.innerHTML = String.fromCodePoint(0x1f612);
      p1.style.fontSize = "30px";
      p1.disabled = true;
      // p1.style.opacity = "0.1";
      guessesLeft -= 1;
    }
    if (guessesLeft == 0) {
      p1.disabled = true;
      p2.disabled = true;
      p3.disabled = true;
      p4.disabled = true;
      p5.disabled = true;
      p6.disabled = true;
      x.style.color = "red";
    }
    if (guessesLeft == 0 && (random == 2 || random == 7)) {
      p2.innerHTML = "Answer";
      p2.style.color = "white";
    }
    if (guessesLeft == 0 && (random == 3 || random == 0)) {
      p3.innerHTML = "Answer";
      p3.style.color = "white";
    }
    if (guessesLeft == 0 && random == 5) {
      p1.innerHTML = "Answer";
      p1.style.color = "white";
    }
    if (guessesLeft == 0 && random == 8) {
      p5.innerHTML = "Answer";
      p5.style.color = "white";
    }
    if (guessesLeft == 0 && (random == 4 || random == 9)) {
      p6.innerHTML = "Answer";
      p6.style.color = "white";
    }
  }

  // //   2----------------------2---------------------------2---------------------------2

  p2.addEventListener("click", one2);
  function one2() {
    if (random == 2 || random == 7) {
      // p2.innerHTML = "Congatulations";
      p2.innerText = String.fromCodePoint(0x1f60d, 0x1f618);
      score.style.color = "green";
      p1.disabled = true;
      p2.disabled = true;
      p3.disabled = true;
      p4.disabled = true;
      p5.disabled = true;
      p6.disabled = true;
    }
    if (random != 2 && random != 7) {
      p2.disabled = true;
      p2.innerHTML = String.fromCodePoint(0x1f614);
      // p2.style.opacity = "0.1";
      guessesLeft -= 1;
    }
    if (guessesLeft == 0) {
      p1.disabled = true;
      p2.disabled = true;
      p3.disabled = true;
      p4.disabled = true;
      p5.disabled = true;
      p6.disabled = true;
      x.style.color = "red";
    }
    if (guessesLeft == 0 && (random == 1 || random == 6)) {
      p1.innerHTML = "Answer";
      p1.style.color = "white";
    }
    if (guessesLeft == 0 && (random == 3 || random == 0)) {
      p3.innerHTML = "Answer";
      p3.style.color = "white";
    }
    if (guessesLeft == 0 && random == 5) {
      p4.innerHTML = "Answer";
      p4.style.color = "white";
    }
    if (guessesLeft == 0 && random == 8) {
      p5.innerHTML = "Answer";
      p5.style.color = "white";
    }
    if (guessesLeft == 0 && (random == 4 || random == 9)) {
      p6.innerHTML = "Answer";
      p6.style.color = "white";
    }
  }

  // //   3-----------------------3---------------------3--------------------------------3

  p3.addEventListener("click", one3);
  function one3() {
    if (random == 3 || random == 0) {
      // p3.innerHTML = "Congatulations";
      p3.innerText = String.fromCodePoint(0x1f970, 0x1f609);
      score.style.color = "green";
      p1.disabled = true;
      p2.disabled = true;
      p3.disabled = true;
      p4.disabled = true;
      p5.disabled = true;
      p6.disabled = true;
    }
    if (random != 3 && random != 0) {
      p3.disabled = true;
      p3.innerHTML = String.fromCodePoint(0x1f925);
      // p2.style.opacity = "0.1";
      guessesLeft -= 1;
    }
    if (guessesLeft == 0) {
      p1.disabled = true;
      p2.disabled = true;
      p3.disabled = true;
      p4.disabled = true;
      p5.disabled = true;
      p6.disabled = true;
      x.style.color = "red";
    }
    if (guessesLeft == 0 && (random == 1 || random == 6)) {
      p1.innerHTML = "Answer";
      p1.style.color = "white";
    }
    if (guessesLeft == 0 && (random == 2 || random == 7)) {
      p2.innerHTML = "Answer";
      p2.style.color = "white";
    }
    if (guessesLeft == 0 && random == 5) {
      p4.innerHTML = "Answer";
      p4.style.color = "white";
    }
    if (guessesLeft == 0 && random == 8) {
      p5.innerHTML = "Answer";
      p5.style.color = "white";
    }
    if (guessesLeft == 0 && (random == 4 || random == 9)) {
      p6.innerHTML = "Answer";
      p6.style.color = "white";
    }
  }

  // //   4--------------------4---------------------4-----------------------------------4

  p4.addEventListener("click", one4);
  function one4() {
    if (random == 5) {
      // p4.innerHTML = "Congatulations";
      p4.innerText = String.fromCodePoint(0x1f60a, 0x1f970);
      score.style.color = "green";
      p1.disabled = true;
      p2.disabled = true;
      p3.disabled = true;
      p4.disabled = true;
      p5.disabled = true;
      p6.disabled = true;
    }
    if (random != 5) {
      p4.disabled = true;
      p4.innerHTML = String.fromCodePoint(0x1f974);
      // p4.style.opacity = "0.1";
      guessesLeft -= 1;
    }
    if (guessesLeft == 0) {
      p1.disabled = true;
      p2.disabled = true;
      p3.disabled = true;
      p4.disabled = true;
      p5.disabled = true;
      p6.disabled = true;
      x.style.color = "red";
    }
    if (guessesLeft == 0 && (random == 1 || random == 6)) {
      p1.innerHTML = "Answer";
      p1.style.color = "white";
    }
    if (guessesLeft == 0 && (random == 2 || random == 7)) {
      p2.innerHTML = "Answer";
      p2.style.color = "white";
    }
    if (guessesLeft == 0 && (random == 3 || random == 0)) {
      p3.innerHTML = "Answer";
      p3.style.color = "white";
    }
    if (guessesLeft == 0 && random == 8) {
      p5.innerHTML = "Answer";
      p5.style.color = "white";
    }
    if (guessesLeft == 0 && (random == 4 || random == 9)) {
      p6.innerHTML = "Answer";
      p6.style.color = "white";
    }
  }

  // //   5---------------------5------------------------5------------------------------5

  p5.addEventListener("click", one5);
  function one5() {
    if (random == 8) {
      // p5.innerHTML = "Congatulations";
      p5.innerText = String.fromCodePoint(0x1f929, 0x1f618);
      score.style.color = "green";
      p1.disabled = true;
      p2.disabled = true;
      p3.disabled = true;
      p4.disabled = true;
      p5.disabled = true;
      p6.disabled = true;
    }
    if (random != 8) {
      p5.disabled = true;
      p5.innerHTML = String.fromCodePoint(0x1f635);
      // p5.style.opacity = "0.1";
      guessesLeft -= 1;
    }
    if (guessesLeft == 0) {
      p1.disabled = true;
      p2.disabled = true;
      p3.disabled = true;
      p4.disabled = true;
      p5.disabled = true;
      p6.disabled = true;
      x.style.color = "red";
    }
    if (guessesLeft == 0 && (random == 1 || random == 6)) {
      p1.innerHTML = "Answer";
      p1.style.color = "white";
    }
    if (guessesLeft == 0 && (random == 2 || random == 7)) {
      p2.innerHTML = "Answer";
      p2.style.color = "white";
    }
    if (guessesLeft == 0 && (random == 3 || random == 0)) {
      p3.innerHTML = "Answer";
      p3.style.color = "white";
    }
    if (guessesLeft == 0 && random == 5) {
      p4.innerHTML = "Answer";
      p4.style.color = "white";
    }
    if (guessesLeft == 0 && (random == 4 || random == 9)) {
      p6.innerHTML = "Answer";
      p6.style.color = "white";
    }
  }

  // //   6-------------------------------6-----------------6----------------------------6

  p6.addEventListener("click", one6);
  function one6() {
    if (random == 9 || random == 4) {
      // p6.innerHTML = "Congatulations";
      p6.innerText = String.fromCodePoint(0x1f970, 0x1f617);
      score.style.color = "green";
      p1.disabled = true;
      p2.disabled = true;
      p3.disabled = true;
      p4.disabled = true;
      p5.disabled = true;
      p6.disabled = true;
    }
    if (random != 9 && random != 4) {
      p6.disabled = true;
      p6.innerHTML = String.fromCodePoint(0x1f61f);
      // p6.style.opacity = "0.1";
      guessesLeft -= 1;
    }
    if (guessesLeft == 0) {
      p1.disabled = true;
      p2.disabled = true;
      p3.disabled = true;
      p4.disabled = true;
      p5.disabled = true;
      p6.disabled = true;
      x.style.color = "red";
    }
    if (guessesLeft == 0 && (random == 1 || random == 6)) {
      p1.innerHTML = "Answer";
      p1.style.color = "white";
    }
    if (guessesLeft == 0 && (random == 2 || random == 7)) {
      p2.innerHTML = "Answer";
      p2.style.color = "white";
    }
    if (guessesLeft == 0 && (random == 3 || random == 0)) {
      p3.innerHTML = "Answer";
      p3.style.color = "white";
    }
    if (guessesLeft == 0 && random == 5) {
      p4.innerHTML = "Answer";
      p4.style.color = "white";
    }
    if (guessesLeft == 0 && random == 8) {
      p5.innerHTML = "Answer";
      p5.style.color = "white";
    }
  }

  // //   ----------------------------------------------------------------------------

  if (random == 1) {
    // input.innerHTML = "red";
    input.innerHTML = "#eb3434";
    givenTitle.style.color = "yellow";
    p1.style.background = "red";
    p2.style.background = "purple";
    p3.style.background = "blue";
    p4.style.background = "orange";
    p5.style.background = "green";
    p6.style.background = "yellow";
  }

  if (random == 2) {
    // input.innerHTML = "yellow";
    input.innerHTML = "#ebeb34";
    givenTitle.style.color = "yellow";
    p1.style.background = "red";
    p2.style.background = "yellow";
    p3.style.background = "green";
    p4.style.background = "blue";
    p5.style.background = "orange";
    p6.style.background = "purple";
  }

  if (random == 3) {
    // input.innerHTML = "green";
    input.innerHTML = "#1b7016";
    givenTitle.style.color = "yellow";
    p1.style.background = "blue";
    p2.style.background = "red";
    p3.style.background = "green";
    p4.style.background = "purple";
    p5.style.background = "orange";
    p6.style.background = "yellow";
  }
  if (random == 4) {
    // input.innerHTML = "purple";
    input.innerHTML = "#671b6b";
    givenTitle.style.color = "yellow";
    p1.style.background = "yellow";
    p2.style.background = "green";
    p3.style.background = "red";
    p4.style.background = "blue";
    p5.style.background = "orange";
    p6.style.background = "purple";
  }
  if (random == 5) {
    // input.innerHTML = "orange";
    input.innerHTML = "#ebb734";
    givenTitle.style.color = "yellow";
    p1.style.background = "purple";
    p2.style.background = "green";
    p3.style.background = "yellow";
    p4.style.background = "orange";
    p5.style.background = "red";
    p6.style.background = "blue";
  }
  if (random == 6) {
    // input.innerHTML = "green";
    input.innerHTML = "#1b7016";
    givenTitle.style.color = "yellow";
    p1.style.background = "green";
    p2.style.background = "purple";
    p3.style.background = "red";
    p4.style.background = "blue";
    p5.style.background = "yellow";
    p6.style.background = "orange";
  }
  if (random == 7) {
    // input.innerHTML = "red";
    input.innerHTML = "#eb3434";
    givenTitle.style.color = "yellow";
    p1.style.background = "orange";
    p2.style.background = "red";
    p3.style.background = "yellow";
    p4.style.background = "green";
    p5.style.background = "purple";
    p6.style.background = "blue";
  }
  if (random == 8) {
    // input.innerHTML = "blue";
    input.innerHTML = "#0010f7";
    givenTitle.style.color = "yellow";
    p1.style.background = "green";
    p2.style.background = "yellow";
    p3.style.background = "orange";
    p4.style.background = "red";
    p5.style.background = "blue";
    p6.style.background = "purple";
  }

  if (random == 9) {
    // input.innerHTML = "orange";
    input.innerHTML = "#ebb734";
    givenTitle.style.color = "yellow";
    p1.style.background = "yellow";
    p2.style.background = "red";
    p3.style.background = "purple";
    p4.style.background = "green";
    p5.style.background = "blue";
    p6.style.background = "orange";
  }
  if (random == 0) {
    // input.innerHTML = "red";
    input.innerHTML = "#eb3434";
    givenTitle.style.color = "yellow";
    p1.style.background = "yellow";
    p2.style.background = "purple";
    p3.style.background = "red";
    p4.style.background = "green";
    p5.style.background = "orange";
    p6.style.background = "blue";
  }
}
