document.addEventListener("DOMContentLoaded", function () {
    let heyBtn = document.getElementById("heyBtn");
    let revealBtn = document.getElementById("revealBtn");
    let finalMessage = document.getElementById("finalMessage");

    function goToPage(url) {
        window.location.href = url;
    }

    if (heyBtn) {
        heyBtn.addEventListener("click", () => goToPage("reveal.html"));
        heyBtn.addEventListener("touchstart", () => goToPage("reveal.html"));
    }

    if (revealBtn) {
        revealBtn.addEventListener("click", () => goToPage("Landing.html"));
        revealBtn.addEventListener("touchstart", () => goToPage("Landing.html"));
    }

    if (finalMessage) {
        setTimeout(() => {
            let message = "Your smile is really beautiful. Honestly, you look like a goddess when you smile 🌺💐";
            let i = 0;
            let speed = 150;
            finalMessage.innerHTML = ""; // Clear any previous text

            function typeWriter() {
                if (i < message.length) {
                    finalMessage.innerHTML += message.charAt(i);
                    i++;
                    setTimeout(typeWriter, speed);
                } else {
                    setTimeout(() => {
                        finalMessage.classList.add("vanish-effect");  // ✅ Adds vanish effect after typing
                    }, 2000);
                }
            }

            typeWriter();
        }, 2000);
    }
});
