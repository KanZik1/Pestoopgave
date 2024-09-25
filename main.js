
// Når siden scroller, udfør denne funktion
window.onscroll = function () {
    var logoText = document.getElementById("logo-text");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        logoText.innerHTML = "Jensens Bøfhus"; // Skift til tekst, når man scroller
    } else {
        logoText.innerHTML = "<i class='fas fa-utensils'></i>"; // Skift tilbage til ikon
    }
};
