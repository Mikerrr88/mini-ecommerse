// Banner Slider
let bannerIndex = 0;
const banners = ["images/banner1.jpg", "images/banner2.jpg", "images/banner3.jpg"];
const bannerElement = document.getElementById("banner");

function changeBanner() {
    bannerIndex = (bannerIndex + 1) % banners.length;
    bannerElement.src = banners[bannerIndex];
}

setInterval(changeBanner, 2000); // Change every 2 seconds

// Category Click Links
const categoryLinks = {
    electronics: "https://www.amazon.in/s?i=electronics",
    clothes: "https://www.amazon.in/s?i=apparel",
    shoes: "https://www.amazon.in/s?i=shoes",
    homeDecor: "https://www.amazon.in/s?i=kitchen&bbn=1380442031&rh=n%3A1380441031%2Cn%3A1380442031%2Cn%3A5925789031",
    books: "https://www.amazon.in/s?i=stripbooks",
    beauty: "https://www.amazon.in/s?i=beauty"
};

document.querySelectorAll(".category-card").forEach(card => {
    card.addEventListener("click", () => {
        const category = card.getAttribute("data-category");
        if (categoryLinks[category]) {
            window.open(categoryLinks[category], "_blank");
        }
    });
});
