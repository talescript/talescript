var canvas, ctx, w, h;

var ball1 = {
    x: 100,
    y: 100,
    radius: 45,
    color: 'blue',
    speedX: 2,
    speedY: 1
}

var ball2 = {
    x: 100,
    y: 100,
    radius: 25,
    color: 'purple',
    speedX: 3,
    speedY: 1
}

window.onload = function init() {
    // called after the page has been loaded
    canvas = document.querySelector("#myCanvas");

    // often useful
    w = canvas.width;
    h = canvas.height;

    // object that will be used to draw
    ctx = canvas.getContext('2d');

    mainLoop();

}

function mainLoop() {
    // clear the canvas
    ctx.clearRect(0, 0, w, h);

    // draw the ball and the player
    drawFilledCircle(ball1);
    drawFilledCircle(ball2);

    // animate the ball that is bouncing all over the walls.
    moveBall(ball1);
    moveBall(ball2);

    requestAnimationFrame(mainLoop);
}

function moveBall(b) { 
    b.x += b.speedX;
    b.y += b.speedY;

    testCollisionBallWithWalls(b);
}

function testCollisionBallWithWalls(b) {
    // Collision with vertical walls
    if ((b.x + b.radius) > w) {
        // the ball hit the right wall
        // change horizontal direction
        b.speedX = -b.speedX;

        // put the ball at the collision point
        b.x = w - b.radius;

    } else if ((b.x - b.radius) < 0) {
        // the ball hit the let wall
        // change horizontal direction
        b.speedX = -b.speedX;

        // put the ball at the collision point
        b.x = b.radius;
    }

    // Collision with horizontal walls
    // not in the else as the ball can touch both
    // vertical and horizontal walls in corners.
    if ((b.y + b.radius) > h) {
        // the ball hit the right wall
        // change horizontal direction
        b.speedY = -b.speedY;

        // put the ball at the collision point
        b.y = h - b.radius;

    } else if ((b.y - b.radius) < 0) {
        // ball hit left wall
        // change horizontal direction
        b.speedY = -b.speedY;
        // put the ball at the collision point
        b.y = b.radius;
    }
}

function drawFilledCircle(c) {
    // Good Practice: save the context, use 2d Transformations
    ctx.save();

    // translate the coordinate system, draw relative to it
    ctx.translate(c.x, c.y);

    ctx.fillStyle = c.color;
    // (0, 0) is the top let corner 
    ctx.beginPath();
    ctx.arc(0, 0, c.radius, 0, 2*Math.PI);
    ctx.fill();

    // Good Practice: restore the context
    ctx.restore();
}