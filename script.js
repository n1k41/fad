// Voeg hier je komende optredens toe
const gigs = [

    { date: "21 september, afgelast ivm regen", place: "Floralia, Nieuwe Niedorp" },
    { date: "28 september, 12:30 uur", place: "Bloemencorso, Winkel" },
    { date: "30 oktober, 20:30 uur", place: "Podium Victorie, Alkmaar" },
    { date: "8 november, tijd volgt", place: "Ontmoeting, De Goorn" },
    { date: "22 november, tijd volgt", place: "Dorpshuis, Warmenhuizen" },
];

const gigsList = document.getElementById('gigs-list');
gigs.forEach(gig => {
    const li = document.createElement('li');
    li.textContent = `${gig.date} – ${gig.place}`;
    gigsList.appendChild(li);
});
