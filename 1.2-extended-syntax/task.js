function calculateQuadraticEquation() {
	let a = +window.a.value;
	let b = +window.b.value;
	let c = +window.c.value;
	let result = getResult(a, b, c);
	window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
	let span = window.result;
	span.textContent = "х = " + result;
}

function getResult(a, b, c) {

	let d = (b ** 2) - (4 * a * c);
	let result = [];

	if (d > 0) {
		result.push((-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a));
	} else if (d == 0) {
		result.push(-b / (2 * a));
	} else {
		result = 'корней нет'
	}
	return result;
}

function calculateAverageRating() {
	let marks = window.marks.value.split("").map(Number).filter((n) => !isNaN(n) && n > 0);
	let averageMark = getAverageMark(marks);
	window.averageMark.textContent = averageMark;
}

function getAverageMark(marks) {

	let currentMark = null;

	if (marks.length > 5) {
		console.log('количество оценок больше 5');
		currentMark = marks.slice(0, 5);
	} else {
		currentMark = marks;
	}

	let count = 0;

	for (i = 0; i < currentMark.length; i++) {
		count = count + currentMark[i];
	}

	return count / currentMark.length;
}

function calculateDrinkTask() {
	let name = window.personName.value;
	let dateOfBirthday = new Date(window.dateOfBirthday.value);
	let drink = askDrink(name, dateOfBirthday);
	window.drink.textContent = drink;
}

function askDrink(name, dateOfBirthday) {
	let currentYear = new Date().getFullYear();
	let userYear = dateOfBirthday.getFullYear();

	if (userYear < currentYear - 18) {
		return `Не желаете ли олд-фэшн, ${name}?`;
	} else {
		return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
	}
}
