// Phase 2 JavaScript
const OPENWEATHER_API_KEY = "key";

// Dynamic greeting
const greetingElement = document.getElementById("greeting");
const hour = new Date().getHours();
let greeting;
if (hour < 12) greeting = "Good Morning!";
else if (hour < 18) greeting = "Good Afternoon!";
else greeting = "Good Evening!";
greetingElement.textContent = greeting;

// Contact form validation
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const formResult = document.getElementById("form-result");

const showError = (el, text) => {
    el.textContent = text;
    el.style.color = "#b91c1c";
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let valid = true;
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    formResult.textContent = "";

    if (name === "") { showError(nameError, "Please enter your name."); valid = false; }
    else if (name.length < 2) { showError(nameError, "Name must contain at least 2 characters."); valid = false; }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") { showError(emailError, "Please enter your email."); valid = false; }
    else if (!emailPattern.test(email)) { showError(emailError, "Please enter a valid email address."); valid = false; }

    if (message === "") { showError(messageError, "Please enter a message."); valid = false; }
    else if (message.length < 10) { showError(messageError, "Message must contain at least 10 characters."); valid = false; }

    if (valid) {
        formResult.textContent = `Thank you, ${name}! Your message has been validated successfully.`;
        formResult.style.color = "#166534";
        form.reset();
    } else {
        formResult.textContent = "Please correct the errors above.";
        formResult.style.color = "#b91c1c";
    }
});

// DOM/event demonstration
const heroButton = document.querySelector(".button");
heroButton.addEventListener("mouseover", () => heroButton.style.letterSpacing = "0.5px");
heroButton.addEventListener("mouseout", () => heroButton.style.letterSpacing = "normal");

// jQuery interactive gallery
$(document).ready(function () {
    $(".thumbnail").on("click", function () {
        const title = $(this).data("title");
        const description = $(this).data("description");
        const image = $(this).data("image");
        $("#gallery-title").text(title);
        $("#gallery-description").text(description);
        $("#main-gallery-image").attr("src", image).attr("alt", title);
        $(".thumbnail").css("opacity", "0.6");
        $(this).css("opacity", "1");
    });
});

// DEV Community articles using fetch()
const articlesList = document.getElementById("articles-list");
const articlesStatus = document.getElementById("articles-status");

const loadArticles = async () => {
    try {
        const response = await fetch("https://dev.to/api/articles?per_page=5");
        if (!response.ok) throw new Error("Unable to retrieve articles.");
        const articles = await response.json();
        articlesList.innerHTML = "";
        articles.forEach((article) => {
            const link = document.createElement("a");
            link.href = article.url;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.textContent = article.title;
            articlesList.appendChild(link);
        });
        articlesStatus.textContent = "Showing 5 recent technology articles from DEV Community.";
    } catch (error) {
        articlesStatus.textContent = "Unable to load articles right now. Please try again later.";
        articlesStatus.style.color = "#b91c1c";
    }
};
loadArticles();

// OpenWeatherMap
const cityInput = document.getElementById("city-input");
const weatherButton = document.getElementById("weather-button");
const weatherStatus = document.getElementById("weather-status");
const weatherResult = document.getElementById("weather-result");
const weatherCity = document.getElementById("weather-city");
const weatherTemperature = document.getElementById("weather-temperature");
const weatherDescription = document.getElementById("weather-description");
const weatherIcon = document.getElementById("weather-icon");

const getWeather = async () => {
    const city = cityInput.value.trim();
    weatherResult.style.display = "none";
    weatherStatus.textContent = "";

    if (city === "") {
        weatherStatus.textContent = "Please enter a city name.";
        weatherStatus.style.color = "#b91c1c";
        return;
    }
    if (OPENWEATHER_API_KEY === "YOUR_OPENWEATHER_API_KEY") {
        weatherStatus.textContent = "Please add your OpenWeatherMap API key in script.js first.";
        weatherStatus.style.color = "#b91c1c";
        return;
    }

    weatherStatus.textContent = "Loading weather...";
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${OPENWEATHER_API_KEY}&units=metric`;
        const response = await fetch(url);
        if (!response.ok) {
            if (response.status === 404) throw new Error("City not found.");
            if (response.status === 401) throw new Error("Invalid API key.");
            throw new Error("Weather service error.");
        }
        const data = await response.json();
        weatherCity.textContent = data.name;
        weatherTemperature.textContent = `Temperature: ${Math.round(data.main.temp)} °C`;
        weatherDescription.textContent = `Weather: ${data.weather[0].description}`;
        weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        weatherIcon.alt = data.weather[0].description;
        weatherResult.style.display = "block";
        weatherStatus.textContent = "";
    } catch (error) {
        weatherStatus.textContent = `Unable to get weather: ${error.message}`;
        weatherStatus.style.color = "#b91c1c";
    }
};

weatherButton.addEventListener("click", getWeather);
cityInput.addEventListener("change", () => weatherStatus.textContent = "");
cityInput.addEventListener("keydown", (event) => { if (event.key === "Enter") getWeather(); });

// Arrays and objects for JavaScript construct demonstration
const websiteInfo = { name: "Juan", course: "B.Tech AI & Data Science", year: 2028 };
const skills = ["HTML", "CSS", "JavaScript", "Python", "Data Science"];
console.log(websiteInfo, skills);
