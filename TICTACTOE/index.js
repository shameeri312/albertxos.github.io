var button1 = document.querySelector(".btn1");
button1.addEventListener("click", clicks1);
var button2 = document.querySelector(".btn2");
button2.addEventListener("click", clicks2);
var button3 = document.querySelector(".btn3");
button3.addEventListener("click", clicks3);
var button4 = document.querySelector(".btn4");
button4.addEventListener("click", clicks4);
var button5 = document.querySelector(".btn5");
button5.addEventListener("click", clicks5);
var button6 = document.querySelector(".btn6");
button6.addEventListener("click", clicks6);
var button7 = document.querySelector(".btn7");
button7.addEventListener("click", clicks7);
var button8 = document.querySelector(".btn8");
button8.addEventListener("click", clicks8);
var button9 = document.querySelector(".btn9");
button9.addEventListener("click", clicks9);

//! setting the values for the buttons
var tries = 0;
var valueBtn;
var color;
function valueOfBtn() {
    if (tries % 2 === 0) {
        valueBtn = "X";
        color = "red";
        textColor = "yellow";

    } else {
        valueBtn = "O";
        color = "yellow";
        textColor = "red";
    }
}


//*----------------------------------------------------------------
function clicks1() {
    valueOfBtn();
    button1.value = valueBtn;
    button1.style.backgroundColor = color;
    button1.style.color = textColor;
    button1.style.pointerEvents = "none";
    gameLogic();
    tries++;
    console.log(tries);

}
function clicks2() {
    valueOfBtn();
    button2.value = valueBtn;
    button2.style.backgroundColor = color;
    button2.style.color = textColor;
    button2.style.pointerEvents = "none";
    gameLogic();
    tries++;
    console.log(tries);

}
function clicks3() {
    valueOfBtn();
    button3.value = valueBtn;
    button3.style.backgroundColor = color;
    button3.style.color = textColor;
    button3.style.pointerEvents = "none";
    gameLogic();
    tries++;
    console.log(tries);

}
function clicks4() {
    valueOfBtn();
    button4.value = valueBtn;
    button4.style.backgroundColor = color;
    button4.style.color = textColor;
    button4.style.pointerEvents = "none";
    gameLogic();
    tries++;
    console.log(tries);

}
function clicks5() {
    valueOfBtn();
    button5.value = valueBtn;
    button5.style.backgroundColor = color;
    button5.style.color = textColor;
    button5.style.pointerEvents = "none";
    gameLogic();
    tries++;
    console.log(tries);

}
function clicks6() {
    valueOfBtn();
    button6.value = valueBtn;
    button6.style.backgroundColor = color;
    button6.style.color = textColor;
    button6.style.pointerEvents = "none";
    gameLogic();
    tries++;
    console.log(tries);

}
function clicks7() {
    valueOfBtn();
    button7.value = valueBtn;
    button7.style.backgroundColor = color;
    button7.style.color = textColor;
    button7.style.pointerEvents = "none";
    gameLogic();
    tries++;
    console.log(tries);

}
function clicks8() {
    valueOfBtn();
    button8.value = valueBtn;
    button8.style.backgroundColor = color;
    button8.style.color = textColor;
    button8.style.pointerEvents = "none";
    gameLogic();
    tries++;
    console.log(tries);

}
function clicks9() {
    valueOfBtn();
    button9.value = valueBtn;
    button9.style.backgroundColor = color;
    button9.style.color = textColor;
    button9.style.pointerEvents = "none";
    gameLogic();
    tries++;
    console.log(tries);

}

//*----------------------------------------------------------------
var playerA = document.getElementById("nameA")
var playerB = document.getElementById("nameB")
var winner;
var win = false;
document.getElementById("submit").addEventListener("click", function call() {
    if (playerB.value != "" && playerA.value != "") {
        document.querySelector(".blocks").style.visibility = "visible";
        gameLogic();
    } else {
        alert("Please fill in both fields");
    }

});

function gameLogic() {
    //. logic for rows

    if (button1.value === button2.value && button2.value === button3.value) {
        if (button1.value !== "" && button2.value !== "" && button3.value !== "") {
            if (button1.value === "X") {
                winner = playerA.value;
            } else {
                winner = value;
            }
            win = true;
            alert(winner + " won!!");

            playAgain();
        }
    }

    if (button4.value === button5.value && button5.value === button6.value) {
        if (button4.value !== "" && button5.value !== "" && button6.value !== "") {
            if (button4.value === "X") {
                winner = playerA.value;
            } else {
                winner = playerB.value;
            }
            win = true;
            alert(winner + " won!!");

            playAgain();
        }
    }

    if (button7.value === button8.value && button8.value === button9.value) {
        if (button7.value !== "" && button8.value !== "" && button9.value !== "") {
            if (button7.value === "X") {
                winner = playerA.value;
            } else {
                winner = playerB.value;
            }
            win = true;
            alert(winner + " won!!");

            playAgain();
        }
    }

    // logic for columns

    if (button1.value === button4.value && button4.value === button7.value) {
        if (button1.value !== "" && button4.value !== "" && button7.value !== "") {
            if (button1.value === "X") {
                winner = playerA.value;
            } else {
                winner = value;
            }
            win = true;
            alert(winner + " won!!");

            playAgain();
        }
    }

    if (button2.value === button5.value && button5.value === button8.value) {
        if (button2.value !== "" && button5.value !== "" && button8.value !== "") {
            if (button2.value === "X") {
                winner = playerA.value;
            } else {
                winner = playerB.value;
            }
            win = true;
            alert(winner + " won!!");

            playAgain();
        }
    }

    if (button3.value === button6.value && button6.value === button9.value) {
        if (button3.value !== "" && button6.value !== "" && button9.value !== "") {
            if (button3.value === "X") {
                winner = playerA.value;
            } else {
                winner = playerB.value;
            }
            win = true;
            alert(winner + " won!!");

            playAgain();
        }
    }

    // logic for diagonals

    if (button1.value === button5.value && button5.value === button9.value) {
        if (button1.value !== "" && button5.value !== "" && button9.value !== "") {
            if (button1.value === "X") {
                winner = playerA.value;
            } else {
                winner = value;
            }
            win = true;
            alert(winner + " won!!");

            playAgain();
        }
    }

    if (button3.value === button5.value && button5.value === button7.value) {
        if (button3.value !== "" && button5.value !== "" && button7.value !== "") {
            if (button3.value === "X") {
                winner = playerA.value;
            } else {
                winner = playerB.value;
            }
            alert(winner + " won!!");
            win = true;
            alert(winner + " won!!");

            playAgain();
        }
    }
}
function playAgain() {
    var againButton;
    againButton = document.querySelector(".playagain");
    againButton.style.visibility = "visible";
    againButton.addEventListener("click", function () {
        location.reload();
    })

}