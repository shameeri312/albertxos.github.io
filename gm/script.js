const num = Math.trunc(Math.random() * 10)
console.log(num);
let score = 0;
let tries = 0
document.querySelector(".btn").addEventListener("click", function () {

    const guess = document.querySelector(".guess").value

    if (guess == num) {
        score++;
        document.querySelector(".result").textContent = "Your answer is correct"
        // document.querySelector(".score").textContent = ` answer ${num}`
        document.querySelector(".val").textContent = score

        document.querySelector(".body").style.backgroundColor = "crimson"
        document.querySelector("h1").style.color = "crimson"
        document.querySelector(".image").style.display = "block"
        document.querySelector(".collect").style.display = "block"

    }
    else if (guess > num) {

        score--;
        document.querySelector(".result").textContent = ` The number is less than 
             ${guess}`
        // document.querySelector(".score").textContent = "(WRONG NUMBER)"
        document.querySelector(".val").textContent = score

        document.querySelector(".body").style.backgroundColor = "goldenrod"
        document.querySelector("h1").style.color = "goldenrod"


    }
    else if (guess < num) {

        score--;
        document.querySelector(".result").textContent = `The number is greater than  ${guess}`
        // document.querySelector(".score").textContent = "(WRONG NUMBER)"
        document.querySelector(".val").textContent = score

        document.querySelector(".body").style.backgroundColor = "goldenrod"
        document.querySelector("h1").style.color = "goldenrod"



    }

}

)