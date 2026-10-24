
 // SpatialNexTech website interactions
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("#primary-nav");

    // Mobile navigation menu
    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            const isOpen = nav.classList.toggle("is-open");

            toggle.setAttribute("aria-expanded", String(isOpen));
            toggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu"
            );
        });

        // Close the menu after selecting a link
        nav.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                nav.classList.remove("is-open");
                toggle.setAttribute("aria-expanded", "false");
                toggle.setAttribute("aria-label", "Open navigation menu");
            });
        });
    }

    // Automatically update the copyright year
    const year = document.querySelector("#current-year");

    if (year) {
        year.textContent = String(new Date().getFullYear());
    }
});
