/*!
* Start Bootstrap - Bare v5.0.7 (https://startbootstrap.com/template/bare)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


function printLetterByLetter(destination, message, speed) {
    var i = 0;
    var interval = setInterval(function () {
        document.getElementById(destination).innerHTML += message.charAt(i);
        i++;
        if (i > message.length) {
            clearInterval(interval);
        }
    }, speed);
}


function ShowHide(divId) {
    if (document.getElementById(divId).style.display == 'none') {
        document.getElementById(divId).style.display = 'block';
    }
    else {
        document.getElementById(divId).style.display = 'none';
    }
}


// Get elements or create dummy ones if they don't exist
const see_more = document.getElementById("see-more") || { style: {} };
const dark_toggle = document.getElementById("dark-toggle") || { style: {} };
const myphoto = document.getElementById("myphoto") || { src: "" };


// Initial state
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");

    see_more.style.color = "white";
    dark_toggle.style.color = "white";
    myphoto.src = "assets/profile_lowbright.png";
}


// Toggle function
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", theme);

    see_more.style.color = (theme == 'dark') ? 'white' : 'black';
    dark_toggle.style.color = (theme == 'dark') ? 'white' : 'black';
    myphoto.src = (theme == 'dark') ? "assets/profile_lowbright.png" : "assets/profile.png";

}

window.addEventListener('load', function () {
if (window.MathJax) {
    MathJax.typeset();
}
});

window.MathJax = {
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],  // Enable single $
        displayMath: [['$$', '$$'], ['\\[', '\\]']]
    },
    processEscapes: true
};