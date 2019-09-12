var selection = false;
var solution = false; //temp
var points;

var checkWin = function () {
    // give point, stop Timer, next Q
    if (selection === solution) {
        points++;
        console.log("Right answer.");

    }
    else {
        console.log("Wrong answer.");
        // move on with game
    }
}

//button functions
$("#btn1").click(function () {
    selection = true;
    console.log(selection);
});
$("#btn2").click(function () {
    selection = true;
});
$("#btn3").click(function () {
    selection = true;
});
$("#btn4").click(function () {
    selection = true;
});

$(".btn").click(function () {
    checkWin();
});