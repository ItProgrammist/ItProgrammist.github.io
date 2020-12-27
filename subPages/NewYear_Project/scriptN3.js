let score1 = Number(window.name);
let r4 = document.getElementById("N2r1");
	r5 = document.getElementById("N2r2");
    r6 = document.getElementById("N2r3");
    r7 = document.getElementById("N2r4");
    but4 = document.getElementById("N2b1");
    but5 = document.getElementById("N2b2");
    but6 = document.getElementById("N2b3");
    but7 = document.getElementById("N2b4");

console.log(score1);

function b4() {
	if (r4.checked) {
		score1+=100;
	}
	but4.disabled = true;
	console.log(score1);
}

function b5() {
	if (r5.checked) {
		score1+=100;
	}
	but5.disabled = true;
	console.log(score1);
}

function b6() {
	if (r6.checked) {
		score1+=100;
	}
	but6.disabled = true;
	console.log(score1);
}

function b7() {
	if (r7.checked) {
		score1+=100;
	}
	but7.disabled = true;
	console.log(score1);
}

function Next2() {
	window.name = score1;
}