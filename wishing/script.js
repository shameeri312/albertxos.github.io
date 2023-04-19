var a = 0;
var image = document.getElementById("img");


function autoSlide() {
    if (a == 1) {
        image.src = "./media/couple2.png"
    }
    if (a == 2) {
        image.src = "./media/couple3.png"
    }
    if (a == 3) {
        image.src = "./media/couple4.png"
        a = 1;
    }

    a++;
}

setInterval("autoSlide()", 1000);