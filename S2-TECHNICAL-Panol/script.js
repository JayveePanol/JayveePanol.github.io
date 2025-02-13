let box = document.getElementById('animatedBox');

function animateBox(day) {
    // Reset animation
    box.style.animation = 'none';
    box.offsetHeight; // Trigger reflow
    box.style.animation = null;

    // Set the box's background color based on the day
    box.className = `box ${day}`;

    // Apply the pop-up animation
    box.style.opacity = 1;
    box.style.transform = 'scale(1)';
    box.style.animation = 'popUp 0.5s ease';
}
