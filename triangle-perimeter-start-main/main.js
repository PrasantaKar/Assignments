// Triangle Perimeter Assignment Start Code

// Btn Event Listener
document
	.getElementById("btn")
	.addEventListener("click", calculateTriangleProperties);

// Function to calculate the distance between two points
function dist(x1, y1, x2, y2) {
	return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

// Function to calculate the side lengths and perimeter of a triangle
function calculateTriangleProperties() {
	let xA = +document.getElementById("xA").value;
	let yA = +document.getElementById("yA").value;
	let xB = +document.getElementById("xB").value;
	let yB = +document.getElementById("yB").value;
	let xC = +document.getElementById("xC").value;
	let yC = +document.getElementById("yC").value;

	let AB = dist(xA, yA, xB, yB);
	let AC = dist(xA, yA, xC, yC);
	let BC = dist(xB, yB, xC, yC);

	let perimeter = AB + AC + BC;

	document.getElementById("outputAB").innerHTML = AB;
	document.getElementById("outputAC").innerHTML = AC;
	document.getElementById("outputBC").innerHTML = BC;
	document.getElementById("outputPerimeter").innerHTML = perimeter;
}

// Example usage
let triangle = calculateTriangleProperties(-2, 5, 8, 10, 1, 3);
console.log(triangle);
