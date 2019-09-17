var number = 26; //set initial timer
var intervalId;

function runClock() { //clock functions
    number = 26;
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
    { question: "Who is the CEO of Apple Computers?", answer: ["Steve Jobs", "Tim Apple", "Bill Gates", "Tim Cook"], s: "two" },
    { question: "What does the United States plan on doing in space?", answer: ["Explore it", "Colonize it", "Win at it", "Weaponize it"], s: "three" },
    { question: "Who is the President of the U.S. Virgin Islands?", answer: ["The U.S. President", "Donald J. Trump", "#45", "Someone else"], s: "four" },
    { question: "What is a sandwich consisting of cooked patties of ground beef, placed inside a sliced bread bun?", answer: ["Slider", "Hamberder", "Italian Beef", "Jibarito"], s: "two" },
    { question: "It's freezing and snowing in NYC, what do we need?", answer: ["Global warming", "A jacket", "Heated bus stops", "Hot Hands&#0174"], s: "one" }
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
var gameOver = 0;


var score = function () {
    points += 1;
    $("#yourScore").html("Score: " + points);

}
var checkWin = function () {
    if (selection === solution) {
        score();
        document.getElementById('audio_yes').play();

        console.log("Right answer.");

    }
    else {
        console.log("Wrong answer.");
        document.getElementById('audio_no').play();

        // move on with game
    }

    gameOver += 1;
    checkGameOver();

}

var checkGameOver = function () {
    if (gameOver == 5) {
        stopClock();
        alert("You answered " + points + " out of 5 correctly. You are NOT a geniuous, sorry!");
        console.log("END GAME.");
    }
    else {
        runGame(i += 1);
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


