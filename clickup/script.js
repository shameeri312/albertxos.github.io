const infoDetilsData = [
	{
		head: "Simplify work and get more done.",
		para: " Plan, track, and manage any type of work with project management that flexes to your team's needs.",
		replace: "REPLACES: Asana | Monday | Jira",
		video: "./media/vid2.mp4",
		img: "./media/projects_tasks.png"
	}, {
		head: "Bring everyone together in Chat.",
		para: " Work smarter as a team with real-time chat. Tag individuals or groups, assign comments for action items, and link tasks to get more done together.",
		replace: "REPLACES:Slack | MS Teams | Google Hangouts",
		video: "./media/vid3.mp4",
		img: "./media/chat.png"
	}, {
		head: "Set goals and crush them faster.",
		para: "Stay on track to hit your goals with targets for task completions, numbers, monetary values and more. Track progress in real-time connecting tasks to goals and keep your objectives organized with Goal Folders.",
		replace: "REPLACES:Lattice | Gtmhub | 7geese",
		video: "./media/vid4.mp4",
		img: "./media/dashboard.png"
	}, {
		head: "See your work, your way.",
		para: "Tackle work from any angle with 20+ real-time views that adapt to your needs. Track tasks on List, update workflows on a Board, drag-and-drop due dates on a Calendar, and so much more.",
		replace: "REPLACES:Monday | Jira | Trello",
		video: "./media/vid2.mp4",
		img: "./media/views.png"
	},
]
const appDisplayData = [
	{
		video: "./media/docs.mp4",
		img: "https://images.ctfassets.net/w8fc6tgspyjz/5zX1FTYvh5Q3Q3VYV1BLlM/84065bea376876c8280e863ff3580161/docs.png?fm=avif&q=50&w=1200",
		head: "The world's most powerful (and fun) Docs."
	}, {
		video: "/media/whiteboard__1__2.mp4",
		img: "https://images.ctfassets.net/w8fc6tgspyjz/6IudEMfYidHyWX2HjvMXob/70cbbd1ed4f52f689985c8323ad1f175/whiteboard.png?fm=avif&q=50&w=800",
		head: "Bring your ideas to life with Whiteboards."
	}, {
		video: "/media/dashboard.webm",
		img: "https://images.ctfassets.net/w8fc6tgspyjz/761v0SdC7OKXm5t1hJbHgg/89a1cb336c88ccc2d6933e9dda8b73d0/Product_Team_Dashboard.png?fm=avif&q=50&w=800",
		head: "See how you're doing in real-time with Dashboards."
	}
]
const appContent = [
	{
		head: "Import to the future of work with one click.",
		video: "./media/import.mp4",
		para: "Instantly import your work from other tools automatically. Create a custom import to bring work in from excel or tools that aren't supported.",
		img: "https://images.ctfassets.net/w8fc6tgspyjz/32N7iZgtkoMOf5Kaw0g813/21b134596fc13349f6ecf6f05e326f5a/import.png?fm=avif&q=50"
	}, {
		head: "Get more work done, wherever you are.",
		video: "./media/content2.mp4",
		para: "Access ClickUp on any device—mobile, desktop, voice assistants, and more to get work done from anywhere.",
		img: "https://images.ctfassets.net/w8fc6tgspyjz/4Opxxt1sQuzurnnswdXtXn/e8fff4c50bda9af9172246d5e4e16991/download.png?fm=avif&q=50&w=800"
	}, {
		head: "Customize tasks for any need.",
		video: "",
		para: "Customize ClickUp to tackle any project or task with 35+ ClickApps. Break down work with subtasks, assign Sprint Points, link tasks to other items with Relationships, and more.",
		img: "./media/content3.avif"
	}, {
		head: "Bring all of your tools into one place.",
		video: "",
		para: "If you're not ready to replace all your tools, ClickUp can integrate with them through native and third-party integrations. Sync your team calendars, messaging apps, cloud storage, and more to keep everything in one place.",
		img: "./media/content4.avif"
	}, {
		head: "Save time by automating your work.",
		video: "",
		para: "Eliminate the busywork and focus on what matters with hundreds of Automations. Automatically assign tasks, post comments, update statuses, and sync with other tools.",
		img: "./media/content5.avif"
	},
]
const teamInfo = [
	{
		h1: "Visualize & Plan",
		h2: "Collaborate",
		h3: "Track Progress",

		icon1: "visibility",
		icon2: "groups_3",
		icon3: "checklist",

		image: "https://images.ctfassets.net/w8fc6tgspyjz/5roZ9B0wNRq47T3CQVSJhg/c36d845be59812dd6429e5f2c5b0e9f1/task-view.png?fm=avif&q=50&w=1200"

	}, {
		h1: "Develop better products, faster.",
		h2: "Visibility—Without the busy work",
		h3: "Seamless DevOps integrations",

		icon1: "subdirectory_arrow_right",
		icon2: "warning",
		icon3: "autorenew",

		image: "https://images.ctfassets.net/w8fc6tgspyjz/2hHdWl82NLi9A33sCKXBFC/c125b42ef127b5cd4fe88edae9c502ec/engineering.png?fm=avif&q=50&w=800"

	}, {
		h1: "Automate sales processes",
		h2: "Manage accounts",
		h3: "Real-time reporting",

		icon1: "settings",
		icon2: "team_dashboard",
		icon3: "schedule",

		image: "https://images.ctfassets.net/w8fc6tgspyjz/1L8hnPIOyBNk72p4p1mmCO/c9caedfc6e24723c488accc33f011d6a/sales.png?fm=avif&q=50&w=800"

	}, {
		h1: "Campaign management",
		h2: "Collaborate on marketing assets",
		h3: "Content calendars",

		icon1: "your_trips",
		icon2: "sync",
		icon3: "calendar_today",

		image: "https://images.ctfassets.net/w8fc6tgspyjz/7AbqgUYTCHSNuLurzapLWI/5c330ad82991fd9dc22a9ba573a4cfd7/marketing.png?fm=avif&q=50&w=800"

	}, {
		h1: "Prioritize, Plan, and Deliver",
		h2: "Customize your workflows",
		h3: "All-in-one platform",

		icon1: "location_on",
		icon2: "subdirectory_arrow_right",
		icon3: "verified",

		image: "https://images.ctfassets.net/w8fc6tgspyjz/1mo239lzm4hisISy6qAJum/150ae39e8f6c73935e07d2a5a007aabb/product.png?fm=avif&q=50&w=800"

	}, {
		h1: "Manage creative workflows",
		h2: "Collaborate on designs",
		h3: "Fast-track feedback & approvals",

		icon1: "dashboard",
		icon2: "group",
		icon3: "thumb_up",

		image: "https://images.ctfassets.net/w8fc6tgspyjz/293EqmD7w4nR0uuhSSuy0S/7de6d5488dd571ff7607a5009592ace9/design.png?fm=avif&q=50&w=800"

	}, {
		h1: "Manage budgets",
		h2: "Create and share reports",
		h3: "Automate routine tasks and reminders",

		icon1: "attach_money",
		icon2: "monitoring",
		icon3: "check_box",

		image: "https://images.ctfassets.net/w8fc6tgspyjz/ONwvzumcEpIrpcVAl3Fgx/651502dac63e08de6d0246a8d38a4ccc/finance.png?fm=avif&q=50&w=800"

	}, {
		h1: "Employee onboarding",
		h2: "Document management",
		h3: "Performance & goal tracking",

		icon1: "person_add",
		icon2: "badge",
		icon3: "trophy",

		image: "https://images.ctfassets.net/w8fc6tgspyjz/65qe8qGhEAhv63zQM8MACa/589f752fe0ff15dbb0fa6bc50f4b350b/hr.png?fm=avif&q=50&w=600"

	}, {
		h1: "Faster, self-service IT forms",
		h2: "Track, triage, & assign requests",
		h3: "Bring Dev and IT closer together",

		icon1: "description",
		icon2: "warning",
		icon3: "verified",

		image: "https://images.ctfassets.net/w8fc6tgspyjz/1gTuzYQVpZJsHMtiEIakOT/6b394cf7995964f7a8632cf7b5c9b054/it.png?fm=avif&q=50&w=800"

	},
]
const reviewData = [
	{
		para: "ClickUp has become such an integral part of our work! By putting our work on ClickUp and organizing it into Sprints, we made it easy to work across departments without overloading ourselves with meetings and email threads.",
		img: "./media/boy1.avif",
		name: "Jakub, Inbound Marketing Team Lead, STX Next",
		logo: "./media/stxnext.svg"

	}, {
		para: "After using many different methods to create and manage Scrum frameworks, I finally found the most flexible and powerful platform: ClickUp.",
		img: "./media/boy2.avif",
		name: "Gabriel Hoffman, Solutions Engineer, ZenPilot",
		logo: "./media/zenpilot.png"
	}
]
let a = 0, featureId, bool = 0

