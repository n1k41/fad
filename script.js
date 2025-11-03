// Voeg hier je komende optredens toe
const gigs = [

    { date: "21 september", place: "Floralia, Nieuwe Niedorp" },
    { date: "28 september", place: "Bloemencorso, Winkel" },
    { date: "30 oktober", place: "Podium Victorie, Alkmaar" },
    { date: "8 november, [besloten]", place: "Ontmoeting, De Goorn" },
    { date: "22 november", place: "Dorpshuis, Warmenhuizen" },
    { date: "Januari 2026", place: "Poppodium Manifesto, Hoorn" }
];

const gigsList = document.getElementById('gigs-list');
gigs.forEach(gig => {
    const li = document.createElement('li');
    li.textContent = `${gig.date} – ${gig.place}`;
    gigsList.appendChild(li);
});
