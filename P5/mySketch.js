let bgImage;
let interactiveZones = [
    { x: 450, y: 550, w: 150, h: 80 },  // Open Book on Desk
    { x: 520, y: 450, w: 50, h: 100 },  // Candle on Desk
    { x: 850, y: 500, w: 120, h: 300 }, // Large Sword on Right
    { x: 150, y: 850, w: 200, h: 100 }, // Closed Book on Floor
    { x: 600, y: 750, w: 180, h: 120 }  // Chest under Desk
];

function preload() {
    bgImage = loadImage('room_background.png'); // Ensure the correct file name and path
}

function setup() {
    createCanvas(1000, windowHeight);
}

function draw() {
    background(bgImage);
    displayCoordinates();
    checkMouseOverZones();
}

function displayCoordinates() {
    fill(255);
    textSize(16);
    text(`X: ${mouseX}, Y: ${mouseY}`, 10, height - 10);
}

function checkMouseOverZones() {
    let hovering = false;
    for (let zone of interactiveZones) {
        if (mouseX > zone.x && mouseX < zone.x + zone.w && mouseY > zone.y && mouseY < zone.y + zone.h) {
            hovering = true;
            break;
        }
    }
    if (hovering) {
        cursor('pointer');
    } else {
        cursor('default');
    }
}

function windowResized() {
    resizeCanvas(1000, windowHeight);
}
