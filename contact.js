document.addEventListener("DOMContentLoaded", () => {

    // contact us modal
    const contactBtn = document.getElementById("contactBtn");
    const modal = document.getElementById("contactModal");
    const closeBtn = modal.querySelector(".close");

    if (contactBtn && modal && closeBtn) {
        contactBtn.addEventListener("click", () => {
            modal.style.display = "block";
        });

        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });

        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });

        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                modal.style.display = 'none';
            }
        });
    }
});