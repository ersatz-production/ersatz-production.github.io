// language-selector.js
document.addEventListener("DOMContentLoaded", function() {
    const languageSelect = document.getElementById("language-select");
    const navbarItems = document.querySelectorAll(".navbar-item");

    const translations = {
        en: {
            about: "About Us",
            filmography: "Filmography",
            contact: "Contact"
        },
        fr: {
            about: "À Propos",
            filmography: "Filmographie",
            contact: "Contact"
        },
        de: {
            about: "Über Uns",
            filmography: "Filmografie",
            contact: "Kontakt"
        }
    };

    languageSelect.addEventListener("change", function() {
        const selectedLanguage = this.value;
        navbarItems.forEach(item => {
            const key = item.getAttribute("data-key");
            item.textContent = translations[selectedLanguage][key];
        });
    });
});