// function to App Details Section
function changeDetals(array) {
	let btnList = document.querySelectorAll(".buttonList .btn")
	let head = document.querySelector("#infoHeading")
	let para = document.querySelector("#infoPara")
	let replace = document.querySelector("#replaceInfo")
	let video = document.querySelector(".cuAppVideo")
	let img = document.querySelector(".appImg")


	btnList.forEach(element => {
		element.setAttribute("data-id", a++)
		element.addEventListener("click", () => {

			let id = element.getAttribute("data-id")
			btnList[0].classList.remove("active")

			head.innerHTML = array[id].head
			para.innerHTML = array[id].para
			replace.innerHTML = array[id].replace
			video.src = array[id].video
			img.src = array[id].img
		});
	})
}

// function to Change Background of header on scroll
function handleScroll() {
	let salesLink = document.querySelector(".cuSalesLink")
	let signIn = document.querySelector(".cuSignUp")
	let login = document.querySelector(".cuLogin")
	const navbar = document.querySelector(".cuHeader");
	window.addEventListener('scroll', handleScroll);

	if (window.scrollY > 10) {
		navbar.classList.add('navbar-scroll');

		salesLink.style.color = "black"
		signIn.style.background = "rgb(124, 108, 236)"
		signIn.style.color = "white"
		login.style.color = "black"

		document.querySelector(".openBtn").style.color = "black"
	} else {
		navbar.classList.remove('navbar-scroll');

		signIn.style.background = "white"
		salesLink.style.color = "white"
		signIn.style.color = "black"
		login.style.color = "white"

	}
}

