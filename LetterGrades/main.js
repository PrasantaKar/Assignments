// CS20 Grade Calculator

// HTML Variables
// Input
let number1 = document.getElementById("script-in");
let number2 = document.getElementById("program-in");
let number3 = document.getElementById("program2-in");
let number4 = document.getElementById("script2-in");
let number5 = document.getElementById("project-in");

// Btn Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
	// Get Input Values
	let num1 = +number1.value;
	let num2 = +number2.value;
	let num3 = +number3.value;
	let num4 = +number4.value;
	let num5 = +number5.value;

	//Constrain Input Values
	num1 = constrain(num1, 0, 100);
	number1.value = num1;

	num2 = constrain(num2, 0, 100);
	number2.value = num2;

	num3 = constrain(num3, 0, 100);
	number3.value = num3;

	num4 = constrain(num4, 0, 100);
	number4.value = num4;

	num5 = constrain(num5, 0, 100);
	number5.value = num5;

	// Process
	let total = (num1 + num2 + num3 + num4 + num5) / 5;

	// Letter Grade
	let letter1 = getLetterGrade(num1);
	let letter2 = getLetterGrade(num2);
	let letter3 = getLetterGrade(num3);
	let letter4 = getLetterGrade(num4);
	let letter5 = getLetterGrade(num5);

	let mathLetter = getLetterGrade(total);
	console.log(letter1);

	// Output
	document.getElementById("output").innerHTML = total;
	document.getElementById("letterOutput").innerHTML = mathLetter;
	document.getElementById("grade1").innerHTML = letter1;
	document.getElementById("grade2").innerHTML = letter2;
	document.getElementById("grade3").innerHTML = letter3;
	document.getElementById("grade4").innerHTML = letter4;
	document.getElementById("grade5").innerHTML = letter5;
}
// Helper Function
function getLetterGrade(percentGrade) {
	if (percentGrade < 50) {
		return "F";
	} else if (percentGrade <= 60) {
		return "D";
	} else if (percentGrade <= 75) {
		return "C";
	} else if (percentGrade < 90) {
		return "B";
	} else {
		return "A";
	}
}

function constrain(val, low, high) {
	if (val < low) {
		return low;
	} else if (val > high) {
		return high;
	} else {
		return val;
	}
}
