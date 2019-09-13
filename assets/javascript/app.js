var number = 11; //set initial timer
var intervalId;

function runClock() { //clock functions
    number = 10;
    intervalId = setInterval(decrement, 1000);
}
function decrement() {
    number--;
    $("#timer").html(number);

    if (number === 0) {
        stopClock();
        alert("Time Up!");
        runGame(i += 1);
    }
}

function stopClock() {
    clearInterval(intervalId);
}


//questions list
var qs = [
    { question: "Who is the President of Apple Computers?", answer: ["Steve Jobs", "Tim Apple", "Bill Gates", "Tim Cook"], s: "two" },
    { question: "The answer is ZERO", answer: ["ZERO", "1", "2", "3"], s: "one" },
    { question: "The answer is FOUR", answer: ["0", "1", "2", "FOUR"], s: "four" },
    { question: "", answer: ["0", "1", "2", "3"], s: "" },
    { question: "", answer: ["0", "1", "2", "3"], s: "" }
]


var runGame = function (i) {
    runClock();
    $("#question").html(qs[i].question);
    $("#btn1").html(qs[i].answer[0]);
    $("#btn2").html(qs[i].answer[1]);
    $("#btn3").html(qs[i].answer[2]);
    $("#btn4").html(qs[i].answer[3]);
    solution = qs[i].s;
    console.log("You are on question: " + i);
}

var i = 0;
var selection;
var points = 0;

var score = function () {
    points += 1;
    $("#yourScore").html(points);

}

var checkWin = function () {
    // give point, stop Timer, next Q
    if (selection === solution) {
        score();
        console.log("Right answer.");
        runGame(i += 1);

    }
    else {
        console.log("Wrong answer.");
        runGame(i += 1);
        // move on with game
    }
}

//button functions
$("#btn1").click(function () {
    selection = "one";
});
$("#btn2").click(function () {
    selection = "two";
});
$("#btn3").click(function () {
    selection = "three";
});
$("#btn4").click(function () {
    selection = "four";
});

$(".btn").click(function () {
    checkWin();
    stopClock();
});


//starts game and hides Start button after click
$("#btnStart").click(function () {
runGame(i);
    var x = document.getElementById("btnStart");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

});


