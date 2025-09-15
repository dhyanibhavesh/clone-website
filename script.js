// Add smooth fade-in animation for header links
document.querySelectorAll("header ul li a").forEach((link, index) => {
    link.style.opacity = "0";
    setTimeout(() => {
        link.style.transition = "all 0.8s ease";
        link.style.opacity = "1";
        link.style.transform = "translateY(0)";
    }, 300 * index);
});

// Logo bounce on hover using JS
const logo = document.querySelector(".logo img");
logo.addEventListener("mouseover", () => {
    logo.style.transform = "scale(1.2)";
    logo.style.transition = "0.3s ease";
});
logo.addEventListener("mouseout", () => {
    logo.style.transform = "scale(1)";
});

// Animate input placeholder typing effect
const input = document.querySelector("main input");
const placeholderText = "Search for Restaurants, cuisine or a dish";
let i = 0;

function typePlaceholder() {
    if (i < placeholderText.length) {
        input.setAttribute("placeholder", placeholderText.substring(0, i + 1));
        i++;
        setTimeout(typePlaceholder, 80);
    } else {
        setTimeout(() => {
            i = 0;
            typePlaceholder();
        }, 2500);
    }
}
typePlaceholder();
