// main.js
const roles = ["Web Developer", "Python Developer", "Frontend Developer", "Freelancer", "Django Developer"];
let index = 0;
const roleElement = document.getElementById("role");

function changeRole() {
    roleElement.textContent = roles[index];
    index = (index + 1) % roles.length;
}

setInterval(changeRole, 5000);

function toggleText() {
    const moreText = document.getElementById("more-text");
    const btn = document.querySelector(".read-more-btn");
    
    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        btn.textContent = "Read Less";
    } else {
        moreText.style.display = "none";
        btn.textContent = "Read More";
    }
}
