var button_to_count = document.querySelector(".button");
var reset_to_count = document.querySelector(".reset");
var number_display = document.querySelector(".szamlalo");
var number = 0;

button_to_count.addEventListener("click", () => {
    couting = number += 1;
    number_display.innerText = couting;
});

reset_to_count.addEventListener("click", () => {
    number = 0;
    number_display.innerText = number;
});






