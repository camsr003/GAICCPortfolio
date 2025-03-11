let bgColor;
let bgCanvas;
let projectCanvas;
let projectCards;

function setup() {
    bgCanvas = createCanvas(windowWidth, windowHeight);
    bgCanvas.parent('background');
    bgColor = color(0, 0, 255);
    projectCanvas = createGraphics(500, 500);
    projectCanvas.parent('project-display');
    projectCards = selectAll('.project-card');
    projectCards.forEach(card => {
        card.mousePressed(() => {
            displayProject(card);
        });
    });
}

function draw() {
    bgColor = color(0, 0, 255 + 55 * sin(millis() / 1000));
    background(bgColor);
    image(projectCanvas, (windowWidth - 500) / 2, (windowHeight - 500) / 2);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function displayProject(card) {
    const projectLink = card.elt.querySelector('a').href;
    window.location.href = projectLink;
}
