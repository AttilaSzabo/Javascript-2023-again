var register_link = document.querySelector(".register_link");
var login_link = document.querySelector(".login_link");
var wrapper = document.querySelector(".wrapper");

register_link.addEventListener("click", () => {
    wrapper.classList.add("active");
    
});

login_link.addEventListener("click", () => {
    wrapper.classList.remove("active")
});