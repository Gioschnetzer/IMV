document.addEventListener('DOMContentLoaded', positionMilestones);
window.addEventListener('scroll', revealMilestones);

function positionMilestones() {
    const milestones = document.querySelectorAll('.milestone');
    let isLeft = true;
    let offset = 0;

    milestones.forEach(milestone => {
        milestone.style.top = `${offset}px`;
        milestone.classList.add(isLeft ? 'left' : 'right');
        offset += window.innerHeight; // Setzt den Abstand so, dass pro Scrollvorgang ein Meilenstein erscheint
        isLeft = !isLeft;
    });
}

function revealMilestones() {
    const milestones = document.querySelectorAll('.milestone');
    milestones.forEach(milestone => {
        const rect = milestone.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
            milestone.style.visibility = 'visible';
        } else {
            milestone.style.visibility = 'hidden';
        }
    });
}
