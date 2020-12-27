let score2 = Number(window.name);
let but8 = document.getElementById("N3b1");
    but9 = document.getElementById("N3b2");
    but10 = document.getElementById("N3b3");

console.log(score2);

function b8() {
	let r8 = document.getElementById("N3r1").value;
	if (r8 == ("ПолМаккартни" || "Пол Маккартни" || "пол маккартни" || "пол Маккартни" || "полмаккартни"
		|| "полМаккартни" || "Пол маккартни" || "Полмаккартни")) {
		score2+=200;
	}
	but8.disabled = true;
	console.log(score2);
}

function b9() {
	let r9 = document.getElementById("N3r2").value;
	if (r9 == ("Грузия" || "грузия" || "Груз И Я" || "Груз и я" || "Груз И я" || "груз и я")) {
		score2+=200;
	}
	but9.disabled = true;
	console.log(score2);
}

function b10() {
	r10 = document.getElementById("N3r3").value;
	if (r10 == ("Емкость" || "ёмкость" || "Ёмкость" || "емкость" || "Ем Кость" || "Ем кость" ||
	 "ем кость")) {
		score2+=200;
	}
	but10.disabled = true;
	console.log(score2);
}

function Next3() {
	window.name = score2;
}