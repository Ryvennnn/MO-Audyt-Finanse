var Strona_glowna = document.getElementById("Strona_glowna");
var O_nas = document.getElementById("O_nas");
var Nasze_uslugi = document.getElementById("Nasze_uslugi");
var Dlaczego_my = document.getElementById("Dlaczego_my");
var Kontakt = document.getElementById("Kontakt");
var body = document.getElementById("body"); 



var menuLabels = document.querySelectorAll("#menu label");
var aktualna_zakladka = Strona_glowna;

body.style.animation = "otwieranie_zakladki 1s ease-in-out forwards";

function clearActiveLabels() {
    menuLabels.forEach(label => label.classList.remove("active-menu"));
}

function setActiveLabel(zakladka) {
    clearActiveLabels();
    if (zakladka === Strona_glowna) {
        menuLabels[0].classList.add("active-menu");
    } else if (zakladka === O_nas) {
        menuLabels[1].classList.add("active-menu");
    } else if (zakladka === Nasze_uslugi) {
        menuLabels[2].classList.add("active-menu");
    } else if (zakladka === Dlaczego_my) {
        menuLabels[3].classList.add("active-menu");
    } else if (zakladka === Kontakt) {
        menuLabels[4].classList.add("active-menu");
    }
    // Add more else if for other tabs if needed
}

// Initial active label
setActiveLabel(aktualna_zakladka);

function zmiana_zakladki(zakladka) {
    if (aktualna_zakladka !== zakladka) {
        aktualna_zakladka.style.animation = "zamykanie_zakladki 0.5s ease-in-out forwards";

        setTimeout(() => { 
            aktualna_zakladka.style.display = "none";
            zakladka.style.display = "block";
            zakladka.style.animation = "otwieranie_zakladki 0.5s ease-in-out forwards";
            aktualna_zakladka = zakladka;
            
        }, 500);
setActiveLabel(zakladka);
    } else {
        console.log("Jestesmy w tej samej zakladce");
    }
}

function toggleMenu() {
    document.getElementById("menu").classList.toggle("folded");}


const now = new Date();
const hour = now.getHours();
const godziny_otwarcia = document.getElementById("godziny-otwarcia");

//hour >= 8 && hour < 14
//hour === 14
//
if (hour >= 8 && hour < 14) {
    godziny_otwarcia.textContent = " (Otwarte teraz)";
    godziny_otwarcia.style.color = "#00FF4D";
    godziny_otwarcia.style.fontWeight = "bold";

    godziny_otwarcia.style.padding = "2px 4px";
} else if (hour === 14) {
    godziny_otwarcia.textContent = " (Zamykamy się za godzinę)";
    godziny_otwarcia.style.color = "#FFA200";
    godziny_otwarcia.style.fontWeight = "bold";
    godziny_otwarcia.style.padding = "2px 4px";
} else {
    godziny_otwarcia.textContent = " (Już zamknięte)";
    godziny_otwarcia.style.color = "#FF0000";
    godziny_otwarcia.style.fontWeight = "bold";
    godziny_otwarcia.style.padding = "2px 4px";
}
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('mousedown', e => e.preventDefault()); // blokuje focus na desktop
  img.addEventListener('touchstart', e => e.preventDefault()); // blokuje focus na mobile
});
