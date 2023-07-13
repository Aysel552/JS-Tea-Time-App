const button = document.querySelector("#btn");

if (button) {
    button.onclick = function () {
        button.classList.toggle("dipped");
    }
}