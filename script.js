document.addEventListener("DOMContentLoaded", function () {
    let heyBtn = document.getElementById("heyBtn");
    let revealBtn = document.getElementById("revealBtn");
    let finalMessage = document.getElementById("finalMessage");
    let keepSmiling = document.getElementById("keepSmiling");

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
                        finalMessage.classList.add("vanish-effect"); // ✅ Start vanishing
                        
                        setTimeout(() => {
                            if (keepSmiling) {
                                keepSmiling.style.opacity = "1"; // ✅ Now show "Keep Smiling!"
                                keepSmiling.style.transform = "scale(1)";
                            }
                        }, 3000); // Wait for vanish effect to complete (3s)
                    }, 2000); // Wait before vanish starts
                }
            }

            typeWriter();
        }, 2000);
    }
});
