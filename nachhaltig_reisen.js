document.getElementById("toggleDark").addEventListener("click", function () {
    document.body.classList.toggle("dark");
});

const topButton = document.getElementById("topButton");


window.onscroll = function () {

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
window.addEventListener("resize", () => {
    console.log("Breite:", window.innerWidth);
});
