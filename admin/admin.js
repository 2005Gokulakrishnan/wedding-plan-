// Security Check
if (!localStorage.getItem("adminLoggedIn")) {
  window.location.href = "login.html";
}

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

// Get Saved Content
let websiteContent = JSON.parse(localStorage.getItem("weddingContent")) || defaultContent;

// Form Elements
const heroTitleInput = document.getElementById("heroTitleInput");
const heroSubtitleInput = document.getElementById("heroSubtitleInput");
const heroBtnTextInput = document.getElementById("heroBtnTextInput");
const heroBtnLinkInput = document.getElementById("heroBtnLinkInput");

const gallery1 = document.getElementById("gallery1");
const gallery2 = document.getElementById("gallery2");
const gallery3 = document.getElementById("gallery3");

const primaryColorInput = document.getElementById("primaryColorInput");

// Populate Existing Data
function loadDashboardData() {
  heroTitleInput.value = websiteContent.heroTitle;
  heroSubtitleInput.value = websiteContent.heroSubtitle;
  heroBtnTextInput.value = websiteContent.heroBtnText;
  heroBtnLinkInput.value = websiteContent.heroBtnLink;

  gallery1.value = websiteContent.gallery[0];
  gallery2.value = websiteContent.gallery[1];
  gallery3.value = websiteContent.gallery[2];

  primaryColorInput.value = websiteContent.primaryColor;
}

loadDashboardData();

// Save Changes
document.getElementById("saveBtn").addEventListener("click", () => {
  websiteContent.heroTitle = heroTitleInput.value;
  websiteContent.heroSubtitle = heroSubtitleInput.value;
  websiteContent.heroBtnText = heroBtnTextInput.value;
  websiteContent.heroBtnLink = heroBtnLinkInput.value;

  websiteContent.gallery = [
    gallery1.value,
    gallery2.value,
    gallery3.value
  ];

  websiteContent.primaryColor = primaryColorInput.value;

  // Save to LocalStorage
  localStorage.setItem("weddingContent", JSON.stringify(websiteContent));

  alert("Website content updated successfully!");
});

// Logout
document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("adminLoggedIn");
  window.location.href = "login.html";
});

// Smooth Sidebar Navigation
document.querySelectorAll('.sidebar nav a[href^="#"]').forEach(anchor => {
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