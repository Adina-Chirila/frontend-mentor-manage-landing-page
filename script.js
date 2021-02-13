const burgerBtn = document.querySelector(".burger-menu");
const backdrop = document.querySelector(".backdrop");
const navList = document.querySelector(".list");
const form = document.querySelector("form");
const subscribeContainer = document.querySelector(".newsletter");
const subscribeInput = document.querySelector(".subscribe");
const subscribeMessage = document.querySelector(".subscribe-message");

const openNav = () => {
	backdrop.classList.add("visible");
	navList.classList.add("visible");
	burgerBtn.src = "./images/icon-close.svg";
};

const closeNav = () => {
	backdrop.classList.remove("visible");
	navList.classList.remove("visible");
	burgerBtn.src = "./images/icon-hamburger.svg";
};

const showBurgerMenu = () => {
	if (burgerBtn.getAttribute("src") === "./images/icon-hamburger.svg") {
		openNav();
	} else {
		closeNav();
	}
};

const updateSubscribeMessage = (message) => {
	subscribeMessage.innerText = message;
};

const validateEmail = (e) => {
	e.preventDefault();
	const validationPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	if (validationPattern.test(subscribeInput.value)) {
		updateSubscribeMessage("Successfully subscribed to newsletter");
		subscribeInput.value = "";
		subscribeInput.classList.remove("subscribe-error-border");
	} else {
		updateSubscribeMessage("Please insert a valid email");
		subscribeInput.classList.add("subscribe-error-border");
	}
};

new Glider(document.querySelector(".glider"), {
	// mobile
	slidesToShow: 1,
	slidesToScroll: 1,
	scrollLock: true,
	draggable: true,
	dots: "#resp-dots",

	responsive: [
		{
			// screens greater than >= 700px
			breakpoint: 700,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				draggable: true,
				itemWidth: 150,
				duration: 0.25,
			},
		},

		{
			// screens greater than >= 1000px
			breakpoint: 1000,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				draggable: true,
				itemWidth: 150,
				duration: 0.25,
			},
		},
	],
});

burgerBtn.addEventListener("click", showBurgerMenu);
backdrop.addEventListener("click", closeNav);
form.addEventListener("submit", validateEmail);
