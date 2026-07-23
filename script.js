const modeToggle = document.querySelector("#modeToggle");

modeToggle.addEventListener("click", function() {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("ligh")) {
        modeToggle.textContent = "mode Terang";
    } else{
        modeToggle.textContent = "mode gelap";
    }
})