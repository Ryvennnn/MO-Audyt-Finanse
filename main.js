var Strona_glowna = document.getElementById("Strona_glowna");
var O_nas = document.getElementById("O_nas");
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