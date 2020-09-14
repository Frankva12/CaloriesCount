const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const result = document.querySelector(".numberCalories");
const moon = document.querySelector(".btn-moon");
const body = document.querySelector(".container");
const header = document.querySelector(".header");

let calories = 0;
result.innerHTML = calories;
btn1.addEventListener("click", function(){
    btn1.classList.toggle("checked");
    if(btn1.classList.contains("checked")){
        calories = calories + 300;
        result.innerHTML = calories;
    }else{
        calories = calories - 300;
        result.innerHTML = calories;
    }
})

btn2.addEventListener("click", function(){
    btn2.classList.toggle("checked");
    if(btn2.classList.contains("checked")){
        calories = calories + 400;
        result.innerHTML = calories;
    }else{
        calories = calories - 400;
        result.innerHTML = calories;
    }
})

btn3.addEventListener("click", function(){
    btn3.classList.toggle("checked");
    if(btn3.classList.contains("checked")){
        calories = calories + 100;
        result.innerHTML = calories;
    }else{
        calories = calories - 100;
        result.innerHTML = calories;
    }
})

btn4.addEventListener("click", function(){
    btn4.classList.toggle("checked");
    if(btn4.classList.contains("checked")){
        calories = calories + 200;
        result.innerHTML = calories;
    }else{
        calories = calories - 200;
        result.innerHTML = calories;
    }
})

moon.addEventListener("click" ,function(){
    body.classList.toggle("dark-container");
    header.classList.toggle("dark-header");
    result.classList.toggle("numberCalories-dark");
    if(body.classList.contains("dark-container")){
        moon.innerHTML = '<i class="fas fa-sun"></i>';
    }else{
        moon.innerHTML = '<i class="fas fa-moon"></i>';
    }
})