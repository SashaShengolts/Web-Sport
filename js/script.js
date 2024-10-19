// Menu

function openModal() {
    document.getElementById("modal").style.top = "0px";
}

function closeModal() {
    document.getElementById("modal").style.top = "-400px";
}
// Button Up

/*window.onscroll = function () { scrollFunction() };

const upbuttons = document.querySelectorAll(".arrow");

for (const upbutton of upbuttons) {
    upbutton.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");

    document.querySelector(href).scrollIntoView({
        behavior: "smooth"
    });
}

function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        document.getElementById('btnUp').className = 'arrow';
    } else {
        document.getElementById('btnUp').className = 'arrow';
    }
}*/