// Default Website Content
const defaultContent = {
  heroTitle: "Luxury Wedding Decor for Your Dream Day",
  heroSubtitle: "Elegant floral artistry, bespoke stage designs, and unforgettable wedding experiences.",
  heroBtnText: "Book Consultation",
  heroBtnLink: "#contact",
  primaryColor: "#d4af7f",
  gallery: [
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80"
  ]
};

// Get saved content from LocalStorage or use default
const savedContent = JSON.parse(localStorage.getItem("weddingContent")) || defaultContent;

// Apply Hero Content
document.getElementById("heroTitle").textContent = savedContent.heroTitle;
document.getElementById("heroSubtitle").textContent = savedContent.heroSubtitle;

const heroBtn = document.getElementById("heroBtn");
heroBtn.textContent = savedContent.heroBtnText;
heroBtn.href = savedContent.heroBtnLink;

// Apply Theme Color
document.documentElement.style.setProperty("--primary", savedContent.primaryColor);

// Apply Gallery Images
const galleryContainer = document.getElementById("galleryContainer");

if (galleryContainer) {
  galleryContainer.innerHTML = "";

  savedContent.gallery.forEach((imageUrl) => {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = "Wedding Decor";
    galleryContainer.appendChild(img);
  });
}

// Smooth Scroll for Navbar Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Optional Fade-in Animation on Scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll(".card, .gallery img, .section h2").forEach((el) => {
  el.style.opacity = 0;
  el.style.transform = "translateY(30px)";
  el.style.transition = "all 0.8s ease";
  observer.observe(el);
});