// function to Open the mobile navbar
function openNavbar() {
	let mobileMenu = document.querySelector(".cuMobileMenu")
	let openBtn = document.querySelector(".openBtn")
	let closeBtn = document.querySelector(".closeBtn")
	let overlay = document.querySelector(".overlay")

	openBtn.addEventListener("click", () => {
		let width = window.innerWidth
		mobileMenu.style.right = "0"
		overlay.style.display = "block"
		if (width < 500) {
			mobileMenu.style.width = width
		}
	})

	closeBtn.addEventListener("click", () => {
		mobileMenu.style.right = "-650px"
		overlay.style.display = "none"
	})
}

// function to Open the products drop down menu
function openDropDown() {
	let dropDown = document.querySelector(".cuProductsDropdown")
	let btn = document.querySelector("#dropDown")
	let chevron = document.querySelector(".fa-chevron-down")

	btn.addEventListener("click", () => {
		if (bool === 0) {
			dropDown.style.height = "600px"
			dropDown.style.top = "10vh"
			chevron.style.transform = "rotate(-180deg)"

			bool = 1
		} else {
			dropDown.style.height = "0"
			dropDown.style.top = "0"
			chevron.style.transform = "rotate(0deg)"

			bool = 0
		}
	})
}

// function to Hover effect applied to cards in products dropdown
function hoverEffct() {
	let b = 0
	let features = document.querySelectorAll(".cuDropDownFeatures .cuCard")
	let colors = [
		{ color: "rgb(85, 255, 85,0.2)" }, { color: "rgb(135, 206, 235,0.2)" },
		{ color: "rgb(226, 99, 120,0.2)" }, { color: "rgb(0, 0, 255,0.2)" },
		{ color: "rgb(182, 0, 182,0.2)" }, { color: "rgb(255, 165, 0, 0.2)" }
	]

	for (let feature of features) {
		feature.setAttribute("data-id", b)
		b++

		feature.addEventListener("mouseover", () => {
			featureId = feature.getAttribute("data-id")
			feature.style.backgroundColor = colors[featureId].color
		})

		feature.addEventListener("mouseout", () => {
			feature.style.background = "none"
		})
	}
}

