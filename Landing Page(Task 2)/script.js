function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function sendMsg(e) {
    e.preventDefault();
    document.getElementById("msg").innerText = "Message sent successfully!";
}