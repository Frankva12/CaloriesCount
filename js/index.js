const CaloriesData = [{
        img: '../img/hamburguer.png',
        calories: 120
    },
    {
        img: '../img/pizza.png',
        calories: 220
    }, {
        img: '../img/soda.png',
        calories: 300
    }, {
        img: '../img/sorbete.png',
        calories: 450
    }
]

const buttons = document.querySelector(".buttons");
const result = document.querySelector(".number-calories");
const moon = document.querySelector(".btn-moon");
const body = document.querySelector(".container");
const header = document.querySelector(".header");
calories = 0;
result.innerHTML = calories;

function ShowFood() {
    let container = "";
    i = 0
    CaloriesData.forEach(Calories => {
        container += `
            <button class="button" value = "${Calories.calories}">
            <img src="${Calories.img}"></button>`
        i++;
    });
    buttons.innerHTML = container;
    loadEvent();
}
ShowFood();

moon.addEventListener("click", function () {
    DarkMode();
})


function loadEvent() {
    const button = document.querySelectorAll(".button");
    Array.from(button).forEach(button => {
        button.addEventListener("click", () => {
            countCalories(button);
        })
    })
}

function countCalories(buttons) {
    if (buttons.className.includes("button")) {
        buttons.className = "checked";
        sumCalorie(parseInt(buttons.value));
    } else {
        buttons.className = "button"
        lessCalorie(parseInt(buttons.value));
    }
    result.innerHTML = calories;
}

function sumCalorie(numCalorie) {
    calories += numCalorie;
}

function lessCalorie(numCalorie) {
    calories -= numCalorie;
    if (calories < 0)
        calories = 0;
}

function DarkMode() {
    body.classList.toggle("dark-container");
    header.classList.toggle("dark-header");
    result.classList.toggle("numberCalories-dark");
    if (body.classList.contains("dark-container")) {
        moon.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        moon.innerHTML = '<i class="fas fa-moon"></i>';
    }
}