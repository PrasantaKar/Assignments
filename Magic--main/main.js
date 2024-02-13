document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
	let questionInput = document.getElementById("input").value;
	let response = getResponse(questionInput);
	document.getElementById("output").innerHTML = response;
}

function getResponse(question) {
	if (question.trim() === "") {
		return "Please ask a question...";
	} else if (question === "Does a magic 8 ball actually work?") {
		return "How dare you doubt me!";
	} else if (question === "Is JavaScript awesome?") {
		return "Of Course!";
	} else {
		return randomResponse();
	}
}

function randomResponse() {
	let randomIndex = Math.floor(Math.random() * 5);

	if (randomIndex === 1) {
		return "Without a Doubt.";
	} else if (randomIndex === 2) {
		return "As I see it, yes.";
	} else if (randomIndex === 3) {
		return "Concentrate and ask again.";
	} else if (randomIndex === 4) {
		return "Don't count on it.";
	} else {
		return "Outlook not so good.";
	}
}

console.log(randomIndex);
