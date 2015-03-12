var posX = 1;
var posY = 1;
var howB = 100;

size(400, 400);
background(157, 194, 227);
fill(115, 255, 0);

// Stop the animating while the mouse is pressed down
void mousePressed() {
  noLoop();
};

// Restart the animation when the mouse is released
void mouseReleased() {
  loop();
};

void draw() {
    triangle(posX+1,posY+1,posX+1*howB,posY+1,posX+1,posY+1*howB);//1
    triangle(posX+1*howB,posY+1,posX+2*howB,posY+1,posX+1*howB,posY+1*howB);//2
    triangle(posX+2*howB,posY+1,posX+3*howB,posY+1,posX+2*howB,posY+1*howB);//3
    triangle(posX+3*howB,posY+1,posX+4*howB,posY+1,posX+3*howB,posY+1*howB);//4
///second row
    triangle(posX+1,posY+1*howB,posX+1*howB,posY+1*howB,posX+1,posY+2*howB);//1
    triangle(posX+1*howB,posY+1*howB,posX+2*howB,posY+1*howB,posX+1*howB,posY+2*howB);//2
    triangle(posX+2*howB,posY+1*howB,posX+3*howB,posY+1*howB,posX+2*howB,posY+2*howB);//3
    triangle(posX+3*howB,posY+1*howB,posX+4*howB,posY+1*howB,posX+3*howB,posY+2*howB);//4
    posX++;
    posY++;
    howB++;
};