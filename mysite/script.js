const hamBurger = document.querySelector('.ham-burger')
const navbar = document.querySelector('.mob-navlist')
const allLines = document.querySelectorAll('.line')
const line = document.querySelector('.line')
const overlay = document.querySelector('.overlay')
let width
let num = 0

function hamburger() {

    hamBurger.addEventListener('click', () => {
        width = window.innerWidth
        console.log(width);

        allLines.forEach((thisLine) => {
            thisLine.style.transition = "all .5s linear"
        })
        if (num == 0) {
            allLines[0].classList.add('action-0')
            allLines[1].classList.add('action-1')
            allLines[2].classList.add('action-2')

            if (width < 800) {
                navbar.style.height = "350px"
                navbar.style.opacity = "1"
            } num++

        } else {
            allLines[0].classList.remove('action-0')
            allLines[1].classList.remove('action-1')
            allLines[2].classList.remove('action-2')

            if (width < 800) {
                navbar.style.height = "0px"
                navbar.style.opacity = "0"
            } num--

        }
    })
}
hamburger()



function renewPatch() {
    if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
        console.info("This page is reloaded");
        location.href = "index.html"
    } else {
        console.info("This page is not reloaded");
    }
}

renewPatch()

// function to Change Background of header on scroll
function handleScroll() {
    let btn = document.querySelector(".moveup")
    if (window.scrollY > 250) {
        console.log("ok");
        document.body.style.bckground = "#040616"
        btn.style.opacity = "1"
    } else {
        btn.style.opacity = "0"
    }
}
window.addEventListener('scroll', handleScroll);