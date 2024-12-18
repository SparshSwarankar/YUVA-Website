document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopBtn = document.querySelector("#scrollToTopBtn");

    if (scrollToTopBtn) {
        // Show or hide the button based on scroll position
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                scrollToTopBtn.classList.add("show");
            } else {
                scrollToTopBtn.classList.remove("show");
            }
        });

        // Scroll to the top smoothly when clicked
        scrollToTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    } else {
        console.error("Scroll to Top Button not found!");
    }
});
