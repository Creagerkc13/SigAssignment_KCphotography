const buttons = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".gallery .item");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        // active button styling
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        items.forEach(item => {
            if (filter === "all") {
                item.classList.remove("hide");
            } else {
                if (item.classList.contains(filter)) {
                    item.classList.remove("hide");
                } else {
                    item.classList.add("hide");
                }
            }
        });
    });
});

const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

images.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});