// Voeg hier je komende optredens toe
const gigs = [

    { date: "21 september 2025", place: "Floralia, Nieuwe Niedorp" },
    { date: "28 september 2025", place: "Bloemencorso, Winkel" },   
    { date: "5 oktober 2025", place: "Dorpshuis, Warmenhuizen" },
    { date: "30 oktober 2025", place: "Podium Victorie, Alkmaar" },
    { date: "8 november 2025", place: "Ontmoeting, De Goorn" },
];

const gigsList = document.getElementById('gigs-list');
gigs.forEach(gig => {
    const li = document.createElement('li');
    li.textContent = `${gig.date} – ${gig.place}`;
    gigsList.appendChild(li);
});
