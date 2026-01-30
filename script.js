// Voeg hier je komende optredens toe
const gigs = [

    // { date: "21 september", place: "Floralia, Nieuwe Niedorp" },
    // { date: "28 september", place: "Bloemencorso, Winkel" },
    // { date: "30 oktober", place: "Podium Victorie, Alkmaar" },
    // { date: "8 november", place: "Ontmoeting, De Goorn [besloten]" },
    // { date: "22 november (start: 20:00 uur)", place: "Dorpshuis, Warmenhuizen" },
    // { date: "29 november", place: "Argos, De Weere" },
    { date: "5 februari 2026", place: "Poppodium Manifesto, Hoorn" },
    { date: "6 februari 2026", place: "(Bolletjes) Cafe de Klok, Warmenhuizen" },
    { date: "11 februari 2026", place: "Poppodium Victorie, Alkmaar" },
    { date: "14 maart 2026", place: "Ahoi, Tuitjenhornn" },
    { date: "29 mei 2026", place: "Scouting Live, Bergen" },
    { date: "27 juni 2026", place: "De Heerlijkheid, Oudkarspel" }

];

const gigsList = document.getElementById('gigs-list');
gigs.forEach(gig => {
    const li = document.createElement('li');
    li.textContent = `${gig.date} – ${gig.place}`;
    gigsList.appendChild(li);
});
/*
// Voeg hier je komende optredens toe
// Voeg per optreden optioneel een 'photos' array toe met padnamen naar de foto's.
// Voorbeeld mappenstructuur: img/gigs/floralia-2024/foto1.jpg



const gigs = [
    
    {
        date: "21 september",
        place: "Floralia, Nieuwe Niedorp",
        id: "floralia-2024",
        photos: [
            // Vul hier je eigen bestandsnamen in:
            // "img/gigs/floralia-2024/foto1.jpg",
            // "img/gigs/floralia-2024/foto2.jpg"
        ]
    },
    {
        date: "28 september",
        place: "Bloemencorso, Winkel",
        id: "bloemencorso-2025",
        photos: []
    },
    {
        date: "30 oktober",
        place: "Podium Victorie, Alkmaar",
        id: "victorie-2025",
        photos: []
    },
    {
        date: "8 november",
        place: "Ontmoeting, De Goorn",
        id: "ontmoeting-2025",
        photos: []
    },
    {
        date: "22 november",
        place: "Dorpshuis, Warmenhuizen",
        id: "warmenhuizen-2025",
        photos: []
    },
    {
        date: "29 november",
        place: "Argos, De Weere",
        id: "argos-2025",
       photos: [
        "img/gigs/argos-2025/Argos Plugged 2025-84.jpg",
        "img/gigs/argos-2025/Argos Plugged 2025-80.jpg",
        "img/gigs/argos-2025/Argos Plugged 2025-79.jpg",
        "img/gigs/argos-2025/Argos Plugged 2025-78.jpg",
        "img/gigs/argos-2025/Argos Plugged 2025-72.jpg",
        "img/gigs/argos-2025/Argos Plugged 2025-70.jpg",
        "img/gigs/argos-2025/Argos Plugged 2025-69.jpg",
        "img/gigs/argos-2025/Argos Plugged 2025-68.jpg",
        "img/gigs/argos-2025/Argos Plugged 2025-66.jpg",
        "img/gigs/argos-2025/Argos Plugged 2025-64.jpg",
        "img/gigs/argos-2025/Argos Plugged 2025-63.jpg",
        "img/gigs/argos-2025/Argos Plugged 2025-54.jpg",
        "img/gigs/argos-2025/Argos Plugged 2025-45.jpg",
        "img/gigs/argos-2025/Argos Plugged 2025-40.jpg",
        "img/gigs/argos-2025/Argos Plugged 2025-35.jpg",
        "img/gigs/argos-2025/Argos Plugged 2025-34.jpg",
        "img/gigs/argos-2025/Argos Plugged 2025-11.jpg",
        "img/gigs/argos-2025/Argos Plugged 2025-7.jpg"
        ]
    },
    {
        date: "Januari 2026",
        place: "Poppodium Manifesto, Hoorn",
        id: "manifesto-2026",
        photos: []
    }
];

let currentGalleryPhotos = [];
let currentPhotoIndex = 0;

// ------- Optredenslijst vullen -------

const gigsList = document.getElementById('gigs-list');

gigs.forEach(gig => {
    const li = document.createElement('li');

    const textSpan = document.createElement('span');
    textSpan.textContent = `${gig.date} – ${gig.place}`;
    li.appendChild(textSpan);

    // Alleen een knop tonen als er foto's zijn (of als je alvast een lege galerij wilt, zet de check uit)
    if (gig.photos && gig.photos.length > 0) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = "Bekijk foto's";
        btn.className = 'gallery-btn';
        btn.addEventListener('click', () => openGallery(gig));
        li.appendChild(btn);
    }

    gigsList.appendChild(li);
});
*/

