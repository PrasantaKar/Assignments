// Canvas Template

// Canvas Setup
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

// Call draw function once all page resources have loaded
window.addEventListener("load", draw);

function draw() {
	drawLollipop(240, 100, 40, 70, "green");
	drawLollipop(440, 200, 40, 70, "blue");
	drawLollipop(240, 300, 40, 70, "red");
	drawLollipop(130, 150, 40, 70, "white");

	// Redraw
	requestAnimationFrame(draw);
}

function drawLollipop(x, y, r, h, fillArc) {
	ctx.fillStyle = fillArc;
	ctx.beginPath();
	ctx.arc(x, y, r, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.fill();

	ctx.fillStyle = "grey";
	ctx.fillRect(x, y + r, 5, h);
}