// function to Change data in the app display section
function appDisplayValues(array) {
	let btnList = document.querySelectorAll(".appDisplayBtns .btn")
	let head = document.querySelector(".appDisplayVideos .appHeading")
	let appImage = document.querySelector(".appDisplayVideos .appImage")
	let appVideo = document.querySelector(".appDisplayVideos .appVideo")
	let a = 0

	btnList.forEach(element => {
		element.setAttribute("data-id", a++)

		element.addEventListener("click", () => {
			let id = element.getAttribute("data-id")
			btnList[0].classList.remove("active2")

			head.innerHTML = array[id].head
			appVideo.src = array[id].video
			appImage.src = array[id].img
		});
	})
}

// function to change data in the content section
function changeContent(array) {
	let lists = document.querySelectorAll(".contentBtns li")
	let btnList = document.querySelectorAll(".contentBtns .btn")
	let head = document.querySelector(".cuContentLeft .contentHead")
	let para = document.querySelector(".cuContentLeft .contentPara")
	let contentVideo = document.querySelector(".cuAppRight .contentVideo")
	let contentImage = document.querySelector(".cuAppRight .contentImg")
	let a = 0, oldId = 0

	btnList.forEach(element => {
		element.setAttribute("data-id", a)
		lists[0].style.opacity = "1"
		a++

		element.addEventListener("click", () => {
			let width = window.innerWidth
			let id = element.getAttribute("data-id")

			if (id > 1) {
				contentImage.style.display = "block"
				contentVideo.style.display = "none"
			} else {
				contentVideo.style.display = "block"
				contentImage.style.display = "none"
			}

			if (width > 880) {
				contentVideo.src = array[id].video
				contentImage.src = array[id].img
			} else {
				contentImage.src = array[id].img
				contentImage.style.display = "block"
				contentVideo.style.display = "none"
			}


			lists[oldId].style.opacity = "0.4"
			lists[id].style.opacity = "1"
			head.innerHTML = array[id].head
			para.innerHTML = array[id].para

			oldId = id
		})
	})
}

// function to Change data in the cu new teams section
function changeTeamSection(array) {
	let btnList = document.querySelectorAll(".teamBtnList .btn")
	let heading = document.querySelectorAll(".teamInfoHeading")
	let icon = document.querySelectorAll(".icons")
	let image = document.querySelector(".teamImage")
	let a = 0

	btnList.forEach(element => {
		element.setAttribute("data-id", a)
		let id = element.getAttribute("data-id")
		a++

		element.addEventListener("click", () => {
			heading[0].innerHTML = array[id].h1
			heading[1].innerHTML = array[id].h2
			heading[2].innerHTML = array[id].h3

			icon[0].innerHTML = array[id].icon1
			icon[1].innerHTML = array[id].icon2
			icon[2].innerHTML = array[id].icon3
			image.src = array[id].image

		})
	})
}

// function to change reviews
function changeReviews(array) {
	let btn1 = document.querySelectorAll(".reviewNav")[0]
	let btn2 = document.querySelectorAll(".reviewNav")[1]
	let image = document.querySelector(".personPic")
	let review = document.querySelector(".reviewLines")
	let name = document.querySelector(".personName")
	let logo = document.querySelector(".logo img")

	btn1.addEventListener("click", () => {
		image.style.backgroundImage = `url(${array[0].img})`
		review.innerHTML = array[0].para
		name.innerHTML = array[0].name
		logo.src = array[0].logo

		btn2.classList.add("active4")
		btn1.classList.remove("active4")
		btn1.setAttribute("disabled", "true")
		btn2.removeAttribute("disabled", "true")
	})

	btn2.addEventListener("click", () => {
		image.style.backgroundImage = `url(${array[1].img})`
		review.innerHTML = array[1].para
		name.innerHTML = array[1].name
		logo.src = array[1].logo

		btn1.classList.add("active4")
		btn2.classList.remove("active4")
		btn2.setAttribute("disabled", "true")
		btn1.removeAttribute("disabled", "true")
	})
}

// Fucntion call
changeDetals(infoDetilsData)
handleScroll()
openNavbar()
hoverEffct()
openDropDown()
appDisplayValues(appDisplayData)
changeContent(appContent)
changeTeamSection(teamInfo)
changeReviews(reviewData)