var numbers = document.querySelectorAll("[data-number]");
var operations = document.querySelectorAll("[data-operation]");
var inputfile = document.querySelector(".input");


numbers.forEach(button => {
    button.addEventListener("click", () =>{
        inputfile.innerText+= button.innerText
    });
});

operations.forEach(operator => {
    operator.addEventListener("click", () => {
        if (operator.innerText === "DEL") {
            inputfile.innerText = inputfile.innerText.slice(0, -1)
            console.log(inputfile.innerText)
        } else if (operator.innerText === "AC") {
            inputfile.innerText = ""
        } else if (operator.innerText === "+") {
            inputfile.innerText += "+"
            oszeadas = inputfile.innerText + inputfile.innerText;
            console.log(oszeadas)
        }
    });
});