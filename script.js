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
	const inputValue = subscribeInput.value;

	if (inputValue && inputValue.includes("@")) {
		updateSubscribeMessage("Successfully subscribed to newsletter");
		subscribeInput.value = "";
		subscribeInput.classList.remove("subscribe-error-border");
	} else {
		updateSubscribeMessage("Please insert a valid email");
		subscribeInput.classList.add("subscribe-error-border");
	}
};

burgerBtn.addEventListener("click", showBurgerMenu);
backdrop.addEventListener("click", closeNav);
form.addEventListener("submit", validateEmail);