// ------- Fotogalerij functionaliteit -------

const galleryModal = document.getElementById('gallery-modal');
const galleryTitle = document.getElementById('gallery-title');
const galleryGrid = document.getElementById('gallery-grid');
const galleryCloseBtn = document.querySelector('.gallery-close');

function openGallery(gig) {
    galleryTitle.textContent = `${gig.date} – ${gig.place}`;
    galleryGrid.innerHTML = '';

    currentGalleryPhotos = gig.photos || [];
    currentPhotoIndex = 0;

    if (!currentGalleryPhotos || currentGalleryPhotos.length === 0) {
        const p = document.createElement('p');
        p.textContent = "Voor dit optreden hebben we nog geen foto's online gezet.";
        galleryGrid.appendChild(p);
    } else {
        currentGalleryPhotos.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = `FAD – ${gig.date} – ${gig.place}`;
            img.addEventListener('click', () => openLightbox(index));
            galleryGrid.appendChild(img);
        });
    }

    galleryModal.classList.add('open');
    galleryModal.setAttribute('aria-hidden', 'false');
}

function closeGallery() {
    galleryModal.classList.remove('open');
    galleryModal.setAttribute('aria-hidden', 'true');
}

galleryCloseBtn.addEventListener('click', closeGallery);

// Klik naast de content sluit de modal
galleryModal.addEventListener('click', (event) => {
    if (event.target === galleryModal) {
        closeGallery();
    }
});

// ESC-toets sluit ook
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && galleryModal.classList.contains('open')) {
        closeGallery();
    }
});
// ------- Lightbox functionaliteit -------

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxArrowLeft = document.querySelector('.lightbox-arrow-left');
const lightboxArrowRight = document.querySelector('.lightbox-arrow-right');

function openLightbox(index) {
    if (!currentGalleryPhotos || currentGalleryPhotos.length === 0) return;

    currentPhotoIndex = index;
    lightboxImg.src = currentGalleryPhotos[currentPhotoIndex];
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
}

function showNextPhoto() {
    if (!currentGalleryPhotos || currentGalleryPhotos.length === 0) return;
    currentPhotoIndex = (currentPhotoIndex + 1) % currentGalleryPhotos.length;
    lightboxImg.src = currentGalleryPhotos[currentPhotoIndex];
}

function showPrevPhoto() {
    if (!currentGalleryPhotos || currentGalleryPhotos.length === 0) return;
    currentPhotoIndex =
        (currentPhotoIndex - 1 + currentGalleryPhotos.length) % currentGalleryPhotos.length;
    lightboxImg.src = currentGalleryPhotos[currentPhotoIndex];
}

function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.src = "";
}

lightboxClose.addEventListener('click', closeLightbox);
lightboxArrowLeft.addEventListener('click', showPrevPhoto);
lightboxArrowRight.addEventListener('click', showNextPhoto);

// Klik buiten de foto sluit ook
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

// ESC- en pijltjestoetsen
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;

    if (e.key === "Escape") {
        closeLightbox();
    } else if (e.key === "ArrowRight") {
        showNextPhoto();
    } else if (e.key === "ArrowLeft") {
        showPrevPhoto();
    }
});


lightboxClose.addEventListener('click', closeLightbox);

// Klik buiten de foto sluit ook
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

// ESC-toets sluit
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape" && lightbox.classList.contains('open')) {
        closeLightbox();
    }
});
