let id
let a = 0
let score = 0
let highScore = 0
let game
let oldScore = localStorage.getItem("Score")
let board = document.querySelector('.board')
let scoreDisplay = document.querySelector('.score')
let highScoreDisplay = document.querySelector('.high-score')
let timeDisplay = document.querySelector('.time')
let cursor = document.querySelector('.cursor')
let btn = document.querySelector('button')
highScoreDisplay.innerHTML = oldScore

// start the game
btn.addEventListener('click', () => {
	start()
	console.log("a");
	btn.style.display = "none"
	document.body.style.cursor = "none"
})

function start() {
	//play whistle
	playMusic("./start.mp3")
	// start the game
	startGame()
	// div position with cursor position
	cursorControl()
}

//  to play the music
function playMusic(music) {
	var audio = document.createElement('audio');
	document.body.appendChild(audio);
	audio.setAttribute('src', music);
	audio.play();
}

//  to control basket with cursor position
function cursorControl() {
	document.addEventListener('mousemove', (e) => {
		let x = e.clientX
		let y = e.clientY
		cursor.style.left = x + 'px'
		cursor.style.top = y + 'px'
	})
}

function setBoard() {
	let ball = document.createElement('div')
	let left = Math.floor(Math.random() * 80)
	ball.style.left = left + "%"
	board.appendChild(ball)
	a++
	timeDisplay.innerHTML = a
	ball.addEventListener('mouseover', gameLogic)
	ball.style.animationDuration = "2s"
}

function theEnd(a, score) {
	return (a - score)
}

function startGame() {
	id = setInterval(() => {
		setBoard()

		// check score difference 
		game = theEnd(a, score)

		// check the game over limit
		if (a > 5) {
			if (game > 5) {

				//clear the interval and end game
				clearInterval(id)

				playMusic("game_over.mp3")
				setTimeout(() => {
					alert("Game Over")
					location.reload()
				}, 1000);


				// set high score in the local storage
				if (score > oldScore) {
					highScore = score
					localStorage.setItem("Score", highScore)
				}
			}
		}

	}, 1000)
}

function gameLogic() {
	score++
	playMusic("./balldrop_2.mp3")

	this.removeEventListener('mouseover', gameLogic)
	this.style.width = "20px"
	this.style.height = "20px"
	this.style.transition = "all .2s linear"
	this.style.opacity = "0"

	console.log(score);
	scoreDisplay.innerHTML = score
}