let num_0, num_1
let num_one = document.querySelector('.numOne')
let num_two = document.querySelector('.numTwo')
let ansDis = document.querySelector('.ans')
let check = document.getElementById("check")
let next = document.getElementById("next")
let userAns = document.getElementById("answer")
let anwser

function newNumber() {
    num_0 = Math.floor(Math.random() * 15) + 1
    num_1 = Math.floor(Math.random() * 10) + 1
    num_0 = Number.parseInt(num_0)
    num_1 = Number.parseInt(num_1)

    anwser = num_0 * num_1

    num_one.innerHTML = num_0
    num_two.innerHTML = num_1
}

check.addEventListener("click", () => {
    console.log(userAns.value, anwser);
    if (userAns.value == anwser) {
        document.body.style.background = "crimson"
        ansDis.innerHTML = anwser
    } else {
        document.body.style.background = "orange"
        ansDis.innerHTML = "!"
    }
})


next.addEventListener("click", () => {
    newNumber()
    document.body.style.background = "white"
    userAns.value = ""
    ansDis.innerHTML = ""
})

