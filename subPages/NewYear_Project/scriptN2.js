let score = 0;
let score2;
let r1 = document.getElementById("N1r1");
    r2 = document.getElementById("N1r2");
    r3 = document.getElementById("N1r3");
    but1 = document.getElementById("N1b1");
    but2 = document.getElementById("N1b2");
    but3 = document.getElementById("N1b3");



function b1() {
	if (r1.checked) {
		score+=100;
	}
	but1.disabled = true;
	console.log(score);
}

function b2() {
	if (r2.checked) {
		score+=100;
	}
	but2.disabled = true;
	console.log(score);
}

function b3() {
	if (r3.checked) {
		score+=100;
	}
	but3.disabled = true;
	console.log(score);
	window.name = score;
}

function newscore() {
	let pas = prompt(`Для администратора! Введите пароль, для внесения "супер-изменений"!`)
	if (pas = 2139918) {
		window.name = 0;
	}
}

function Next1() {
	window.name = score;
}