let mouseoverCount = 0; // Zähler für die Anzahl der Mouseover-Versuche

document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('movingButton');
    centerButton(button);

    // Event-Listener für das Mouseover-Ereignis
    button.addEventListener('mouseover', function(event) {
        if (mouseoverCount < 3) {
            // Bewegt den Button, wenn weniger als 3 Versuche gemacht wurden
            moveButton(this);
            mouseoverCount++; // Erhöht den Mouseover-Zähler
        }
    });

    // Event-Listener für das Klick-Ereignis
    button.addEventListener('click', function(event) {
        if (mouseoverCount >= 3) {
            // Leitet den Nutzer nach 3 Versuchen zur timeline.html weiter
            window.location.href = 'timeline.html'; // URL zur timeline.html
        }
    });
});

// Funktion zum Zentrieren des Buttons
function centerButton(button) {
    const yOffset = 180; // Y-Offset, um den Button nach unten zu verschieben
    const xOffset = 100; // X-Offset, um den Button nach rechts zu verschieben
    button.style.left = (window.innerWidth - button.offsetWidth) / 2 + 'px';
    button.style.top = (window.innerHeight - button.offsetHeight) / 2 + yOffset + 'px';
}

// Funktion zum zufälligen Bewegen des Buttons
function moveButton(button) {
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
}
