document.addEventListener("DOMContentLoaded", function () {
    let heyBtn = document.getElementById("heyBtn");
    let revealBtn = document.getElementById("revealBtn");
    let finalMessage = document.getElementById("finalMessage");
    let keepSmiling = document.getElementById("keepSmiling");
    let babyYoda = document.querySelector(".baby-yoda-container");

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
            finalMessage.innerHTML = "";

            function typeWriter() {
                if (i < message.length) {
                    finalMessage.innerHTML += message.charAt(i);
                    i++;
                    setTimeout(typeWriter, speed);
                } else {
                    // ✅ Wait 3 seconds before starting the vanish effect
                    setTimeout(() => {
                        finalMessage.classList.add("vanish-effect");

                        // ✅ Only after the vanish effect completes, show Keep Smiling & Baby Yoda
                        setTimeout(() => {
                            keepSmiling.style.opacity = "1";
                            keepSmiling.style.transform = "scale(1)";
                            
                            babyYoda.style.opacity = "1";
                            babyYoda.style.transform = "translateY(0)";
                        }, 3000); // This delay ensures it happens AFTER the vanish effect
                    }, 3000);
                }
            }

            typeWriter();
        }, 2000);
    }
});
